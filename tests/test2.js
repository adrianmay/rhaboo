
var _rhaboo_trace = function(s) { console.log(s); }

QUnit.test( "Phase 1", function( assert ) {

  var store1 = new Rhaboo("test");
  assert.ok( typeof store1 === "object", "Store1 exists");

  assert.ok( store1.a_string === "perky", "String remembered" );
  assert.ok( store1.a_num === 543.21, "Number remembered" );
  assert.ok( store1.a_bool === false, "Bool remembered" );
  assert.ok( typeof store1.empty_ob === 'object', "Empty object still there ...");
  assert.ok( store1.empty_ob._rhaboo_size() === 1, "... and still empty" );

});


