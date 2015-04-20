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

//Just unpersist the last element
Array.prototype.pop = function () {
  var ret = Array_rhaboo_originals.pop.apply(this, arguments);
  release(ret);
  save(this);
  return ret;
}
Array.prototype.shift = function () {
  var ret = Array_rhaboo_originals.shift.apply(this, arguments);
  release(ret);
  save(this);
  return ret;
}

//This can be better cos it leaves the existing part of the array unchanged
Array.prototype.push = function () {
  for (var i=0; i<arguments.length; i++)
    if (typeOf(arguments[i])==='object')
      addRef(arguments[i]);
  var retval = Array_rhaboo_originals.push.apply(this, arguments);
  save(this);
  return retval;
}

Object.defineProperty(Array.prototype, 'write', { value: function(prop, val) {
  Object.prototype.write.call(this, prop, val);
  save(this); //for length
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

