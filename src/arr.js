var R = require('./core');

/*
Array.prototype.remove = function(from) {
  var rest = this.slice(from + 1);
  var newlen = from;
  for (var i = from; i < this.length; i++) {
    this._rhaboo_persist(i.toString(), undefined, this[i]);
  }
  this.length = from;
  return Array.prototype.push.apply(this, rest);
};

/*
 
Array.prototype.write = function (where, what) {
  var alldone = false;
  var old = this[where];
  this[where] = what;
  if (what===undefined) {
    if (typeof parseInt(where) === 'number') {
      if (this._rhaboo)
        console.log("Resiging " + where + " from " + this._rhaboo.key);
      this.remove(where);
      alldone=true;
    }
    else
      delete this[where];
  }
  if (!alldone)
    this._rhaboo_persist(where, what, old);
  return this;
}
*/

Array.prototype._rhaboo_originals = Array.prototype._rhaboo_originals || {
  pop : Array.prototype.pop,
  push : Array.prototype.push,
  shift : Array.prototype.shift,
  unshift : Array.prototype.unshift,
  splice : Array.prototype.splice,
  reverse : Array.prototype.reverse,
  sort : Array.prototype.sort,
  /*
  remove :  function(where) {
    var rest = this.slice(where + 1);
    this.length = where;
    return this.push.apply(this, rest);
  },
  write : function (where, what) {
    this[where] = what;
    /*
    if (what===undefined) {
      if (typeof parseInt(where) === 'number')
        Array.prototype._rhaboo_originals.remove.apply(this, [where]);
      else
        delete this[where]; 
    }
    return this;
  }
    */
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
      old._rhaboo.parent = this._rhaboo.parent;
      old._rhaboo.where = this._rhaboo.where;
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
        R.enq( function(deferred) {
          R._rhaboo_stashers[R._rhaboo_getTypeOf(this[i])](i, k, this[i], this);
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
      R.enq( function(deferred) {
        R._rhaboo_forgetters[R._rhaboo_getTypeOf(retval)](k, retval);
        deferred.resolve();
      });
    } 
    return retval;
  }
  //TODO: reverse/sort(unless sparse?) don't need initial delete, shift/unshift similarly
  Array.prototype.push = Array.prototype._rhaboo_defensively("push");
  Array.prototype.pop = Array.prototype._rhaboo_defensively("pop");
  Array.prototype.shift = Array.prototype._rhaboo_defensively("shift");
  Array.prototype.unshift = Array.prototype._rhaboo_defensively("unshift");
  Array.prototype.splice = Array.prototype._rhaboo_defensively("splice");
  Array.prototype.reverse = Array.prototype._rhaboo_defensively("reverse");
  Array.prototype.sort = Array.prototype._rhaboo_defensively("sort");
  Array.prototype.write = Array.prototype._rhaboo_defensively("write");
  //Array.prototype.fill = Array.prototype._rhaboo_defensively("fill");
}

module.exports = {
  Persistent : R.Persistent,
  enq : R.enq,
  onBusiness : R.onBusiness
};

