
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
  return this._rhaboo_key + this._rhaboo_classcode + "|" + String(where);
}

Object.prototype.write = function (where, what) {
  var old = this[where];
  this[where] = what;
  if (this._rhaboo_key !== undefined) {
    _rhaboo_forgetters [_rhaboo_getTypeOf(old)]  (this._rhaboo_childKey(where), old);
    _rhaboo_stashers   [_rhaboo_getTypeOf(what)] (this._rhaboo_childKey(where), what);
  }
  return this;
}

var _rhaboo_stashers = {
  "nothing": function (key, what) { },
  "leaf"   : function (key, what) { _rhaboo_store_setItem(key, typeof what + "|" + String(what)); },
  "object" : function (key, what) { what._rhaboo_stash(key); },
  "bad"    : function (key, what) { },
}

var _rhaboo_forgetters = {
  "nothing": function (key, old) { },
  "leaf"   : function (key, old) { _rhaboo_store_removeItem(key); },
  "object" : function (key, old) { old._rhaboo_forget(); },
  "bad"    : function (key, old) { },
}

Object.prototype._rhaboo_stash = function (key) {
  var storedsomething = false;
  this._rhaboo_key=key;
  for (var where in this) {
    if (where !== "_rhaboo_key" && this.hasOwnProperty(where)) {
      var what = this[where];
      _rhaboo_stashers [_rhaboo_getTypeOf(what)] (this._rhaboo_childKey(where), what);
      storedsomething = true;
    }
  }
  if (!storedsomething)
    _rhaboo_store_setItem(this._rhaboo_childKey(""), "empty|0");
}

Object.prototype._rhaboo_forget = function () {
  if (this._rhaboo_key === undefined) return;
  for (var where in this) {
    if (where !== "_rhaboo_key" && this.hasOwnProperty(where)) {
      var what = this[where];
      _rhaboo_forgetters [_rhaboo_getTypeOf(what)] (this._rhaboo_childKey(where), what);
    }
  }
  _rhaboo_store_removeItem(this._rhaboo_childKey(""));
}

function Rhaboo(key) { this._rhaboo_restore(key); }

Object.prototype._rhaboo_restore = function (key) {
  this._rhaboo_key=key;
  for (var k in _rhaboo_store) {
    if (_rhaboo_store.hasOwnProperty(k)) {
      var keyparts = k.split('|');
      if ( keyparts.shift() === key + this._rhaboo_classcode ) {
        var insertee = this;
        while ( keyparts.length > 1 ) {
          var newkeypart = keyparts.shift();
          var newname = newkeypart.slice(0, length-1);
          if (insertee[newname] === undefined) {
            var newclasssig = newkeypart.charAt(newkeypart.length-1)
            insertee[newname] = newclasssig === Array.prototype._rhaboo_classcode ? [] : {}
            insertee[newname]._rhaboo_key = insertee._rhaboo_childKey(newname)
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




