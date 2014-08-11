//Provides a sequential queue of background tasks using the q promises library
//
"use strict" 

var _enq_head = emptyPromise();

function emptyPromise() {
  var defer = new Q.defer();
  defer.resolve();
  return defer.promise;
}

function enq(step) {
  var f = function() {
    var d = Q.defer();
    step(d);
    return d.promise;
  }
  _enq_head = _enq_head.then(f);
  _handle_business();
}

var _business_promise = undefined;
var _business_callback = undefined;
var _business_reported = false;

function enqOnBusiness(callback) {
  _business_callback = callback;
}

function _handle_business() {
  if (!_business_callback) {
    return 0;
  }
  var busynow = _enq_head.isPending();
  if (busynow) {
    _business_promise = _enq_head.then(_handle_business);
  }
  if (busynow != _business_reported) {
    if (busynow) {
      _business_reported = true;
    } else { 
      _business_reported = false;
    }
    if (_business_callback) {
      _business_callback(_business_reported); 
    }
  }
  return 0;
}
