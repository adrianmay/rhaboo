
_rhaboo_trace = function(s) { console.log(s); }

QUnit.test( "memoryStorage", function( assert ) {
  var store = new Rhaboo.MemoryStorage('local');
  
  store.clear();
  assert.ok(store.length===0, "store cleared");
  store.setItem('test0', 'data0');
  assert.ok(store.length===1, "first item added to store");
  assert.ok(store.key(0)==='test0', "key registered");
  assert.ok(store.key(99)===null, "key() should return null when index out of bounds")
  assert.ok(store.getItem('test0')==='data0', "retrieved value matches stored value");
  
  store.setItem('test1', 'data1');
  store.setItem('test2', 'data2');
  assert.ok(store.length===3, "three items added to store");
  assert.ok(store.key(1)==='test1' && store.key(2)==='test2', "keys registered");
  assert.ok(store.getItem('test1')==='data1' && store.getItem('test2')==='data2', "retrieved values matches stored values");

  store.removeItem('test1');
  assert.ok(store.length===2, "item removed from store");
  store.removeItem('test1');
  assert.ok(store.length===2, "double removal has no effect");
  assert.ok(store.key(1)==='test2', "key order still ok");
  assert.ok(store.getItem('test1')===undefined, "get removed item returns undefined");

  var glob = new Rhaboo.MemoryStorage();
  assert.ok(glob.length===0, "local store items are not visible globally");
  glob.setItem('glob0', 'data0');
  assert.ok(glob.length===1 && glob.getItem('glob0')==='data0', "globally stored items are retrieved ok");
  assert.ok(store.getItem('glob0')===undefined, "global items are not visible in the local store");
  glob.removeItem('glob0');
  assert.ok(glob.length===0, "global length is updated correctly");
  assert.ok(glob.key(0)===null, "global keys are removed correctly");
  assert.ok(glob.getItem('glob0')===undefined, "global values are removed correctly");
  
  store.clear();
  assert.ok(store.length===0, "store is cleared");
  assert.ok(store.key(0)===null, "no keys in cleared store");
  assert.ok(store.getItem('test0')===undefined, "no values in cleared store");
});





