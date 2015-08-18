
_rhaboo_trace = function(s) { console.log(s); }

QUnit.test( "Strict and compatibility modes", function( assert ) {
  var store;
  // By default, compatibility mode should be disabled
  assert.ok(Rhaboo.compatibilityMode()===false, "Compatibility mode is disabled by default");
  
  // When compatibility mode is disabled, Rhaboo.persistent will fall-back to memory storage
  // if localStorage is not available
  try {
    store = Rhaboo.persistent('rhaboo_test_store');
    assert.ok(typeof store === "object", "Rhaboo.persistent without strict specified succeeds if localStorage not available");
  }
  catch(e) {
    assert.ok(false, 'Rhaboo.persistent without strict specified succeeds if localStorage not available');
  }
  
  // Passing true for 'strict' should make it not fallback to memory storage, and thus fail.
  try {
    store = Rhaboo.persistent('rhaboo_test_store', true /* strict */);
    assert.ok(false, "Rhaboo.persistent with strict enabled fails if localStorage not available");
  }
  catch(e) {
    assert.ok(true, "Rhaboo.persistent with strict enabled fails if localStorage not available");
  }

  // Enable compatibility mode
  Rhaboo.compatibilityMode(true);
  // compatibility mode change should be reflected
  assert.ok(Rhaboo.compatibilityMode()===true, "Compatibility mode change should be reflected");
  
  // In compatibility mode, not specifying strict should make Rhaboo behave as in old versions, and thus fail 
  try {
    store = Rhaboo.persistent('rhaboo_test_store');
    assert.ok(false, 'Rhaboo.persistent in compatibility mode without strict specified fails if localStorage not available');
  }
  catch(e) {
    assert.ok(true, 'Rhaboo.persistent in compatibility mode without strict specified fails if localStorage not available');
  }
  
  // Explicitly passing false for 'strict' should make it fallback to memory storage
  // even when compatibility mode is enabled
  try {
    store = Rhaboo.persistent('rhaboo_test_store', false /* not strict */);
    assert.ok(typeof store === "object", "Rhaboo.persistent in compatibility mode with strict explicitly disabled succeeds if localStorage not available");
  }
  catch(e) {
    assert.ok(false, "Rhaboo.persistent in compatibility mode with strict explicitly disabled succeeds if localStorage not available");
  }
  
  // Explicitly passing true for 'strict' should make it fail whether compatibility mode is enabled or not
  try {
    store = Rhaboo.persistent('rhaboo_test_store', true /* strict */);
    assert.ok(false, "Rhaboo.persistent with strict explicitly enabled fails if localStorage not available");
  }
  catch(e) {
    assert.ok(true, "Rhaboo.persistent with strict explicitly enabled fails if localStorage not available");
  }

  Rhaboo.compatibilityMode(false);
  try {localStorage.clear();} catch(e) {}  
});





