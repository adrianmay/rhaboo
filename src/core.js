
var E = require('./enq');

var _rhaboo_trace = function(s) { /* console.log(s); */ } //Turn this on in test code if you like

//This bit of abstraction is overkill...

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

//More accurate typeof stuff...

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

//These are used to build entries in localStorage...

Object.prototype._rhaboo_classcode = '&';
Array .prototype._rhaboo_classcode = '#';
Object.prototype._rhaboo_childKey = function (where) {
  return this._rhaboo.key + this._rhaboo_classcode + "|" + String(where);
  //It's a strange looking notation but it's easy to parse
} 

//This is the heart of the heart of the beast...

Object.prototype.write = function (where, what) {
  var old = this[where];
  this[where] = what;
  this._rhaboo_persist(where, what, old);
  return this;
}

Object.prototype.kill = function (where) {
  var old = this[where];
  delete this[where];
  this._rhaboo_kill(where, old);
  return this;
}

var spyon = null;

function _rhaboo_do(script) {
  for (var s in script) if (script.hasOwnProperty(s)) {
    var step = script[s];
    var tr = JSON.stringify(step);
    if (spyon !== null && tr.indexOf(spyon) !== -1)
      console.log(tr);
    localStorage[step[0]].apply(localStorage, step[1]);
  }
}

function _rhaboo_enqueue (sc) {
  E.enq( function(deferred) { //In the background: forget the old localStorage entries and then create the new ones
    _rhaboo_do(sc); //We might have to recurse into old
    deferred.resolve(); //This is just q mantra to mean we're done.
  });

}

//Persist the changing of the property called 'where' of 'this' from 'old' to 'what':

Object.prototype._rhaboo_persist = function(where, what, old) {
  //The existence of a property called _rhaboo is the signal that this object should persist.
  if (this._rhaboo !== undefined) {
    var childkey = this._rhaboo_childKey(where);
    var s1 = (_rhaboo_forgetters [_rhaboo_getTypeOf(old)]  (childkey, old));//.slice();
    var s2 = (_rhaboo_stashers   [_rhaboo_getTypeOf(what)] (where, childkey, what, this));//.slice();
    _rhaboo_enqueue(s1);
    _rhaboo_enqueue(s2);
  }
}

Object.prototype._rhaboo_kill = function(where, old) {
  //The existence of a property called _rhaboo is the signal that this object should persist.
  if (this._rhaboo !== undefined) {
    var childkey = this._rhaboo_childKey(where);
    var s1 = (_rhaboo_forgetters [_rhaboo_getTypeOf(old)]  (childkey, old)).slice();
    _rhaboo_enqueue(s1);
  }
}

//These tables are necessary because basic types aren't objects in JS
//They're indexed by the return value of _rhaboo_getTypeOf...
//For objects, we call a function that recurses back into THIS TABLE

var _rhaboo_stashers = {
  "undefined" : function (where, key, what, parent) { return [['setItem',[key, 'undefined|undefined']]]; },
  "null"      : function (where, key, what, parent) { return [['setItem',[key, 'null|null']]]; },
  "leaf"      : function (where, key, what, parent) { return [['setItem',[key, typeof what + "|" + String(what)]]]; },
  "object"    : function (where, key, what, parent) { return what._rhaboo_stash(where, key, parent); },
  "bad"       : function (where, key, what, parent) { return []; }
}

var _rhaboo_forgetters = {
  "undefined" : function (key, old) { return [['removeItem', [key]]]; },
  "null"      : function (key, old) { return [['removeItem', [key]]]; },
  "leaf"      : function (key, old) { return [['removeItem', [key]]]; },
  "object"    : function (key, old) { return old._rhaboo_forget(); },
  "bad"       : function (key, old) { return []; }
}

//Make a normal OBJECT persistent...

Object.prototype._rhaboo_stash = function (where, key, parent) {
  var ret = [];
  this._rhaboo = this._rhaboo || {};
  this._rhaboo.key=key;
  this._rhaboo.parent=parent;
  this._rhaboo.where=where;
  //The following line declares the object per-se. That's not necessary as long as it contains 
  //something, but it is necessary to persist empty objects. For simplicity it's always present.
  ret.push(['setItem', [ this._rhaboo_childKey(""), "|" ]]);
  //Recurse for all properties except _rhaboo
  for (var where in this) if (where !== "_rhaboo" && this.hasOwnProperty(where)) {
    var what = this[where];
    ret = ret.concat(_rhaboo_stashers [_rhaboo_getTypeOf(what)] (where, this._rhaboo_childKey(where), what, this));
  }
  ret = ret.concat(this._rhaboo_storeLength(true));
  return ret;
}

Object.prototype._rhaboo_storeLength = function (store) {
  //Preserve length of sparse arrays...
  if (this._rhaboo_isArray()) {
    var wh = 'length'; 
    var l = this.length;
    if (store) {
      return _rhaboo_stashers ['leaf'] (wh, this._rhaboo_childKey(wh), l, this);
    } else {
      return _rhaboo_forgetters ['leaf'] (this._rhaboo_childKey(wh), l);
    }
  } else return [];
}

Object.prototype._rhaboo_forget = function () {
  var ret = [];
  if (this._rhaboo === undefined || this._rhaboo.key === undefined) 
    return ret;
  for (var where in this) if (where !== "_rhaboo" && this.hasOwnProperty(where)) {
    var what = this[where];
    ret = ret.concat(_rhaboo_forgetters [_rhaboo_getTypeOf(what)] (this._rhaboo_childKey(where), what));
  }
  ret = ret.concat(this._rhaboo_storeLength(false));
  ret.push(['removeItem', [ this._rhaboo_childKey("") ]]); //That was the declaration of the object per-se
  return ret;
}

//The constructor. Use of "this" means that use of "new" client-side is essential.

function Persistent(key) { this._rhaboo_restore(key); }

//Normally this should be empty now

Object.prototype._rhaboo_restore = function (key) {
  this._rhaboo = this._rhaboo || {};
  this._rhaboo.key=key;
  for (var k in _rhaboo_store) if (_rhaboo_store.hasOwnProperty(k)) {
    //E.g. k="root&|arr#|2&|foo" is a leaf property called foo (whose type is in the value of the localStorage entry) 
    //in slot 2 of an array called arr in a persistent called root
    var keyparts = k.split('|');
    if ( keyparts.shift() === key + this._rhaboo_classcode ) { //Otherwise its for somebody else
      //Step deeper into this under guidance of k...
      var insertee = this;
      while ( keyparts.length > 1 ) {
        var newkeypart = keyparts.shift();
        var newname = newkeypart.slice(0, length-1); //remove & or #
        if (insertee[newname] === undefined) {
          //Make parental path on demand
          insertee[newname] = newkeypart.charAt(newkeypart.length-1) === Array.prototype._rhaboo_classcode ? [] : {}
          insertee[newname]._rhaboo = insertee[newname]._rhaboo || {}; 
          insertee[newname]._rhaboo.key = insertee._rhaboo_childKey(newname)
          insertee[newname]._rhaboo.parent = insertee;
          insertee[newname]._rhaboo.where = newname;
        }
        insertee = insertee[newname]; //Go deeper
      }
      //Now the only thing left in keyparts is the actual name of the property
      var leafkey = keyparts.shift();
      if (leafkey !== "") {
        //The value of the localStorage entry is of the form type|value
        var type_val = _rhaboo_store_getItem(k).split("|");
        insertee[leafkey] = {
          "number"   : function (s) { return Number(s); },
          "null"     : function (s) { return null; },
          "undefined": function (s) { return undefined; },
          "string"   : function (s) { return s; },
          "boolean"  : function (s) { return s==='true'?true:false; }
        } [type_val[0]] (type_val[1]);
      }
    }
  }
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
  _rhaboo_forgetters : _rhaboo_forgetters,
  _rhaboo_enqueue : _rhaboo_enqueue,
};

