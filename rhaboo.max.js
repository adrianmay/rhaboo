(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var R = require('./core');

//All these will be changed but the new versions will use the originals...
var Array_rhaboo_originals = Array_rhaboo_originals || {
  pop : Array.prototype.pop,
  push : Array.prototype.push,
  shift : Array.prototype.shift,
  unshift : Array.prototype.unshift,
  splice : Array.prototype.splice,
  reverse : Array.prototype.reverse,
  sort : Array.prototype.sort,
  fill : Array.prototype.fill,
};

//Same members
Array.prototype.sort = function () {
  var retval = Array_rhaboo_originals.sort.apply(this, arguments);
  if (this._rhaboo)
    R.save(this);
  return retval;
}

Array.prototype.reverse = function () {
  var retval = Array_rhaboo_originals.reverse.apply(this, arguments);
  if (this._rhaboo)
    R.save(this);
  return retval;
}

//Just unpersist the last element
Array.prototype.pop = function () {
  var ret = Array_rhaboo_originals.pop.apply(this, arguments);
  if (this._rhaboo) {
    R.release(ret);
    R.save(this);
  }
  return ret;
}
Array.prototype.shift = function () {
  var ret = Array_rhaboo_originals.shift.apply(this, arguments);
  if (this._rhaboo) {
    R.release(ret);
    R.save(this);
  }
  return ret;
}

//Just persist the new members
Array.prototype.push = function () {
  if (this._rhaboo) 
    for (var i=0; i<arguments.length; i++)
      if (R.typeOf(arguments[i])==='object')
        R.addRef(arguments[i],this._rhaboo.storage);
  var retval = Array_rhaboo_originals.push.apply(this, arguments);
  if (this._rhaboo) 
    R.save(this);
  return retval;
}

Array.prototype.unshift = function () {
  if (this._rhaboo) 
    for (var i=0; i<arguments.length; i++)
      if (R.typeOf(arguments[i])==='object')
        R.addRef(arguments[i],this._rhaboo.storage);
  var retval = Array_rhaboo_originals.unshift.apply(this, arguments);
  if (this._rhaboo) 
    R.save(this);
  return retval;
}

Array.prototype.splice = function () {
  var i;
  if (this._rhaboo) 
    for (i=2; i<arguments.length; i++)
      if (R.typeOf(arguments[i])==='object')
        R.addRef(arguments[i],this._rhaboo.storage);
  var ret = Array_rhaboo_originals.splice.apply(this, arguments);
  if (this._rhaboo) {
    for (i=0; i<ret.length; i++)
      if (R.typeOf(ret[i])==='object')
        R.release(ret[i]);
    R.save(this);
  }
  return ret;
}

Array.prototype.fill = function () {
  var st = 
    arguments[1]===undefined ? 0 : 
    arguments[1]<0 ? 
    Math.max(this.length + arguments[1]) : 
    Math.min(this.length, arguments[1]);
  var en = 
    arguments[2]===undefined ? this.length : 
    arguments[2]<0 ? 
    Math.max(this.length + arguments[2]) : 
    Math.min(this.length, arguments[2]);
   if (R.typeOf(arguments[0])==='object' && en>st) {
    R.addRef(arguments[0],this._rhaboo.storage);
    arguments[0]._rhaboo.refs += en-st-1;
  }
  for (; en>st; st++) { 
    if (this._rhaboo) 
      if (R.typeOf(this[st])==='object') 
        R.release(this[st]);
    this[k] = arguments[0];
  }
  if (this._rhaboo) 
    R.save(this);
  return this;
}

/*
Object.defineProperty(Array.prototype, 'write', { value: function(prop, val) {
  Object.prototype.write.call(this, prop, val);
  R.save(this); //for length
}});
*/


module.exports = {
  persistent : R.persistent,
  perishable : R.perishable
};


},{"./core":2}],2:[function(require,module,exports){
"use strict"

/* EXAMPLE OF STORAGE FORMAT: */

var ls_prefix = "_rhaboo_";

var built = {};

function typeOf(x) { return x===null ? "null" : typeof x}

function persistent(slot) { return construct(slot, localStorage); }
function perishable(slot) { return construct(slot, sessionStorage); }

function construct(slot, storage) { 
  var ret = load(ls_prefix+slot, storage);
  built={};
  return ret;
}

function load(slot, storage) { 
  if (built[slot]) {
    built[slot]._rhaboo.refs++;
    return built[slot];
  }
  var raw = storage[slot]; 
  if (raw) {
    console.log("RAW SLOT:"+raw);
    var ret = JSON.parse(raw);
    built[slot] = ret;
    ret._rhaboo = { storage: storage, refs: 1, slot: slot};
    var t = JSON.parse(storage["-"+slot]);
    for (var k in t) 
      ret[k]=load(t[k], storage);
    return ret;
  } else { //virgin
    var ret = { _rhaboo: { storage: storage, refs: 1, slot: slot } };
    save(ret,storage);
    built[slot] = ret;
    return ret;
  }
}

// Check object and all children have slots
// Doesn't save
function addRef(that, storage) {
  if (that._rhaboo === undefined ) {
    that._rhaboo = { storage: storage, refs: 1, slot: newSlot(storage)};
    for (var k in that) 
      if (that.hasOwnProperty(k))
        if (typeOf(that[k])==='object')
          if (k!=='_rhaboo')
            addRef(that[k],storage);  
    save(that,storage);
  }
  else 
    that._rhaboo.refs++;
}

function release(that) {
  that._rhaboo.refs--;
  if (that._rhaboo.refs===0) {
    delete that._rhaboo.storage[that._rhaboo.slot];
    delete that._rhaboo.storage["-"+that._rhaboo.slot];
    for (var k in that) 
      if (that.hasOwnProperty(k))
        if (typeOf(that[k])==='object')
          if (k!=='_rhaboo')
            release(that[k]);
  }
}

//Assume that is already persisted
function write(that, prop, val) {
  if (typeOf(that[prop])==='object')
    release(that[prop]);
  if (typeOf(val)==='object')
    addRef(val, that._rhaboo.storage);
  that[prop] = val;
  save(that);
  return that;
}

function erase(that, prop) {
  if (typeOf(that[prop])==='object')
    release(that[prop]);
  delete that[prop];
  save(that);
  return that;
}

// Called by stringify
// Slot for that and direct children assumed allocated already
// Doesn't recurse
function replacer(tail, storage) { return function(key, val) {
  var t = typeOf(val);
  if (t==='number' || t==='string' || t==='boolean') 
    return val;
  if (key=='') 
    return val;
  if (key==='_rhaboo') 
    return undefined;
  if (t === 'object') {
    tail[key] = val._rhaboo.slot;
    return undefined;
  }  
  return val;
}}

// Update persistent copy of that
// Slot assumed allocated already
function save(that) {
  var tail = {};
  that._rhaboo.storage[that._rhaboo.slot] = JSON.stringify(that, replacer(tail, that._rhaboo.storage));
  that._rhaboo.storage["-"+that._rhaboo.slot] = JSON.stringify(tail);
  return that._rhaboo.slot;
}

//The main API
//Assumes that this is persistent already, but not that val is.
Object.defineProperty(Object.prototype, 'write', { value: function(prop, val) {
  return write(this,prop,val);
}});

Object.defineProperty(Object.prototype, 'erase', { value: function(prop) {
  erase(this,prop);
}});

var keyOfStoredNextSlot = '_RHABOO_NEXT_SLOT'
var storedNextSlot=[0,0];
for (var i =0; i<2; i++) { //0 is local, 1 is session
  storedNextSlot[i] = localStorage.getItem(keyOfStoredNextSlot) || 0;
  storedNextSlot[i] = Number(storedNextSlot[i]);
}

//Grab a new slot
function newSlot(storage) {
  var i = (storage===localStorage) ? 0 : 1;
  var ret = storedNextSlot[i];
  storedNextSlot[i]++;
  storage.setItem(keyOfStoredNextSlot, storedNextSlot[i]);
  return ls_prefix+ret;
}

//Hide _rhaboo from normal enumeration methods...
//Can tidy this up with a defineProperty
var Object_prototype_hasOwnPropertyOrig = Object.prototype.hasOwnProperty;
Object.prototype.hasOwnProperty = function(slot) { 
  return (slot != '_rhaboo' && Object_prototype_hasOwnPropertyOrig.call(this,slot)); 
}

module.exports = {
  persistent : persistent,
  perishable : perishable,
  addRef: addRef,
  release: release,
  save: save,
  typeOf: typeOf
};



},{}],3:[function(require,module,exports){
(function (global){
global.Rhaboo = require('./arr');


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./arr":1}]},{},[3]);
