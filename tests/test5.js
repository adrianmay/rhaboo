"use strict"

_rhaboo_trace = function(s) { console.log(s); }

QUnit.test( "Loaded test", function( assert ) {
  var store = new Rhaboo("Load");
  //alert(store.val);
  assert.ok(store.val==3000, "loaded and remembered");

});





