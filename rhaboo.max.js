"use strict"
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




var _rhaboo_trace = function(s) { /* console.log(s); */ } //Turn this on in test code if you like

var _rhaboo_store = localStorage; //Or sessionStorage perhaps.

var _rhaboo_store_setItem = function (where, what) {
  _rhaboo_trace("STORE: setting " + where + " = " + what);
  return _rhaboo_store.setItem(where, what);
}

var _rhaboo_store_getItem = function (where) {
  var what = _rhaboo_store.getItem(where);
  _rhaboo_trace("STORE: getting " + where + " = " + what);
  return what;
}

var _rhaboo_store_removeItem = function (where) {
  _rhaboo_trace("STORE: killing "  + where);
  return _rhaboo_store.removeItem(where);
}

Object.prototype._rhaboo_classcode = '&';
Array .prototype._rhaboo_classcode = '#';
Object.prototype._rhaboo_childKey = function (where) {
  return this._rhaboo.key + this._rhaboo_classcode + "|" + String(where);
}

Object.prototype.write = function (where, what) {
  var old = this[where];
  this[where] = what;
  this._rhaboo_persist(where, what, old);
  return this;
}

Object.prototype._rhaboo_persist = function(where, what, old) {
  if (this._rhaboo !== undefined) {
    var childkey = this._rhaboo_childKey(where);
    enq( function(deferred) {
      _rhaboo_forgetters [_rhaboo_getTypeOf(old)]  (childkey, old);
      _rhaboo_stashers   [_rhaboo_getTypeOf(what)] (where, childkey, what, this);
      deferred.resolve();
    });
  }
}

var _rhaboo_stashers = {
  "nothing": function (where, key, what, parent) { },
  "leaf"   : function (where, key, what, parent) { _rhaboo_store_setItem(key, typeof what + "|" + String(what)); },
  "object" : function (where, key, what, parent) { what._rhaboo_stash(where, key, parent); },
  "bad"    : function (where, key, what, parent) { }
}

var _rhaboo_forgetters = {
  "nothing": function (key, old) { },
  "leaf"   : function (key, old) { _rhaboo_store_removeItem(key); },
  "object" : function (key, old) { old._rhaboo_forget(); },
  "bad"    : function (key, old) { }
}

Object.prototype._rhaboo_stash = function (where, key, parent) {
  this._rhaboo = this._rhaboo || {};
  this._rhaboo.key=key;
  this._rhaboo.parent=parent;
  this._rhaboo.where=where;
  _rhaboo_store_setItem(this._rhaboo_childKey(""), "|");
  for (var where in this) {
    if (where !== "_rhaboo" && this.hasOwnProperty(where)) {
      var what = this[where];
      _rhaboo_stashers [_rhaboo_getTypeOf(what)] (where, this._rhaboo_childKey(where), what, this);
    }
  }
}

Object.prototype._rhaboo_forget = function () {
  if (this._rhaboo === undefined || this._rhaboo.key === undefined) return;
  for (var where in this) {
    if (where !== "_rhaboo" && this.hasOwnProperty(where)) {
      var what = this[where];
      _rhaboo_forgetters [_rhaboo_getTypeOf(what)] (this._rhaboo_childKey(where), what);
    }
  }
  _rhaboo_store_removeItem(this._rhaboo_childKey(""));
}

function Rhaboo(key) { this._rhaboo_restore(key); }

Object.prototype._rhaboo_restore = function (key) {
  this._rhaboo = this._rhaboo || {};
  this._rhaboo.key=key;
  for (var k in _rhaboo_store) {
    if (_rhaboo_store.hasOwnProperty(k)) {
      var keyparts = k.split('|');
      if ( keyparts.shift() === key + this._rhaboo_classcode ) {
        var insertee = this;
        while ( keyparts.length > 1 ) {
          var newkeypart = keyparts.shift();
          var newname = newkeypart.slice(0, length-1);
          if (insertee[newname] === undefined) {
            insertee[newname] = newkeypart.charAt(newkeypart.length-1) === Array.prototype._rhaboo_classcode ? [] : {}
            insertee[newname]._rhaboo = insertee[newname]._rhaboo || {}; 
            insertee[newname]._rhaboo.key = insertee._rhaboo_childKey(newname)
            insertee[newname]._rhaboo.parent = insertee;
            insertee[newname]._rhaboo.where = newname;
          }
          insertee = insertee[newname];
        }
        var leafkey = keyparts.shift();
        if (leafkey !== "") {
          var type_val = _rhaboo_store_getItem(k).split("|");
          insertee[leafkey] = {
            "number" : function (s) { return Number(s);},
            "string" : function (s) { return s;},
            "boolean" : function (s) { return s==='true'?true:false;}
          } [type_val[0]] (type_val[1]);
        }
      }
    }
  }
}

var _rhaboo_getTypeOf = function (what) {
  if (what === null || what === undefined) return 'nothing';
  var ty = typeof what;
  if (ty === 'string' || ty === 'number' || ty === 'boolean') return 'leaf';
  if (ty === 'object') return 'object';
  return 'bad';
}

var _rhaboo_getClassOf = function (what) {
  var ty = _rhaboo_getTypeOf(what);
  if (ty === 'object') return what._rhaboo_isArray() ? 'array' : 'object';
  return ty;
}

Object.prototype._rhaboo_isArray = function () {
  //Thx: Douglas Crockford
  return typeof this.length === 'number' &&
    typeof this.splice === 'function' &&
    !(this.propertyIsEnumerable('length'));
}

Object.prototype._rhaboo_size = function () {
  var count = 0;
  for (var key in this) {
    if (this.hasOwnProperty(key)) count++;
  }
  return count;
}


module.exports = {
  Rhaboo: Rhaboo
}


//Provides a sequential queue of background tasks using the q promises library

var _enq_head = emptyPromise();

function emptyPromise() {
  var defer = new Q.defer();
  defer.resolve();
  return defer.promise;
}

var _business_promise = undefined;
var _business_callback = undefined;
var _business_reported = false;

function _handle_business() {
  if (!_business_callback) {
    return 0;
  }
  var busynow = _enq_head.isPending();
  if (busynow) {
    _business_promise = _enq_head.then(_handle_business);
  }
  if (busynow != _business_reported) {
    if (busynow) {
      _business_reported = true;
    } else { 
      _business_reported = false;
    }
    if (_business_callback) {
      _business_callback(_business_reported); 
    }
  }
  return 0;
}

function enqOnBusiness (callback) {
  _business_callback = callback;
}

function enq (step) {
  var f = function() {
    var d = Q.defer();
    step(d);
    return d.promise;
  }
  _enq_head = _enq_head.then(f);
  _handle_business();
}


