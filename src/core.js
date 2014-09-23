"use strict"
//RESTORATION:

var ls_prefix = "_rhaboo_";

var built = {};

// function newSlot() { }
// function escaped() { }




/*
EXAMPLE LS STRUCTURE:  

  0     | Object;1^diff 
  1     | #5;2^best
  2     | &3;6^moves
  3     | Array;4^5
  4     | #5;5^10
  5     | #12
  6     | #19
  Tiles | &0

restores to:

  tiles = {
    diff:5, moves:19, best:[,,,,,5,,,,,12],
    _rhaboo: { slotnum:0, refs:1, kids: {
      diff:  { slotnum:1, next: 'moves'},
      moves: { slotnum:2, prev: 'diff', next:'best'},
      best:  { slotnum:3, prev: 'moves'} 
    }, prev:'best', next:'diff' } }

*/

function parseObjectSlot(slotnum) {
  var raw = localStorage.getItem(ls_prefix+slotnum)
  var lr = raw.split(";");
  var r = lr[1] ? lr[1].split("^") : [null, null];
  return {
    slotnum: slotnum,
    val: lr[0], //true for objet slots, useful for others
    nextslot: r[0],
    nextprop: r[1]
  };
}

function parsePropSlot(slotnum) {
  slot = parseObjectSlot(slotnum);
  slot.type = slot.val.charAt(0);
  slot.val = slot.val.slice(1);
  return slot;
}

function restoreObject(slotnum) { return restoreObjectFromParsed( parseObjectSlot(slotnum) );}

function restoreObjectFromParsed(slot) {
  if ( built[slot.slotnum] ) return built[slot.slotnum].addRef();
  var that = new this[val](); //this meaning global
  that._rhaboo = {
    slotnum : slot.slotnum,
    refs : 1,
    kids : { }
  };
  built[slot.slotnum] = that;
  return slot.nextprop ? augment(that, slot.nextslot, slot.nextprop) : that;
}

function restorePropFromParsed(slot) {
  switch(slot.type) {
    case "&": return restoreObject(slot.val);
    case "?": return slot.val=='t';
    case "$": return slot.val;
    case "#": return Number(slot.val);
    case "0": return null;
    case "_": return undefined;
  }
}

function augment(that, slotnum, prop) {
  slot = parsePropSlot(slotnum);
  that[prop] = restorePropFromParsed(slot);
  appendKid(that, prop, slotnum);
  return slot.nextprop ? augment(that, slot.nextslot, slot.nextprop) : that;
}

function appendKid(that, prop, slotnum) {
  var target = that._rhaboo.prev ? that._rhaboo.kids[that._rhaboo.prev] : that_rhaboo;
  that._rhaboo.kids[prop] = { slotnum: slotnum, prev: that._rhaboo.prev };
  target.next = that._rhaboo.prev = prop;
}

function removeKid(that, prop) {
  var kid = that._rhaboo.kids[prop];
  (that._rhaboo.kids[kid.prev] || that._rhaboo).next = kid.next;
  (that._rhaboo.kids[kid.next] || that._rhaboo).prev = kid.prev;
}

function slotFor(that, ss, prop) {
  if (!that._rhaboo.kids[prop]) {
    var slotnum = newSlot();
    appendKid(that, prop, slotnum);
    updateSlot(that, ss, that._rhaboo.kids[slotnum].prev);
    //this slot about to be written by caller
  }
}

function updateSlot(that, ss, prop) {
  var slotnum, type, val, next; 
  if (prop) {
    var kid = that._rhaboo.kids[prop];
    slotnum = kid.slotnum;
    val = typeof that[prop] == 'object' ? 
      that[prop]._rhaboo.slotnum :
      escaped(that[prop]);
    type = typeof that[prop] == 'object' ? '&' : {
      number:     '#',
      string:     '$',
      boolean:    '?',
      null:       '0',
      undefined:  '_'
    }[typeof that[prop]];
    next =  kid.next ? ( ";" + that._rhaboo.kids[kid.next].slotnum + '^' + kid.next ) : '';
  } else {
    slotnum = that._rhaboo.slotnum;
    type = that.constructor.name;
    val=''; //maybe do array length here
    next =  that._rhaboo.next ? ( ";" + that._rhaboo.kids[that._rhaboo.next].slotnum + "^" + that._rhaboo.next ) : '';
  }
  ss.push(['setItem', [ls_prefix+slotnum, type+val+next]]); 
}

function addRef(that, ss) {
  if (that._rhaboo)
    that._rhaboo.refs++;
  else {
    that._rhaboo = {
      slotnum: newSlot(),
      refs: 1,
      kids: {}
    };
    for (var prop in that) if (that.hasOwnProperty(prop)) {
      slotFor(that, ss, prop);
      if (typeof that[prop] == 'object')
        that[prop].addRef(ss);
      updateSlot(that, ss, prop);
    }
  }
}

/*

function release(that, ss) {
  this._rhaboo.refs--;
  if (this._rhaboo.refs == 0) {
    //gotta be recursive!
  }
}

Object.prototype.write = function() { }
Object.prototype.kill = function() { }

*/






/*

//More accurate typeof stuff...
   
var getTypeOf = function (what) {
  if (what === undefined) return 'undefined';
  if (what === null) return 'null';
  var ty = typeof what;
  if (ty === 'string' || ty === 'number' || ty === 'boolean') return 'leaf';
  if (ty === 'object') return 'object';
  return 'bad';
}

var getClassOf = function (what) {
  var ty = getTypeOf(what);
  if (ty === 'object') return what._rhaboo_isArray() ? 'array' : 'object';
  return ty;
}

Object.prototype._rhaboo_isArray = function () {
  //Thx: Douglas Crockford
  return typeof this.length === 'number' &&
    typeof this.splice === 'function' &&
    !(this.propertyIsEnumerable('length'));
}

//Hide _rhaboo in hasOwnProperty

Object.prototype.hasOwnPropertyOrig = Object.prototype.hasOwnProperty;
Object.prototype.hasOwnProperty = function(key) { return (key != '_rhaboo' && this.hasOwnPropertyOrig(key)); }

//These are used to build entries in localStorage...

Object.prototype._rhaboo_classcode = '&';
Array .prototype._rhaboo_classcode = '#';
Object.prototype._rhaboo_childKey = function (where) {
  return this._rhaboo.key + this._rhaboo_classcode + "|" + String(where);
  //It's a strange looking notation but it's easy to parse
} 

//This is the heart of the heart of the beast...

Object.prototype.write = function (where, what) {
  var old = this[where];
  this[where] = what;
  this._rhaboo_persist(where, what, old);
  return this;
}

Object.prototype.kill = function (where) {
  var old = this[where];
  delete this[where];
  this._rhaboo_unpersist(where, old);
  return this;
}

function execute(script) {
  for (var s in script) if (script.hasOwnProperty(s)) {
    var step = script[s];
    var tr = JSON.stringify(step);
    localStorage[step[0]].apply(localStorage, step[1]);
  }
}

function procrastinate (sc) {
  setTimeout(function(){ execute(sc); }, 0);
}

function intend(ss, inst) {
  ss.push(inst);
  //procrastinate([inst]);
}

//Persist the changing of the property called 'where' of 'this' from 'old' to 'what':

Object.prototype._rhaboo_persist = function(where, what, old) {
  //The existence of a property called _rhaboo is the signal that this object should persist.
  if (this._rhaboo !== undefined) {
    var childkey = this._rhaboo_childKey(where);
    var ss = [];
    forgetters [getTypeOf(old)]  (ss, childkey, old);
    stashers   [getTypeOf(what)] (ss, childkey, what);
    procrastinate(ss);
  }
}

Object.prototype._rhaboo_unpersist = function(where, old) {
  //The existence of a property called _rhaboo is the signal that this object should persist.
  if (this._rhaboo !== undefined) {
    var childkey = this._rhaboo_childKey(where);
    var ss = [];
    forgetters [getTypeOf(old)]  (ss, childkey, old);
    procrastinate(ss);
  }
}

//These tables are necessary because basic types aren't objects in JS
//They're indexed by the return value of getTypeOf...
//For objects, we call a function that recurses back into THIS TABLE

var stashers = {
  "undefined" : function (ss, key, what) { intend(ss, ['setItem',[key, 'undefined|undefined']]); },
  "null"      : function (ss, key, what) { intend(ss, ['setItem',[key, 'null|null']]); },
  "leaf"      : function (ss, key, what) { intend(ss, ['setItem',[key, typeof what + "|" + String(what)]]); },
  "object"    : function (ss, key, what) { what._rhaboo_stash(ss, key); },
  "bad"       : function (ss, key, what) { }
}

var forgetters = {
  "undefined" : function (ss, key, old) { intend(ss, ['removeItem', [key]]); },
  "null"      : function (ss, key, old) { intend(ss, ['removeItem', [key]]); },
  "leaf"      : function (ss, key, old) { intend(ss, ['removeItem', [key]]); },
  "object"    : function (ss, key, old) { old._rhaboo_forget(ss); },
  "bad"       : function (ss, key, old) { }
}

//Make a normal OBJECT persistent...

Object.prototype._rhaboo_stash = function (ss, key) {
  this._rhaboo = this._rhaboo || {};
  this._rhaboo.key=key;
  //The following line declares the object per-se. That's not necessary as long as it contains 
  //something, but it is necessary to persist empty objects. For simplicity it's always present.
  intend(ss, ['setItem', [ this._rhaboo_childKey(""), "|" ]]);
  //Recurse for all properties except _rhaboo
  for (var where in this) if (where !== "_rhaboo" && this.hasOwnProperty(where)) {
    var what = this[where];
    stashers [getTypeOf(what)] (ss, this._rhaboo_childKey(where), what);
  }
  this._rhaboo_storeLength(ss, true);
}

Object.prototype._rhaboo_forget = function (ss) {
  if (this._rhaboo === undefined || this._rhaboo.key === undefined) 
    return;
  for (var where in this) if (where !== "_rhaboo" && this.hasOwnProperty(where)) {
    var what = this[where];
    forgetters [getTypeOf(what)] (ss, this._rhaboo_childKey(where), what);
  }
  this._rhaboo_storeLength(ss, false);
  intend(ss, ['removeItem', [ this._rhaboo_childKey("") ]]); //That was the declaration of the object per-se
}

Object.prototype._rhaboo_storeLength = function (ss, store) {
  //Preserve length of sparse arrays...
  if (this._rhaboo_isArray()) {
    var wh = 'length'; 
    var l = this.length;
    if (store) {
      stashers ['leaf'] (ss, this._rhaboo_childKey(wh), l);
    } else {
      forgetters ['leaf'] (ss, this._rhaboo_childKey(wh), l);
    }
  } 
}

//The constructor. Use of "this" means that use of "new" client-side is essential.

function Persistent(key) { this._rhaboo_restore(key); }

//Normally this should be empty now

Object.prototype._rhaboo_restore = function (key) {
  this._rhaboo = this._rhaboo || {};
  this._rhaboo.key=key;
  for (var k in localStorage) if (localStorage.hasOwnProperty(k)) {
    //E.g. k="root&|arr#|2&|foo" is a leaf property called foo (whose type is in the value of the localStorage entry) 
    //in slot 2 of an array called arr in a persistent called root
    var keyparts = k.split('|');
    if ( keyparts.shift() === key + this._rhaboo_classcode ) { //Otherwise its for somebody else
      //Step deeper into this under guidance of k...
      var insertee = this;
      while ( keyparts.length > 1 ) {
        var newkeypart = keyparts.shift();
        var newname = newkeypart.slice(0, length-1); //remove & or #
        if (insertee[newname] === undefined) {
          //Make parental path on demand
          insertee[newname] = newkeypart.charAt(newkeypart.length-1) === Array.prototype._rhaboo_classcode ? [] : {}
          insertee[newname]._rhaboo = insertee[newname]._rhaboo || {}; 
          insertee[newname]._rhaboo.key = insertee._rhaboo_childKey(newname)
        }
        insertee = insertee[newname]; //Go deeper
      }
      //Now the only thing left in keyparts is the actual name of the property
      var leafkey = keyparts.shift();
      if (leafkey !== "") {
        //The value of the localStorage entry is of the form type|value
        var type_val = localStorage.getItem(k).split("|");
        insertee[leafkey] = {
          "number"   : function (s) { return Number(s); },
          "null"     : function (s) { return null; },
          "undefined": function (s) { return undefined; },
          "string"   : function (s) { return s; },
          "boolean"  : function (s) { return s==='true'?true:false; }
        } [type_val[0]] (type_val[1]);
      }
    }
  }
}

*/

module.exports = {
  Persistent : Persistent,
  getTypeOf : getTypeOf,
  stashers : stashers,
  forgetters : forgetters,
  procrastinate : procrastinate,
};

