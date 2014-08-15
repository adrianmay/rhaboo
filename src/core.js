
var E = require('./enq');

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
  if (what===undefined)
    delete this[where];
  this._rhaboo_persist(where, what, old);
  return this;
}

Object.prototype._rhaboo_persist = function(where, what, old) {
  if (this._rhaboo !== undefined) {
    var childkey = this._rhaboo_childKey(where);
    E.enq( function(deferred) {
      _rhaboo_forgetters [_rhaboo_getTypeOf(old)]  (childkey, old);
      _rhaboo_stashers   [_rhaboo_getTypeOf(what)] (where, childkey, what, this);
      deferred.resolve();
    });
  }
}

var _rhaboo_stashers = {
  "undefined" : function (where, key, what, parent) { },
  "null"      : function (where, key, what, parent) { _rhaboo_store_setItem(key, "null|null" ); },
  "leaf"      : function (where, key, what, parent) { _rhaboo_store_setItem(key, typeof what + "|" + String(what)); },
  "object"    : function (where, key, what, parent) { what._rhaboo_stash(where, key, parent); },
  "bad"       : function (where, key, what, parent) { }
}

var _rhaboo_forgetters = {
  "undefined" : function (key, old) { },
  "null"      : function (key, old) { _rhaboo_store_removeItem(key); },
  "leaf"      : function (key, old) { _rhaboo_store_removeItem(key); },
  "object"    : function (key, old) { old._rhaboo_forget(); },
  "bad"       : function (key, old) { }
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

function Persistent(key) { this._rhaboo_restore(key); }

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
            "null" : function (s) { return null;},
            "string" : function (s) { return s;},
            "boolean" : function (s) { return s==='true'?true:false;}
          } [type_val[0]] (type_val[1]);
        }
      }
    }
  }
}

/*
var _rhaboo_getTypeOf = function (what) {
  if (what === null || what === undefined) return 'nothing';
  var ty = typeof what;
  if (ty === 'string' || ty === 'number' || ty === 'boolean') return 'leaf';
  if (ty === 'object') return 'object';
  return 'bad';
}
*/
var _rhaboo_getTypeOf = function (what) {
  if (what === undefined) return 'undefined';
  if (what === null) return 'null';
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
  Persistent : Persistent,
  enq : E.enq,
  onBusiness : E.onBusiness,
  _rhaboo_getTypeOf : _rhaboo_getTypeOf,
  _rhaboo_stashers : _rhaboo_stashers,
  _rhaboo_forgetters : _rhaboo_forgetters
};

