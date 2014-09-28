
_rhaboo_trace = function(s) { console.log(s); }

function countMembers(ob) {
  var res=0;
  for (var k in ob) if (ob.hasOwnProperty(k)) res++;
  return res;
}

QUnit.test( "Complex object after post-restore manipulation", function( assert ) {

  assert.ok (Number(localStorage.getItem("nextPhase")) === 3, "Please run tests in sequence");
  localStorage.setItem("nextPhase", 4);

  var store1 = Rhaboo.persistent("A Unique Name");
  assert.ok( typeof store1 === "object", "Store1 exists");

  assert.ok( store1.a_string === "perky", "String remembered" );
  assert.ok( store1.a_num === 543.21, "Number remembered" );
  assert.ok( store1.a_bool === false, "Bool remembered" );
  assert.ok( typeof store1.empty_ob === 'object', "Empty object still there ...");
  assert.ok (countMembers(store1.empty_ob) === 0, "... and still empty");

  var store2 = Rhaboo.persistent("Another Unique Name");
  assert.ok( store2.colour === "red", "Colour remembered" );
  assert.ok( store2.lue === 43, "Lue remembered" );
  assert.ok( store2.rhyme[1] === "man", "Rhyme's man remembered" );
  assert.ok( store2.rhyme.went === undefined, "Rhyme's 2 deleted" );

});

QUnit.test( "Array mutators", function( assert ) {
  var storeA = Rhaboo.persistent("Try Arrays");
  console.log(JSON.stringify(storeA.arr));
  assert.ok(storeA.arr[0]==4  && storeA.arr[1]==3 && storeA.arr[2]==2 && storeA.arr[3]===undefined, "popped and remembered");

});

