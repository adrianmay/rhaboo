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
    var slotnum=undefined, refs;
    var ss = [];
    if (this._rhaboo) {
      slotnum = this._rhaboo.slotnum;
      refs = this._rhaboo.refs;
      R.release(this, ss, true);
    }
    var retval = Array.prototype._rhaboo_originals[mutator].apply(this, arguments);
    if (slotnum) {
      R.addRef(this, ss, slotnum, refs);
      R.execute(ss);
    }
    return retval;
  }
}

/*
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
 */ 

Array.prototype.write = function(prop, val) { 
  Object.prototype.write.call(this, prop, val);
  var ss = [];
  R.updateSlot(this, ss);
  R.execute(ss);
}

//TODO: reverse/sort(unless sparse?) don't need initial delete, shift/unshift similarly
Array.prototype.push = Array.prototype._rhaboo_defensively("push");
Array.prototype.pop = Array.prototype._rhaboo_defensively("pop");
Array.prototype.shift = Array.prototype._rhaboo_defensively("shift");
Array.prototype.unshift = Array.prototype._rhaboo_defensively("unshift");
Array.prototype.splice = Array.prototype._rhaboo_defensively("splice");
Array.prototype.reverse = Array.prototype._rhaboo_defensively("reverse");
Array.prototype.sort = Array.prototype._rhaboo_defensively("sort");
//Array.prototype.write = Array.prototype._rhaboo_defensively("write");
//Array.prototype.fill = Array.prototype._rhaboo_defensively("fill");

module.exports = {
  persistent : R.persistent,
  nuke : R.nuke,
};

