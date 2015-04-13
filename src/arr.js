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

//Worst case scenario: 
var Array_rhaboo_defensively = function(mutator) {
  return function () { 
    var slotnum=undefined, refs, storage;
    //Note the slotnum and refcount then totally remove it from Storage...
    if (this._rhaboo) {
      storage = this._rhaboo.storage;
      slotnum = this._rhaboo.slotnum;
      refs = this._rhaboo.refs;
      R.release(this, true); //true means force release even if there are other references
    }
    //Do the requested change ...
    var retval = Array_rhaboo_originals[mutator].apply(this, arguments);
    //Recreate it, specifying the same slotnum and refcount...
    if (slotnum!==undefined) { //otherwise it never was persisted
      R.addRef(this, storage, slotnum, refs);
    }
    return retval;
  }
}

//This can be better cos it leaves the existing part of the array unchanged
Array.prototype.push = function () {
  var l1 = this.length;
  var retval = Array_rhaboo_originals.push.apply(this, arguments);
  var l2 = this.length;
  //Just persist the new elements...
  if ( this._rhaboo !== undefined && l2>l1 ) {
    for (var i=l1; i<l2; i++) {
      R.storeProp(this, i); //This might be writing each slot twice
    }
    R.updateSlot(this); //for length
  }
}

//Even better: just unpersist the last element
Array.prototype.pop = function () {
  var l = this.length;
  if ( this._rhaboo !== undefined && l>0 ) {
    R.forgetProp(this, l-1);
  } 
  var ret = Array_rhaboo_originals.pop.apply(this, arguments);
  if ( this._rhaboo !== undefined && l>0 ) {
    R.updateSlot(this); //for length
  }
  return ret;
}

Object.defineProperty(Array.prototype, 'write', { value: function(prop, val) {
  Object.prototype.write.call(this, prop, val);
  R.updateSlot(this); //for length
}});

//TODO: reverse/sort(unless sparse?) don't need initial delete, shift/unshift similarly
//Array.prototype.push = Array_rhaboo_defensively("push");
//Array.prototype.pop = Array_rhaboo_defensively("pop");
Array.prototype.shift = Array_rhaboo_defensively("shift");
Array.prototype.unshift = Array_rhaboo_defensively("unshift");
Array.prototype.splice = Array_rhaboo_defensively("splice");
Array.prototype.reverse = Array_rhaboo_defensively("reverse");
Array.prototype.sort = Array_rhaboo_defensively("sort");
Array.prototype.fill = Array_rhaboo_defensively("fill");
//Array.prototype.write = Array.prototype._rhaboo_defensively("write");

module.exports = {
  persistent : R.persistent,
  perishable : R.perishable
};

