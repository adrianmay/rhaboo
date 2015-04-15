"use strict"

/* EXAMPLE OF STORAGE FORMAT: */

var ls_prefix = "_rhaboo_";

var built = {};

function persistent(slot) { return construct(slot, localStorage); }
function perishable(slot) { return construct(slot, sessionStorage); }

function construct(slot, storage) { 
  var ret = load(slot, storage);
  built={};
  return ret;
}


function load(slot, storage) { 
  if (built[slot]) {
    built[slot]._rhaboo.refs++;
    return built[slot];
  }
  var raw = storage.getItem(ls_prefix+slot); 
  if (raw) {
    var ret = JSON.parse(raw);
    built[slot] = ret;
    ret._rhaboo = { storage: storage, refs: 1, slot: slot};
    var t = JSON.parse(store[-slot]);
    for (var k in t) 
      ret[k]=load(t[k], storage);
    return ret;
  } else { //virgin
    var ret = { _rhaboo: { storage: storage, refs: 1, slot: slot } };
    built[slot] = ret;
    return ret;
  }
}

function save(that, storage) {
  if (that._rhaboo === undefined || that._rhaboo.slot === undefined) {
    that._rhaboo = that._rhaboo || {};
    that._rhaboo.storage = storage;
    that._rhaboo.refs = that._rhaboo.refs || 1;
    that._rhaboo.slot = newSlot(storage);
    update(that);
  }
  return that._rhaboo.slot;
}

function replacer(tail, storage) { return function(key, val) {
  var t = typeof(val);
  if (t==='number' || t==='string' || t==='boolean') 
    return val;
  if (key=='') 
    return val;
  if (key==='_rhaboo') 
    return undefined;
  if (t === 'object' && val!==null) {
    tail[key] = save(val, storage);
    return undefined;
  }  
  return val;
}}

function update(that) {
  var tail = {};
  that._rhaboo.storage[that._rhaboo.slot] = JSON.stringify(that, replacer(tail, that._rhaboo.storage));
  that._rhaboo.storage[-that._rhaboo.slot] = JSON.stringify(tail);
}


//###########################################################3
//###########################################################3
//###########################################################3



//An unpersisted object is given a _rhaboo member with a storage slot, a refcount of 1 and no children
//An already persisted one just gets its refcount incremented
//The slotnum are refs parameters are usually undefined, except for a certain hack involving arrays
function addRef(that, storage, slotnum, refs) {
  if (that._rhaboo!==undefined && that._rhaboo.slotnum!==undefined)
    that._rhaboo.refs++;
  else {
    if (that._rhaboo===undefined) that._rhaboo = {};
    if (storage!==undefined) that._rhaboo.storage = storage;
    that._rhaboo.slotnum = slotnum!==undefined ? slotnum : newSlot(that._rhaboo.storage);
    that._rhaboo.refs = refs!==undefined ? refs : 1;
    that._rhaboo.kids = {};
    updateSlot(that);
    for (var prop in that) if (that.hasOwnProperty(prop) && prop !=='_rhaboo') 
      storeProp(that, prop);
  }
  return that;
}

function storeProp(that, prop) {
  slotFor(that, prop);
  if (P.typeOf(that[prop]) === 'object') {
    if (that[prop]._rhaboo===undefined) //probably true
      that[prop]._rhaboo={storage: that._rhaboo.storage};
    addRef(that[prop]);
  }
  updateSlot(that, prop);
}

function release(that, force) {
  var target, propname;
  that._rhaboo.refs--;
  if (force || that._rhaboo.refs === 0) {
    for (propname = undefined, target = that._rhaboo; 
         target; 
         target = that._rhaboo.kids[propname=target.next]) {
      that._rhaboo.storage.removeItem(ls_prefix+target.slotnum);
      if (propname!==undefined && P.typeOf(that[propname]) == 'object') 
        release(that[propname]); //recurse for any object-valued properties
    }
    delete that._rhaboo;
  }
}

function forgetProp(that, prop) {
  var target = that._rhaboo.kids[prop];
  if (target===undefined) return; //This can happen if you sort a sparse array
  var prevname = target.prev;
  that._rhaboo.storage.removeItem(ls_prefix+target.slotnum);
  if (P.typeOf(that[prop]) == 'object') 
    release(that[prop]);
  removeKid(that, prop);
  updateSlot(that, prevname);
}

//The main API
//Assumes that this is persistent already, but not that val is.
Object.defineProperty(Object.prototype, 'write', { value: function(prop, val) {
  slotFor(this, prop); //Reserves a slot if not already reserved.
  if (P.typeOf(this[prop]) === 'object') //Unpersist old value
    release(this[prop]);
  this[prop] = val;
  if (P.typeOf(val) === 'object') {
    if (val._rhaboo===undefined) //probably true
      val._rhaboo={storage: this._rhaboo.storage};
    addRef(val); //Persist val, whether already persisted or not
  }
  updateSlot(this, prop); //Write the slot for val itself
  return this;
}});

Object.defineProperty(Object.prototype, 'erase', { value: function(prop) {
  if (!this.hasOwnProperty(prop))
    return this;
  if (P.typeOf(this[prop]) === 'object') 
    release(this[prop]);
  var target = this._rhaboo.kids[prop];
  this._rhaboo.storage.removeItem(ls_prefix+target.slotnum);
  var prevname = target.prev;
  removeKid(this, prop);
  updateSlot(this, prevname);
  delete this[prop];
  return this;
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
  return ret;
}

//Hide _rhaboo from normal enumeration methods...
var Object_prototype_hasOwnPropertyOrig = Object.prototype.hasOwnProperty;
Object.prototype.hasOwnProperty = function(slot) { 
  return (slot != '_rhaboo' && Object_prototype_hasOwnPropertyOrig.call(this,slot)); 
}

module.exports = {
  persistent : persistent,
  perishable : perishable,
  addRef: addRef,
  release: release,
  storeProp : storeProp,
  forgetProp : forgetProp,
  updateSlot : updateSlot,
};


