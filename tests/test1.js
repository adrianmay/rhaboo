
var _rhaboo_trace = function(s) { console.log(s); }

QUnit.test( "Phase 1", function( assert ) {

  var store1 = new Rhaboo("test");
  assert.ok( typeof store1 === "object", "Store1 exists");
  assert.ok (store1._rhaboo_size() === 1, "Please run tests in sequence");

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
  assert.ok (store1.empty_ob._rhaboo_size() === 1, "Check its empty");

});

