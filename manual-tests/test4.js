
_rhaboo_trace = function(s) { console.log(s); }

QUnit.test( "Load test: overwrite integer 3000 times", function( assert ) {
  var store = Rhaboo.persistent("Load");
  //Setting this callback slows the library down by a factor of about 3 ...
  for (var i=0;i<=3000;i++) {
    store.write("val", i);
  }
  assert.ok(true, "loaded");

});




