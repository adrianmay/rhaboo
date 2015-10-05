
_rhaboo_trace = function(s) { console.log(s); }

function countMembers(ob) {
  var res=0;
  for (var k in ob) if (ob.hasOwnProperty(k)) res++;
  return res;
}

for (var k in localStorage)
  if (localStorage.hasOwnProperty(k))
    localStorage.removeItem(k);

try {localStorage.setItem("nextPhase", 2);} catch(e) {/* ignore */}

QUnit.test( "Write simple stuff", function( assert ) {

  var store1 = Rhaboo.persistent("A Unique Name");
  assert.ok( typeof store1 === "object", "Store1 exists");
  assert.ok (countMembers(store1) === 0, "Store1 empty");

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
/*
  //Insertion of key into new object might still be pending...
  assert.ok (countMembers(store1.empty_ob) === 0, "Check its empty");

  assert.ok (countMembers(store1) === 3, "Store1 has 3 members");

*/
  var store2 = Rhaboo.persistent("Another Unique Name");
  assert.ok( typeof store2 === "object", "Store2 exists");

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

QUnit.test( "Haven't clobbered regular arrays", function( assert ) {
  var a = [];
  a.push(10);
  a.push(20);
  assert.ok(a[0]===10 && a[1]===20, "push");
  a.unshift("foo");
  assert.ok(a[0]==="foo" && a[1]===10 && a[2]===20, "unshift");
  a.reverse();
  assert.ok(a[0]===20 && a[1]===10 && a[2]==="foo", "reverse");
  a.sort();
  assert.ok(a[0]===10 && a[1]===20 && a[2]==="foo", "sort");
  var p = a.pop();
  assert.ok(a[2]===undefined && a[0]===10 && a[1]===20, "pop");
  assert.ok(p==="foo", "popped");
  a.push(30, 40, 50);
  assert.ok(a[0]===10 && a[1]===20 && a[2]===30 && a[3]===40 && a[4]===50, "pushes");
  var s = a.shift();
  assert.ok(a[0]===20 && a[1]===30 && a[2]===40 && a[3]===50, "shift");
  assert.ok(s===10, "shifted");
  a.splice(1,2,34,35,36);
  assert.ok(a[0]===20 && a[1]===34 && a[2]===35 && a[3]===36 && a[4]===50, "splice");
  //a.fill(99, 2, 6);
  //assert.ok(a[0]===20 && a[1]===34 && a[2]===99 && a[3]===99 && a[4]===99 && a[5]===99 && a[6]===undefined, "fill");

});

QUnit.test( "Array mutators", function( assert ) {
  var storeA = Rhaboo.persistent("Try Arrays");
  storeA.write("arr", [1,2]);
  storeA.arr.push(3,4);
  storeA.arr.reverse();
  assert.ok(storeA.arr[0]==4 && storeA.arr[3]==1, "mutated ok");
});
