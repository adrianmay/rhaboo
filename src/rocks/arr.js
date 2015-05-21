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
    this.save();
  return retval;
}

Array.prototype.reverse = function () {
  var retval = Array_rhaboo_originals.reverse.apply(this, arguments);
  if (this._rhaboo)
    this.save();
  return retval;
}

//Just unpersist the last element
Array.prototype.pop = function () {
  var ret = Array_rhaboo_originals.pop.apply(this, arguments);
  if (this._rhaboo) {
    if (R.typeOf(ret)==='object')
      R.release(ret);
    this.save();
  }
  return ret;
}
Array.prototype.shift = function () {
  var ret = Array_rhaboo_originals.shift.apply(this, arguments);
  if (this._rhaboo) {
    if (R.typeOf(ret)==='object')
      R.release(ret);
    this.save();
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
    this.save();
  return retval;
}

Array.prototype.unshift = function () {
  if (this._rhaboo) 
    for (var i=0; i<arguments.length; i++)
      if (R.typeOf(arguments[i])==='object')
        R.addRef(arguments[i],this._rhaboo.storage);
  var retval = Array_rhaboo_originals.unshift.apply(this, arguments);
  if (this._rhaboo) 
    this.save();
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
    this.save();
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
    this.save();
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
  perishable : R.perishable,
  algorithm : "rocks"
};

