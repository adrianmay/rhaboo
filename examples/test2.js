
_rhaboo_trace = function(s) { console.log(s); }

function countMembers(ob) {
  var res=0;
  for (var k in ob) if (ob.hasOwnProperty(k)) res++;
  return res;
}

QUnit.test( "Simple restore", function( assert ) {

  assert.ok (Number(localStorage.getItem("nextPhase")) === 2, "Please run tests in sequence");
  localStorage.setItem("nextPhase", 3);

  assert.ok( 1==1, "Easy");
  var store1 = Rhaboo.persistent("A Unique Name");
  assert.ok( typeof store1 === "object", "Store1 exists");
  assert.ok (countMembers(store1) === 4, "Store1 still has 4 members");

  assert.ok( store1.a_string === "perky", "String remembered" );
  assert.ok( store1.a_num === 543.21, "Number remembered" );
  assert.ok( store1.a_bool === false, "Bool remembered" );
  assert.ok( typeof store1.empty_ob === 'object', "Empty object still there ...");
  assert.ok (countMembers(store1.empty_ob) === 0, "... and still empty");

  var store2 = Rhaboo.persistent("Another Unique Name");

  assert.ok( store2.colour === "red", "Colour remembered" );
  assert.ok( store2.lue === 42, "Lue remembered" );
  assert.ok( store2.too === true, "Too remembered" );
  assert.ok( store2.emp.length === 0, "Emp length remembered" );
  assert.ok( store2.emp[0] === undefined, "Emp remembered" );
  console.log("EMP:"+Ajon.stringify(store2.emp));
  assert.ok( store2.undies.undy === undefined, "Undies remembered" );
  assert.ok( countMembers(store2.undies) === 2, "2 undies");
  console.log("UNDIES:"+Ajon.stringify(store2.undies))

  assert.ok( store2.rhyme[1] === "man", "Rhyme's man remembered" );
  assert.ok( store2.rhyme.went[0] === 22, "Rhyme's 2 remembered" );
  assert.ok( store2.rhyme.went[1] === "mow", "Rhyme's mow remembered" );
  
  store2.write("lue", 43);
  store2.rhyme.write("went", undefined);

});

QUnit.test( "Array mutators", function( assert ) {
  var storeA = Rhaboo.persistent("Try Arrays");
  assert.ok(storeA.arr[0]==4  && storeA.arr[1]==3 && storeA.arr[2]==2 && storeA.arr[3]==1, "mutated and remebered ok");
  storeA.arr.pop()
  assert.ok(storeA.arr[0]==4  && storeA.arr[1]==3 && storeA.arr[2]==2 && storeA.arr[3]==undefined, "popped");

});

