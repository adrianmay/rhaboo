
Array.prototype._rhaboo_originals = Array.prototype._rhaboo_originals || {
  pop : Array.prototype.pop,
  push : Array.prototype.push,
  shift : Array.prototype.shift,
  unshift : Array.prototype.unshift,
  splice : Array.prototype.splice,
  reverse : Array.prototype.reverse,
  sort : Array.prototype.sort
  //fill : Array.prototype.fill,
};

//Very, very slow....
Array.prototype._rhaboo_defensively = function(mutator) {
  return function () { 
    var old;
    if (this._rhaboo !== undefined) {
      old = this.slice();
      old._rhaboo = this._rhaboo;
    }
    var retval = Array.prototype._rhaboo_originals[mutator].apply(this, arguments);
   // _rhaboo_trace("Overriding "+mutator+"... Old="+JSON.stringify(old));
    if (this._rhaboo !== undefined) {
      this._rhaboo.parent._rhaboo_persist(this._rhaboo.where, this, old);
    }
    return retval;
  }
}

if (true) {
  Array.prototype.push = function () {
    var l1 = this.length;
    var retval = Array.prototype._rhaboo_originals.push.apply(this, arguments);
    var l2 = this.length;
    if ( this._rhaboo !== undefined && l2>l1 ) {
      for (var i=l1; i<l2; i++) {
        var k = this._rhaboo_childKey(i);
        enq( function(deferred) {
          _rhaboo_stashers[_rhaboo_getTypeOf(this[i])](i, k, this[i], this);
          deferred.resolve();
        });
      }
    }
  }
  Array.prototype.pop = function () {
    var l = this.length;
    var retval = Array.prototype._rhaboo_originals.pop.apply(this, arguments);
    if ( this._rhaboo !== undefined && l>0 ) {
      var k = this._rhaboo_childKey(l-1);
      enq( function(deferred) {
        _rhaboo_forgetters[_rhaboo_getTypeOf(retval)](k, retval);
        deferred.resolve();
      });
    } 
    return retval;
  }
//  Array.prototype.push = Array.prototype._rhaboo_defensively("push");
//  Array.prototype.pop = Array.prototype._rhaboo_defensively("pop");
  Array.prototype.shift = Array.prototype._rhaboo_defensively("shift");
  Array.prototype.unshift = Array.prototype._rhaboo_defensively("unshift");
  Array.prototype.splice = Array.prototype._rhaboo_defensively("splice");
  Array.prototype.reverse = Array.prototype._rhaboo_defensively("reverse");
  Array.prototype.sort = Array.prototype._rhaboo_defensively("sort");
  //Array.prototype.fill = Array.prototype._rhaboo_defensively("fill");
}


