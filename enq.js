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
}


