"use strict"

_rhaboo_trace = function(s) { console.log(s); }

QUnit.test( "Complex object after post-restore manipulation", function( assert ) {

  assert.ok (Number(localStorage.getItem("nextPhase")) === 3, "Please run tests in sequence");
  localStorage.setItem("nextPhase", 4);

  var store1 = new Rhaboo("A Unique Name");
  assert.ok( typeof store1 === "object", "Store1 exists");

  assert.ok( store1.a_string === "perky", "String remembered" );
  assert.ok( store1.a_num === 543.21, "Number remembered" );
  assert.ok( store1.a_bool === false, "Bool remembered" );
  assert.ok( typeof store1.empty_ob === 'object', "Empty object still there ...");
  assert.ok( store1.empty_ob._rhaboo_size() === 1, "... and still empty" );

  var store2 = new Rhaboo("Another Unique Name");
  assert.ok( store2.colour === "red", "Colour remembered" );
  assert.ok( store2.lue === 43, "Lue remembered" );
  assert.ok( store2.rhyme[1] === "man", "Rhyme's man remembered" );
  assert.ok( store2.rhyme.went === undefined, "Rhyme's 2 deleted" );

});

QUnit.test( "Array mutators", function( assert ) {
  var storeA = new Rhaboo("Try Arrays");
  console.log(JSON.stringify(storeA.arr));
  assert.ok(storeA.arr[0]==4  && storeA.arr[1]==3 && storeA.arr[2]==2 && storeA.arr[3]===undefined, "popped and remembered");

});

