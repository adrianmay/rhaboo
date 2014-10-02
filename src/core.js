"use strict"

/*
EXAMPLE LS STRUCTURE:  

  0     | Object;diff=1 
  1     | #5;best=2
  2     | &3;moves=6
  3     | Array=11;5=4
  4     | #5;10=5
  5     | #12
  6     | #19
  Tiles | &0

restores to:

  tiles = {
    diff:5, best:[,,,,,5,,,,,12], moves:19, 
    _rhaboo: { slotnum:0, refs:1, kids: {
      diff:  { slotnum:1, next: 'moves'},
      moves: { slotnum:2, prev: 'diff', next:'best'},
      best:  { slotnum:3, prev: 'moves'} 
    }, prev:'best', next:'diff' } }

*/

var ls_prefix = "_rhaboo_";

var built = {};

//The serialiser...

var P = require('parunpar');

var tuple2 = P.sepByEsc('=',':')

var right_pp = tuple2([P.string_pp, P.number_pp])

var left_o_pp = P.pipe(
  function (dir) { return function (x) { 
    return dir ? ( 
                   x.constructor.name === 'Date' ? [x.constructor.name, x.toString() ] :
                   x.length!==undefined ? [x.constructor.name, x.length.toString()] : 
                   [x.constructor.name] ) //can't simplify this cos we actually restore undefineds
               : ( new global[x[0]]( x[0]=='Date'?x[1]:x[1]?Number(x[1]):undefined ) ) 
               //: ( new global[x[0]]( x[1] ) ) 
  }})(tuple2([P.string_pp, P.string_pp]));

var left_l_pp = P.pipe(
  function (dir) { return function (x) { 
    return dir ? 
      ( P.runSnd({ 
      string:      ['$', P.id ], 
      number:      ['#', String ], 
      boolean:     ['?', function (x) {return x?'t':'f'} ], 
      'null':      ['~'], 
      'undefined': ['_'],
      object:      ['&', function(x){return x._rhaboo.slotnum;} ]
    } [P.typeOf(x)]) (x) ) : 
    (  { 
      '$': P.id, 
      '#': Number, 
      '?': P.eq('t'), 
      '~': P.konst(null), 
      '_': P.konst(undefined),
      '&': restore,
    } [x[0]] (x[1]))
}}) (P.fixedWidth([1])([P.string_pp, P.string_pp]));

var slot_o_pp  = P.tuple([left_o_pp, right_pp]);
//That takes something like [object,[nextprop,nextslot]]

var slot_l_pp  = P.tuple([left_l_pp, right_pp]);
//That takes something like [value,[nextprop,nextslot]]

function persistent(key) { 
  var praw = localStorage.getItem(ls_prefix+key);
  if (praw) {
    var decoded = slot_l_pp(false)(praw);
    return decoded[0];
  } else {
    var ss = [];
    var ret = addRef({}, ss);
    localStorage.setItem(ls_prefix+key, left_l_pp(true)(ret));
    execute(ss);
    return ret;
  }
}

function restore(slotnum) {
  if ( built[slotnum]!==undefined ) return addRef(built[slotnum]);
  var raw = localStorage.getItem(ls_prefix+slotnum)
  var decoded = slot_o_pp(false)(raw);
  decoded[0]._rhaboo = {
    slotnum : slotnum,
    refs : 1,
    kids : { }
  };
  built[slotnum] = decoded[0];
  return (decoded.length>1) ? augment(decoded[0], decoded[1][0], decoded[1][1]) : decoded[0];
}

function augment(that, propname, propslot) {
  var praw = localStorage.getItem(ls_prefix+propslot);
  var decoded = slot_l_pp(false)(praw);
  that[propname] = decoded[0];
  appendKid(that, propname, propslot);
  return (decoded.length>1) ? augment(that, decoded[1][0], decoded[1][1]) : that;
}

function appendKid(that, prop, slotnum) {
  var target = that._rhaboo.prev!==undefined ? that._rhaboo.kids[that._rhaboo.prev] : that._rhaboo;
  that._rhaboo.kids[prop] = { slotnum: slotnum, prev: that._rhaboo.prev };
  target.next = that._rhaboo.prev = prop;
}

function removeKid(that, prop) {
  var kid = that._rhaboo.kids[prop];
  (that._rhaboo.kids[kid.prev] || that._rhaboo).next = kid.next;
  (that._rhaboo.kids[kid.next] || that._rhaboo).prev = kid.prev;
  delete that._rhaboo.kids[prop];
}

function updateSlot(that, ss, prop) {
  var bare = [];
  bare.push(prop!==undefined ? that[prop] : that);
  var kid = prop!==undefined ? that._rhaboo.kids[prop] : that._rhaboo;
  if (kid.next!==undefined) 
    bare.push([kid.next, that._rhaboo.kids[kid.next].slotnum]);
  var encoded = (prop!==undefined ? slot_l_pp : slot_o_pp)(true)(bare);
  ss.push(['setItem', [ls_prefix+kid.slotnum, encoded]]); 
}

function slotFor(that, ss, prop) {
  if (that._rhaboo.kids[prop]===undefined) {
    var slotnum = newSlot();
    appendKid(that, prop, slotnum);
    updateSlot(that, ss, that._rhaboo.kids[prop].prev);
    //this slot about to be written by caller
  }
}

function addRef(that, ss, slotnum, refs) {
  if (that._rhaboo!==undefined)
    that._rhaboo.refs++;
  else {
    that._rhaboo = {
      slotnum: slotnum!==undefined ? slotnum : newSlot(),
      refs:    refs!==undefined ? refs : 1,
      kids:    {}
    };
    updateSlot(that, ss);
    storeProps(that, ss);
  }
  return that;
}

function storeProps(that, ss) {
  for (var prop in that) if (that.hasOwnProperty(prop) && prop !=='_rhaboo') 
    storeProp(that, ss, prop);
}

function storeProp(that, ss, prop) {
  slotFor(that, ss, prop);
  if (P.typeOf(that[prop]) === 'object')
    addRef(that[prop],ss);
  updateSlot(that, ss, prop);
}

function release(that, ss, force) {
  that._rhaboo.refs--;
  if (force || that._rhaboo.refs === 0) {
    forgetProps(that,ss);
    delete that._rhaboo;
  }
}

function forgetProps(that, ss) {
  var propname = undefined;
  for (var target = that._rhaboo; target; target = that._rhaboo.kids[propname=target.next]) {
    ss.push(['removeItem', [ls_prefix+target.slotnum]]);
    if (propname!==undefined && P.typeOf(that[propname]) == 'object') {
      release(that[propname], ss);
    }
  }
  that._rhaboo.kids = {}; 
  that._rhaboo.next = that._rhaboo.prev = undefined;
}

function forgetProp(that, ss, prop) {
  var target = that._rhaboo.kids[prop];
  if (target===undefined) return; //This can happen if you sort a sparse array
  var prevname = target.prev;
  ss.push(['removeItem', [ls_prefix+target.slotnum]]);
  if (P.typeOf(that[prop]) == 'object') release(that[prop], ss);
  removeKid(that, prop);
  updateSlot(that, ss, prevname);
}

Object.prototype.write = function(prop, val) { 
  var ss = [];
  slotFor(this, ss, prop);
  if (P.typeOf(this[prop]) === 'object') release(this[prop], ss);
  this[prop] = val;
  if (P.typeOf(val) === 'object') addRef(val, ss);
  updateSlot(this, ss, prop);
  execute(ss);
  return this;
}

Object.prototype.erase = function(prop) { 
  if (!this.hasOwnProperty(prop))
    return this;
  var ss = [];
  if (P.typeOf(this[prop]) === 'object') release(this[prop], ss);
  var target = this._rhaboo.kids[prop];
  ss.push(['removeItem', [ls_prefix+target.slotnum]]);
  var prevname = target.prev;
  removeKid(this, prop);
  updateSlot(this, ss, prevname);
  delete this[prop];
  execute(ss);
  return this;
}


function execute(ss) {
  var f = function() { 
    for (var i=0; i<ss.length; i++) 
      localStorage[ss[i][0]].apply(localStorage, ss[i][1]);
  }
  setTimeout(f, 0);
}

var keyOfStoredNextSlot = '_RHABOO_NEXT_SLOT'
var storedNextSlot = localStorage.getItem(keyOfStoredNextSlot) || 0;
storedNextSlot = Number(storedNextSlot);
function newSlot() {
  var ret = storedNextSlot;
  storedNextSlot++;
  setTimeout(function() {
    localStorage.setItem(keyOfStoredNextSlot, storedNextSlot);
  },0);
  return ret;
}

function nuke() {
  for (var i in localStorage) 
    if (localStorage.hasOwnProperty(i))
      localStorage.removeItem(i);
}

Object.prototype.hasOwnPropertyOrig = Object.prototype.hasOwnProperty;
Object.prototype.hasOwnProperty = function(key) { return (key != '_rhaboo' && this.hasOwnPropertyOrig(key)); }

module.exports = {
  persistent : persistent,
//  storeProps : storeProps,
//  forgetProps : forgetProps,
  addRef: addRef,
  release: release,
  storeProp : storeProp,
  forgetProp : forgetProp,
  updateSlot : updateSlot,
  execute : execute,
  nuke : nuke,
};

