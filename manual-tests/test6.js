
_rhaboo_trace = function(s) { console.log(s); }

function countMembers(ob) {
  var res=0;
  for (var k in ob) if (ob.hasOwnProperty(k)) res++;
  return res;
}

QUnit.test("Rhaboo.inMemory", function(assert) {
  var store1 = Rhaboo.inMemory("A Unique Name");
  assert.ok(typeof store1 === "object", "Store1 exists");
  assert.ok(countMembers(store1) === 0, "Store1 empty");
  store1.write("a_string", "pinky");
  assert.ok( store1.a_string === "pinky", "Insert string");
  store1.write("a_string", "perky");
  assert.ok( store1.a_string === "perky", "Change string");
  store1.write("a_num", 123);
  assert.ok( store1.a_num === 123, "Integer");
  store1.write("a_num", 543.21);
  assert.ok( store1.a_num === 543.21, "Float");
  store1.write("a_bool", true);
  assert.ok( store1.a_bool === true, "Bool true");
  store1.write("a_bool", false);
  assert.ok( store1.a_bool === false, "Same Bool false");
  store1.write("empty_ob", {});
  assert.ok( typeof store1.empty_ob === 'object', "Insert empty object");

  var store2 = Rhaboo.inMemory("Another Unique Name");
  assert.ok(typeof store2 === "object", "Store2 exists");
  store2.write("colour", "red");
  store2.write("lue", 42);
  store2.write("too", true);
  store2.write("emp", null);
  store2.write("emp", []);
  store2.emp.sort();
  store2.emp.write("guts", "foo");
  store2.emp.write("guts",[]);
  store2.emp.guts.write('0', undefined);
  store2.emp.write("bum",true);
  console.log("EMP:"+Ajon.stringify(store2.emp))
  store2.write("undies", { three:3 });
  store2.undies.write("undy", null);
  store2.undies.erase("undy");
  store2.undies.write("undy", undefined);
  assert.ok( countMembers(store2.undies) === 2, "2 undies");
  console.log("UNDIES:"+Ajon.stringify(store2.undies))
  store2.write("rhyme", { 1: "man", went: [2, "mow"] } );
  store2.rhyme.went.write(0,22);
});

QUnit.test( "Simple restore", function(assert) {
  // Let's see if all of this behaves as expected when reading it back
  var store1 = Rhaboo.inMemory("A Unique Name");
  assert.ok( typeof store1 === "object", "Store1 exists");
  assert.ok (countMembers(store1) === 4, "Store1 still has 4 members");
  assert.ok( store1.a_string === "perky", "String remembered" );
  assert.ok( store1.a_num === 543.21, "Number remembered" );
  assert.ok( store1.a_bool === false, "Bool remembered" );
  assert.ok( typeof store1.empty_ob === 'object', "Empty object still there ...");
  assert.ok (countMembers(store1.empty_ob) === 0, "... and still empty");

  var store2 = Rhaboo.inMemory("Another Unique Name");
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

QUnit.test( "Complex object after post-restore manipulation", function(assert) {
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
