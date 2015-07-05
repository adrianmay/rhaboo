"use strict"

/* EXAMPLE OF STORAGE FORMAT:
   
_RHABOO_NEXT_SLOT             17                                 
_rhaboo_Cliches demo          &0                                 The root.
_rhaboo_0                     Object;initialised=1               It's an Object whose first property is called initialised with the value in slot 1.
_rhaboo_1                     ?t;cliches=2                       initialised is a bool with the value t. The root's next child is called cliches and lives in slot 2.
_rhaboo_2                     &3;silly=16                        cliches is a reference to what's in slot 3. The root's next child is called silly and lives in slot 16.
_rhaboo_3                     Array=3;0=4                        cliches is an Array of length 3 whose 0th element is in slot 4.
_rhaboo_4                     &5;1=8                             cliches[0] is a reference to what's in slot 5 and cliches[1] lives in slot 8
_rhaboo_5                     Object;text=6                      cliches[0] references this Object whose first member is called text and lives in slot 6
_rhaboo_6                     $24x7;count=7                      text is a string saying "24x7" and the next sibling is called count and lives in slot 7
_rhaboo_7                     #5                                 count is the number 5
_rhaboo_8                     &9;2=12                            cliches[1] is a reference to what's in slot 9, which resembles slot 5
_rhaboo_9                     Object;text=10                     Etc...
_rhaboo_10                    $dialogging;count=11               
_rhaboo_11                    #3                                 
_rhaboo_12                    &13                                
_rhaboo_13                    Object;text=14                     
_rhaboo_14                    box;count=15                       
_rhaboo_15                    #12                                
_rhaboo_16                    &9                                 silly is a reference to what's in slot 9, which we already mentioned

means:

{
  initialised: true,
  cliches: [
    { count: 5,  text: "24x7" },
    { count: 3,  text: "dialogging" },
    { count: 12, text: "outside of the box" }
  ],
  silly: <reference to same object as cliches[1]>
}

*/

//Polyfill constructor.name in IE
//Thanks to Matthew Sharley for this.
if (Function.prototype.name === undefined && Object.defineProperty !== undefined) {
    Object.defineProperty(Function.prototype, 'name', {
        get: function() {
            var funcNameRegex = /function\s([^(]{1,})\(/;
            var results = (funcNameRegex).exec((this).toString());
            return (results && results.length > 1) ? results[1].trim() : "";
        },
        set: function(value) {}
    });
}

var ls_prefix = "_rhaboo_";

var built = {};

//The serialiser...

var P = require('parunpar');

var tuple2 = P.sepByEsc('=',':')

//En/decode property name : slot number pairs...
var right_pp = tuple2([P.string_pp, P.number_pp])

/*
//Leaving this here for didactic reasons
var left_o_pp = P.pipe(
  function (dir) { return function (x) { 
    return dir ? ( x.length!==undefined ? [x.constructor.name, x.length] : [x.constructor.name] ) //can't simplify this cos we actually restore undefineds
               : ( new global[x[0]](x[1]) ) 
  }})(tuple2([P.string_pp, P.number_pp]));
*/

//These pps are a bit of a mess right now...

//left_o_pp en/decodes objects (not to be confused with references to objects)
//  The first and last lines just pack the 1 or 2 element array handled by the bit in between
//  3 lines encoding, 1 line decoding
//  The three encoding lines handle dates, arrays, and everything else respectively.
//  The constructor name is always stored and looked for in the global scope,
//    so if you have your own classes they should have the constructor name set up properly - 
//    Crockford style won't work.
//  (There was a plan to allow any class to define a constructorParameters function 
//    that would return something to be stored here like the date string or array length is.)
var left_o_pp = P.pipe(
  function (dir) { return function (x) { 
    return dir ? ( 
                   x.constructor.name === 'Date' ? [x.constructor.name, x.toString() ] :
                   x.length!==undefined ? [x.constructor.name, x.length.toString()] : 
                   [x.constructor.name] ) //can't simplify this cos we actually restore undefineds
               : ( new global[x[0]]( x[0]=='Date'?x[1]:x[1]?Number(x[1]):undefined ) ) 
               //: ( new global[x[0]]( x[1] ) ) 
  }})(tuple2([P.string_pp, P.string_pp]));

//Similarly, the first and last lines pack the array handled by the middle bit 
//  which contains a single-character type code and string representation of the value.
//The packing is a single string with a fixed width of 1 for the first field.
var left_l_pp = function (storage) { return P.pipe(
  function (dir) { return function (x) { 
    return dir ? 
      ( P.runSnd({ //runSnd(arr)(x) returns arr if arr only has one element, or [arr[0], arr[1](x)] if it has two 
      string:      ['$', P.id ], 
      number:      ['#', String ], 
      boolean:     ['?', function (x) {return x?'t':'f'} ], 
      'null':      ['~'], 
      'undefined': ['_'],
      object:      ['&', function(x){return x._rhaboo.slotnum;} ]
    } [P.typeOf(x)]) (x) ) : //P.typeOf behaves sanely on nulls etc
    (  { 
      '$': P.id, 
      '#': Number, 
      '?': P.eq('t'), 
      '~': P.konst(null), 
      '_': P.konst(undefined),
      '&': restore(storage),
    } [x[0]] (x[1]))
}}) (P.fixedWidth([1])([P.string_pp, P.string_pp]));}

var slot_o_pp  = P.tuple([left_o_pp, right_pp]);
//That takes something like [object,[nextprop,nextslot]]

var slot_l_pp  = function ( storage) { return P.tuple([left_l_pp(storage), right_pp]); }
//That takes something like [value,[nextprop,nextslot]]

function persistent(key) { return construct(  localStorage, key); }
function perishable(key) { return construct(sessionStorage, key); }

function construct(storage, key) { 
  var praw = storage.getItem(ls_prefix+key); //Likely contains "&0" where 0 is the slot number with the root object in

  if (praw) {
    var decoded = slot_l_pp(storage)(false)(praw); //Sees the & and calls restore
    built={}; //Thanks to janmotum on github for alerting me to the necessity for this line
    return decoded[0];
  } else { //virgin (not catching fullness here cos it would mean you're flooding LS with something other than rhaboo)
    var ret = addRef({_rhaboo:{storage:storage}}); //Persist an empty object. It will know its slot number afterwards.
    storage.setItem(ls_prefix+key, left_l_pp(storage)(true)(ret)); //left_l_pp in encoding mode 
    //   just returns "&0" where 0 is the slotnum which ret acquired during addRef
    return ret;
  }
}

//Restore an object from a slot
//Definitely an object (cos we get here through left_l_pp when it sees a &)
function restore(storage) { return function(slotnum) {
  if ( built[slotnum]!==undefined ) //important for multiple references to the same object
    return addRef(built[slotnum]); 
  var raw = storage.getItem(ls_prefix+slotnum)
  if (raw===undefined || raw===null) //means we ran out of storage when storing
    return undefined;
  //Read the constructor name and its optional parameter from the LHS of the slot contents 
  //  and run that to make decoded[0]. decoded[1] is an array with a prop name and slot number
  //  for the first child...
  var decoded = slot_o_pp(false)(raw);
  //Insert a default _rhaboo ...
  decoded[0]._rhaboo = {
    storage: storage,
    slotnum : slotnum,
    refs : 1,
    kids : { }
  };
  //Remember not to do that again...
  built[slotnum] = decoded[0];
  //Recursively build the children using augment...
  return (decoded.length>1) ? augment(decoded[0], decoded[1][0], decoded[1][1]) : decoded[0];
}}

//that is a half-built object and we are adding a child called propname whose 
//  type, value and possible successor is written in propslot...
function augment(that, propname, propslot) {
  var praw = that._rhaboo.storage.getItem(ls_prefix+propslot);
  if (praw===undefined || praw===null) //ran out of storage when storing
    return that;
  //We use slot_l_pp because we know it's a value not an object, because if it was an object then
  //  it would be a reference to another slot containing the object... 
  var decoded = slot_l_pp(that._rhaboo.storage)(false)(praw);
  that[propname] = decoded[0];
  //Maintain the doubly-linked list in memory...
  appendKid(that, propname, propslot);
  //Recurse:
  return (decoded.length>1) ? augment(that, decoded[1][0], decoded[1][1]) : that;
}

//These kid functions ONLY manipulate the list in memory and don't touch Storage

function appendKid(that, prop, slotnum) {
  //_rhaboo.prev is the tail of the list of children. _rhaboo.next is the head
  //So the new child will be referenced by either the formerly last child's next, or the global head which is _rhaboo.next
  var target = that._rhaboo.prev!==undefined ? that._rhaboo.kids[that._rhaboo.prev] : that._rhaboo;
  //Either way, it's now target.next and the global tail (_rhaboo.prev) that must reference the new child
  that._rhaboo.kids[prop] = { slotnum: slotnum, prev: that._rhaboo.prev }; //New child's prev points to old tail, and has no next.
  target.next = that._rhaboo.prev = prop;
}

function removeKid(that, prop) {
  var kid = that._rhaboo.kids[prop];
  (that._rhaboo.kids[kid.prev] || that._rhaboo).next = kid.next; //Victim's precursor's next or global head becomes victim's successor
  (that._rhaboo.kids[kid.next] || that._rhaboo).prev = kid.prev; //Victim's successor's prev or global tail because victim's precursor
  delete that._rhaboo.kids[prop]; //Delete victim's node
}

//Correct the contents of the Storage slot for either that or that[prop]
//Dual use: prop==undefined means persist that / else persist the prop
function updateSlot(that, prop) {
  var bare = []; //This is what we'll encode with parunpars to make the slot contents
  bare.push(prop!==undefined ? that[prop] : that); //First, the data itself
  //Now then, both _rhaboo and _rhaboo.kids[prop] have a next and prev.
  //  For the latter, they implement a doubly linked list in memory
  //    (although it's only singly linked in Storage)
  //  For the former, next means head and prev means tail.  
  //  Either way, if there's a next, then its property name and slot number 
  //    go on the right hand side of the slot contents
  var kid = prop!==undefined ? that._rhaboo.kids[prop] : that._rhaboo;
  if (kid.next!==undefined) 
    bare.push([kid.next, that._rhaboo.kids[kid.next].slotnum]);
  var encoded = (prop!==undefined ? slot_l_pp(that._rhaboo.storage) : slot_o_pp)(true)(bare);
  try {
    that._rhaboo.storage.setItem(ls_prefix+kid.slotnum, encoded);
  } catch (e) {
    if (isQuotaExceeded(e))
      //just in case some partial junk is left in there...
      that._rhaboo.storage.removeItem(ls_prefix+kid.slotnum, encoded);
      console.log("Local storage quota exceeded by rhaboo");
      throw (e);
      //now the restore phase will tolerate surprisingly empty slots.
  }
}

function isQuotaExceeded(e) { //Thanks crocodillon.com
  var quotaExceeded = false;
  if (e) {
    if (e.code) {
      switch (e.code) {
        case 22:
          quotaExceeded = true;
        break;
        case 1014:
          // Firefox
          if (e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
          quotaExceeded = true;
        }
        break;
      }
    } else if (e.number === -2147024882) {
      // Internet Explorer 8
      quotaExceeded = true;
    }
  }
  return quotaExceeded;
}

//Reserve a slot (if not already done) for a child of that called prop
function slotFor(that, prop) {
  if (that._rhaboo.kids[prop]===undefined) {
    var slotnum = newSlot(that._rhaboo.storage);
    appendKid(that, prop, slotnum); //Manage the linked list of children in _rhaboo
    updateSlot(that, that._rhaboo.kids[prop].prev); //The formerly last child now needs a reference to the new one
    //This slot is about to be written by caller
  }
}

//An unpersisted object is given a _rhaboo member with a storage slot, a refcount of 1 and no children
//An already persisted one just gets its refcount incremented
//The slotnum are refs parameters are usually undefined, except for a certain hack involving arrays
function addRef(that, storage, slotnum, refs) {
  if (that._rhaboo!==undefined && that._rhaboo.slotnum!==undefined)
    that._rhaboo.refs++;
  else {
    if (that._rhaboo===undefined) that._rhaboo = {};
    if (storage!==undefined) that._rhaboo.storage = storage;
    that._rhaboo.slotnum = slotnum!==undefined ? slotnum : newSlot(that._rhaboo.storage);
    that._rhaboo.refs = refs!==undefined ? refs : 1;
    that._rhaboo.kids = {};
    updateSlot(that);
    for (var prop in that) if (that.hasOwnProperty(prop) && prop !=='_rhaboo') 
      storeProp(that, prop);
  }
  return that;
}

function storeProp(that, prop) {
  slotFor(that, prop);
  if (P.typeOf(that[prop]) === 'object') {
    if (that[prop]._rhaboo===undefined) //probably true
      that[prop]._rhaboo={storage: that._rhaboo.storage};
    addRef(that[prop]);
  }
  updateSlot(that, prop);
}

function release(that, force) {
  var target, propname;
  that._rhaboo.refs--;
  if (force || that._rhaboo.refs === 0) {
    for (propname = undefined, target = that._rhaboo; 
         target; 
         target = that._rhaboo.kids[propname=target.next]) {
      that._rhaboo.storage.removeItem(ls_prefix+target.slotnum);
      if (propname!==undefined && P.typeOf(that[propname]) == 'object') 
        release(that[propname]); //recurse for any object-valued properties
    }
    delete that._rhaboo;
  }
}

function forgetProp(that, prop) {
  var target = that._rhaboo.kids[prop];
  if (target===undefined) return; //This can happen if you sort a sparse array
  var prevname = target.prev;
  that._rhaboo.storage.removeItem(ls_prefix+target.slotnum);
  if (P.typeOf(that[prop]) == 'object') 
    release(that[prop]);
  removeKid(that, prop);
  updateSlot(that, prevname);
}

//The main API
//Assumes that this is persistent already, but not that val is.
Object.defineProperty(Object.prototype, 'write', { value: function(prop, val) {
  slotFor(this, prop); //Reserves a slot if not already reserved.
  if (P.typeOf(this[prop]) === 'object') //Unpersist old value
    release(this[prop]);
  this[prop] = val;
  if (P.typeOf(val) === 'object') {
    if (val._rhaboo===undefined) //probably true
      val._rhaboo={storage: this._rhaboo.storage};
    addRef(val); //Persist val, whether already persisted or not
  }
  updateSlot(this, prop); //Write the slot for val itself
  return this;
}});

Object.defineProperty(Object.prototype, 'erase', { value: function(prop) {
  if (!this.hasOwnProperty(prop))
    return this;
  if (P.typeOf(this[prop]) === 'object') 
    release(this[prop]);
  var target = this._rhaboo.kids[prop];
  this._rhaboo.storage.removeItem(ls_prefix+target.slotnum);
  var prevname = target.prev;
  removeKid(this, prop);
  updateSlot(this, prevname);
  delete this[prop];
  return this;
}});

var keyOfStoredNextSlot = '_RHABOO_NEXT_SLOT'
var storedNextSlot=[0,0];
for (var i =0; i<2; i++) { //0 is local, 1 is session
  storedNextSlot[i] = localStorage.getItem(keyOfStoredNextSlot) || 0;
  storedNextSlot[i] = Number(storedNextSlot[i]);
}

//Grab a new slot
function newSlot(storage) {
  var i = (storage===localStorage) ? 0 : 1;
  var ret = storedNextSlot[i];
  storedNextSlot[i]++;
  storage.setItem(keyOfStoredNextSlot, storedNextSlot[i]);
  return ret;
}

//Hide _rhaboo from normal enumeration methods...
var Object_prototype_hasOwnPropertyOrig = Object.prototype.hasOwnProperty;
Object.prototype.hasOwnProperty = function(key) { 
  return (key != '_rhaboo' && Object_prototype_hasOwnPropertyOrig.call(this,key)); 
}

module.exports = {
  persistent : persistent,
  perishable : perishable,
  addRef: addRef,
  release: release,
  storeProp : storeProp,
  forgetProp : forgetProp,
  updateSlot : updateSlot,
};


