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

//Polyfill constructor.name in IE
//Thanks to Matthew Sharley for this.
if (Function.prototype.name === undefined && Object.defineProperty !== undefined) {
    Object.defineProperty(Function.prototype, 'name', {
        get: function() {
            var funcNameRegex = /function\s([^(]{1,})\(/;
            var results = (funcNameRegex).exec((this).toString());
            return (results && results.length > 1) ? results[1].trim() : "";
        },
        set: function(value) {}
    });
}

var ls_prefix = "_rhaboo_";

var built = {};

//The serialiser...

var P = require('parunpar');

var tuple2 = P.sepByEsc('=',':')

//En/decode property name : slot number pairs...
var right_pp = tuple2([P.string_pp, P.number_pp])

/*
//Leaving this here for didactic reasons
var left_o_pp = P.pipe(
  function (dir) { return function (x) { 
    return dir ? ( x.length!==undefined ? [x.constructor.name, x.length] : [x.constructor.name] ) //can't simplify this cos we actually restore undefineds
               : ( new global[x[0]](x[1]) ) 
  }})(tuple2([P.string_pp, P.number_pp]));
*/

//These pps are a bit of a mess right now...

//left_o_pp en/decodes objects (not to be confused with references to objects)
//  The first and last lines just pack the 1 or 2 element array handled by the bit in between
//  3 lines encoding, 1 line decoding
//  The three encoding lines handle dates, arrays, and everything else respectively.
//  The constructor name is always stored and looked for in the global scope,
//    so if you have your own classes they should have the constructor name set up properly - 
//    Crockford style won't work.
//  (There was a plan to allow any class to define a constructorParameters function 
//    that would return something to be stored here like the date string or array length is.)
var left_o_pp = P.pipe(
  function (dir) { return function (x) { 
    return dir ? ( 
                   x.constructor.name === 'Date' ? [x.constructor.name, x.toString() ] :
                   x.length!==undefined ? [x.constructor.name, x.length.toString()] : 
                   [x.constructor.name] ) //can't simplify this cos we actually restore undefineds
               : ( new global[x[0]]( x[0]=='Date'?x[1]:x[1]?Number(x[1]):undefined ) ) 
               //: ( new global[x[0]]( x[1] ) ) 
  }})(tuple2([P.string_pp, P.string_pp]));

//Similarly, the first and last lines pack the array handled by the middle bit 
//  which contains a single-character type code and string representation of the value.
//The packing is a single string with a fixed width of 1 for the first field.
var left_l_pp = P.pipe(
  function (dir) { return function (x) { 
    return dir ? 
      ( P.runSnd({ //runSnd(arr)(x) returns arr if arr only has one element, or [arr[0], arr[1](x)] if it has two 
      string:      ['$', P.id ], 
      number:      ['#', String ], 
      boolean:     ['?', function (x) {return x?'t':'f'} ], 
      'null':      ['~'], 
      'undefined': ['_'],
      object:      ['&', function(x){return x._rhaboo.slotnum;} ]
    } [P.typeOf(x)]) (x) ) : //P.typeOf behaves sanely on nulls etc
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
  var praw = localStorage.getItem(ls_prefix+key); //Likely contains "&0" where 0 is the slot number with the root object in
  if (praw) {
    var decoded = slot_l_pp(false)(praw); //Sees the & and calls restore
    return decoded[0];
  } else { //virgin
    var ss = [];
    var ret = addRef({}, ss); //Persist an empty object. It will know its slot number afterwards.
    localStorage.setItem(ls_prefix+key, left_l_pp(true)(ret)); //left_l_pp in encoding mode 
    //   just returns "&0" where 0 is the slotnum which ret acquired during addRef
    execute(ss); //Actually hit localStorage
    return ret;
  }
}

//Restore an object from a slot
//Definitely an object (cos we get here through left_l_pp wqhen it sees a &)
function restore(slotnum) {
  if ( built[slotnum]!==undefined ) //important for multiple references to the same object
    return addRef(built[slotnum]);
  var raw = localStorage.getItem(ls_prefix+slotnum)
  //Read the constructor name and its optional parameter from the LHS of the slot contents 
  //  and run that to make decoded[0]. decoded[1] is an array with a prop name and slot number
  //  for the first child...
  var decoded = slot_o_pp(false)(raw);
  //Insert a default _rhaboo ...
  decoded[0]._rhaboo = {
    slotnum : slotnum,
    refs : 1,
    kids : { }
  };
  //Remember not to do that again...
  built[slotnum] = decoded[0];
  //Recursively build the children using augment...
  return (decoded.length>1) ? augment(decoded[0], decoded[1][0], decoded[1][1]) : decoded[0];
}

//that is a half-built object and we are adding a child called propname whose 
//  type, value and possible successor is written in propslot...
function augment(that, propname, propslot) {
  var praw = localStorage.getItem(ls_prefix+propslot);
  //We use slot_l_pp because we know it's a value not an object, because if it was an object then
  //  it would be a reference to another slot containing the object... 
  var decoded = slot_l_pp(false)(praw);
  that[propname] = decoded[0];
  //Maintain the doubly-linked list in memory...
  appendKid(that, propname, propslot);
  //Recurse:
  return (decoded.length>1) ? augment(that, decoded[1][0], decoded[1][1]) : that;
}

//These kid functions ONLY manipulate the list in memory and don't touch localStorage

function appendKid(that, prop, slotnum) {
  //_rhaboo.prev is the tail of the list of children. _rhaboo.next is the head
  //So the new child will be referenced by either the formerly last child's next, or the global head which is _rhaboo.next
  var target = that._rhaboo.prev!==undefined ? that._rhaboo.kids[that._rhaboo.prev] : that._rhaboo;
  //Either way, it's now target.next and the global tail (_rhaboo.prev) that must reference the new child
  that._rhaboo.kids[prop] = { slotnum: slotnum, prev: that._rhaboo.prev }; //New child's prev points to old tail, and has no next.
  target.next = that._rhaboo.prev = prop;
}

function removeKid(that, prop) {
  var kid = that._rhaboo.kids[prop];
  (that._rhaboo.kids[kid.prev] || that._rhaboo).next = kid.next; //Victim's precursor's next or global head becomes victim's successor
  (that._rhaboo.kids[kid.next] || that._rhaboo).prev = kid.prev; //Victim's successor's prev or global tail because victim's precursor
  delete that._rhaboo.kids[prop]; //Delete victim's node
}

//Correct the contents of the localStorage slot for either that or that[prop]
//Dual use: prop==undefined means persist that / else persist the prop
function updateSlot(that, ss, prop) {
  var bare = []; //This is what we'll encode with parunpars to make the slot contents
  bare.push(prop!==undefined ? that[prop] : that); //First, the data itself
  //Nowthen, both _rhaboo and _rhaboo.kids[prop] have a next and prev.
  //  For the latter, they implement a doubly linked list in memory
  //    (although it's only singly linked in localStorage)
  //  For the former, next means head and prev means tail.  
  //  Either way, if there's a next, then its property name and slot number 
  //    go on the right hand side of the slot contents
  var kid = prop!==undefined ? that._rhaboo.kids[prop] : that._rhaboo;
  if (kid.next!==undefined) 
    bare.push([kid.next, that._rhaboo.kids[kid.next].slotnum]);
  var encoded = (prop!==undefined ? slot_l_pp : slot_o_pp)(true)(bare);
  ss.push(['setItem', [ls_prefix+kid.slotnum, encoded]]); 
}

//Reserve a slot (if not already done) for a child of that called prop
//Don't do it but add localStorage actions to ss
function slotFor(that, ss, prop) {
  if (that._rhaboo.kids[prop]===undefined) {
    var slotnum = newSlot();
    appendKid(that, prop, slotnum); //Manage the linked list of children in _rhaboo
    updateSlot(that, ss, that._rhaboo.kids[prop].prev); //The formerly last child now needs a reference to the new one
    //This slot is about to be written by caller
  }
}

//An unpersisted object is given a _rhaboo member with a storage slot, a refcount of 1 and no children
//An already persisted one just gets its refcount incremented
//The slotnum are refs parameters are usually undefined, except for a certain hack involving arrays
//The persistence actions are not performed but collected in ss
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
    for (var prop in that) if (that.hasOwnProperty(prop) && prop !=='_rhaboo') 
      storeProp(that, ss, prop);
  }
  return that;
}

function storeProp(that, ss, prop) {
  slotFor(that, ss, prop);
  if (P.typeOf(that[prop]) === 'object')
    addRef(that[prop],ss);
  updateSlot(that, ss, prop);
}

function release(that, ss, force) {
  var target, propname;
  that._rhaboo.refs--;
  if (force || that._rhaboo.refs === 0) {
    for (propname = undefined, target = that._rhaboo; 
         target; 
         target = that._rhaboo.kids[propname=target.next]) {
      ss.push(['removeItem', [ls_prefix+target.slotnum]]);
      if (propname!==undefined && P.typeOf(that[propname]) == 'object') 
        release(that[propname], ss); //recurse for any object-valued properties
    }
    delete that._rhaboo;
  }
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

//The main API
//Assumes that this is persistent already, but not that val is.
Object.defineProperty(Object.prototype, 'write', { value: function(prop, val) {
  var ss = [];
  slotFor(this, ss, prop); //Reserves a slot if not already reserved.
  if (P.typeOf(this[prop]) === 'object') //Unpersist old value
    release(this[prop], ss);
  this[prop] = val;
  if (P.typeOf(val) === 'object') 
    addRef(val, ss); //Persist val, whether already persisted or not
  updateSlot(this, ss, prop); //Write the slot for val itself
  execute(ss); //Do it all in one go
  return this;
}});

Object.defineProperty(Object.prototype, 'erase', { value: function(prop) {
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
}});

//This attempted backgrounding is rubbish anyway...
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

//Grab a new slot
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

//Hide _rhaboo from normal enumeration methods...
var Object_prototype_hasOwnPropertyOrig = Object.prototype.hasOwnProperty;
Object.prototype.hasOwnProperty = function(key) { return (key != '_rhaboo' && Object_prototype_hasOwnPropertyOrig.call(this,key)); }

module.exports = {
  persistent : persistent,
  addRef: addRef,
  release: release,
  storeProp : storeProp,
  forgetProp : forgetProp,
  updateSlot : updateSlot,
  execute : execute,
  nuke : nuke,
};

