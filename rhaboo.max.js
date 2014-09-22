(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var R = require('./core');

Array.prototype._rhaboo_originals = Array.prototype._rhaboo_originals || {
  pop : Array.prototype.pop,
  push : Array.prototype.push,
  shift : Array.prototype.shift,
  unshift : Array.prototype.unshift,
  splice : Array.prototype.splice,
  reverse : Array.prototype.reverse,
  sort : Array.prototype.sort,
  //fill : Array.prototype.fill,
};

//Very, very slow....
Array.prototype._rhaboo_defensively = function(mutator) {
  return function () { 
    var old;
    if (this._rhaboo !== undefined) {
      old = this.slice();
      old._rhaboo = {};
      old._rhaboo.key = this._rhaboo.key;
    }
    var retval = Array.prototype._rhaboo_originals[mutator].apply(this, arguments);
    //_rhaboo_trace("Overriding "+mutator+"... Old="+JSON.stringify(old));
    if (this._rhaboo !== undefined) {
      var childkey = this._rhaboo.key;
      var ss = [];
      R.forgetters [R.getTypeOf(old)]  (ss, childkey, old);
      R.stashers   [R.getTypeOf(this)] (ss, childkey, this);
      R.procrastinate(ss);
    }
    return retval;
  }
}

Array.prototype.push = function () {
  var l1 = this.length;
  var retval = Array.prototype._rhaboo_originals.push.apply(this, arguments);
  var l2 = this.length;
  if ( this._rhaboo !== undefined && l2>l1 ) {
    var ss = [];
    for (var i=l1; i<l2; i++) {
      var k = this._rhaboo_childKey(i);
      R.stashers[R.getTypeOf(this[i])](ss, k, this[i]) ;
    }
    this._rhaboo_storeLength(ss, true);
    R.procrastinate(ss);
  }
}
Array.prototype.pop = function () {
  var l = this.length;
  var retval = Array.prototype._rhaboo_originals.pop.apply(this, arguments);
  if ( this._rhaboo !== undefined && l>0 ) {
    var k = this._rhaboo_childKey(l-1);
    var ss = [];
    R.forgetters[R.getTypeOf(retval)](ss, k, retval);
    this._rhaboo_storeLength(ss, true);
    R.procrastinate(ss);
  } 
  return retval;
}
//TODO: reverse/sort(unless sparse?) don't need initial delete, shift/unshift similarly
//Array.prototype.push = Array.prototype._rhaboo_defensively("push");
//Array.prototype.pop = Array.prototype._rhaboo_defensively("pop");
Array.prototype.shift = Array.prototype._rhaboo_defensively("shift");
Array.prototype.unshift = Array.prototype._rhaboo_defensively("unshift");
Array.prototype.splice = Array.prototype._rhaboo_defensively("splice");
Array.prototype.reverse = Array.prototype._rhaboo_defensively("reverse");
Array.prototype.sort = Array.prototype._rhaboo_defensively("sort");
Array.prototype.write = Array.prototype._rhaboo_defensively("write");
//Array.prototype.fill = Array.prototype._rhaboo_defensively("fill");

module.exports = {
  Persistent : R.Persistent,
};


},{"./core":2}],2:[function(require,module,exports){

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

module.exports = {
  Persistent : Persistent,
  getTypeOf : getTypeOf,
  stashers : stashers,
  forgetters : forgetters,
  procrastinate : procrastinate,
};


},{}],3:[function(require,module,exports){
(function (global){
global.Rhaboo = require('./arr');


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./arr":1}]},{},[3]);
