
var E = require('./enq');

//This bit of abstraction is overkill...

//More accurate typeof stuff...

var getTypeOf = function (what) {
  if (what === undefined) return 'undefined';
  if (what === null) return 'null';
  var ty = typeof what;
  if (ty === 'string' || ty === 'number' || ty === 'boolean') return 'leaf';
  if (ty === 'object') return 'object';
  return 'bad';
}

var getClassOf = function (what) {
  var ty = getTypeOf(what);
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
  this._rhaboo_unpersist(where, old);
  return this;
}

function execute(script) {
  for (var s in script) if (script.hasOwnProperty(s)) {
    var step = script[s];
    var tr = JSON.stringify(step);
    localStorage[step[0]].apply(localStorage, step[1]);
  }
}

function procrastinate (sc) {
  E.enq( function(deferred) { //In the background: forget the old localStorage entries and then create the new ones
    execute(sc); //We might have to recurse into old
    deferred.resolve(); //This is just q mantra to mean we're done.
  });
}

function intend(ss, inst) {
  ss.push(inst);
  //procrastinate([inst]);
}

//Persist the changing of the property called 'where' of 'this' from 'old' to 'what':

Object.prototype._rhaboo_persist = function(where, what, old) {
  //The existence of a property called _rhaboo is the signal that this object should persist.
  if (this._rhaboo !== undefined) {
    var childkey = this._rhaboo_childKey(where);
    var ss = [];
    forgetters [getTypeOf(old)]  (ss, childkey, old);
    stashers   [getTypeOf(what)] (ss, where, childkey, what, this);
    procrastinate(ss);
  }
}

Object.prototype._rhaboo_unpersist = function(where, old) {
  //The existence of a property called _rhaboo is the signal that this object should persist.
  if (this._rhaboo !== undefined) {
    var childkey = this._rhaboo_childKey(where);
    var ss = [];
    forgetters [getTypeOf(old)]  (ss, childkey, old);
    procrastinate(ss);
  }
}

//These tables are necessary because basic types aren't objects in JS
//They're indexed by the return value of getTypeOf...
//For objects, we call a function that recurses back into THIS TABLE

var stashers = {
  "undefined" : function (ss, where, key, what, parent) { intend(ss, ['setItem',[key, 'undefined|undefined']]); },
  "null"      : function (ss, where, key, what, parent) { intend(ss, ['setItem',[key, 'null|null']]); },
  "leaf"      : function (ss, where, key, what, parent) { intend(ss, ['setItem',[key, typeof what + "|" + String(what)]]); },
  "object"    : function (ss, where, key, what, parent) { what._rhaboo_stash(ss, where, key, parent); },
  "bad"       : function (ss, where, key, what, parent) { }
}

var forgetters = {
  "undefined" : function (ss, key, old) { intend(ss, ['removeItem', [key]]); },
  "null"      : function (ss, key, old) { intend(ss, ['removeItem', [key]]); },
  "leaf"      : function (ss, key, old) { intend(ss, ['removeItem', [key]]); },
  "object"    : function (ss, key, old) { old._rhaboo_forget(ss); },
  "bad"       : function (ss, key, old) { }
}

//Make a normal OBJECT persistent...

Object.prototype._rhaboo_stash = function (ss, where, key, parent) {
  this._rhaboo = this._rhaboo || {};
  this._rhaboo.key=key;
  this._rhaboo.parent=parent;
  this._rhaboo.where=where;
  //The following line declares the object per-se. That's not necessary as long as it contains 
  //something, but it is necessary to persist empty objects. For simplicity it's always present.
  intend(ss, ['setItem', [ this._rhaboo_childKey(""), "|" ]]);
  //Recurse for all properties except _rhaboo
  for (var where in this) if (where !== "_rhaboo" && this.hasOwnProperty(where)) {
    var what = this[where];
    stashers [getTypeOf(what)] (ss, where, this._rhaboo_childKey(where), what, this);
  }
  this._rhaboo_storeLength(ss, true);
}

Object.prototype._rhaboo_forget = function (ss) {
  if (this._rhaboo === undefined || this._rhaboo.key === undefined) 
    return;
  for (var where in this) if (where !== "_rhaboo" && this.hasOwnProperty(where)) {
    var what = this[where];
    forgetters [getTypeOf(what)] (ss, this._rhaboo_childKey(where), what);
  }
  this._rhaboo_storeLength(ss, false);
  intend(ss, ['removeItem', [ this._rhaboo_childKey("") ]]); //That was the declaration of the object per-se
}

Object.prototype._rhaboo_storeLength = function (ss, store) {
  //Preserve length of sparse arrays...
  if (this._rhaboo_isArray()) {
    var wh = 'length'; 
    var l = this.length;
    if (store) {
      stashers ['leaf'] (ss, wh, this._rhaboo_childKey(wh), l, this);
    } else {
      forgetters ['leaf'] (ss, this._rhaboo_childKey(wh), l);
    }
  } 
}

//The constructor. Use of "this" means that use of "new" client-side is essential.

function Persistent(key) { this._rhaboo_restore(key); }

//Normally this should be empty now

Object.prototype._rhaboo_restore = function (key) {
  this._rhaboo = this._rhaboo || {};
  this._rhaboo.key=key;
  for (var k in localStorage) if (localStorage.hasOwnProperty(k)) {
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
        var type_val = localStorage.getItem(k).split("|");
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
  getTypeOf : getTypeOf,
  stashers : stashers,
  forgetters : forgetters,
  procrastinate : procrastinate,
};

