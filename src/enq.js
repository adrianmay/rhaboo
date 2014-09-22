//Provides a sequential queue of background tasks using the q promises library

var Q = require('q');

var enq_head = emptyPromise();

function emptyPromise() {
  var defer = new Q.defer();
  defer.resolve();
  return defer.promise;
}

function enq (step) {
  var f = function() {
    var d = Q.defer();
    step(d);
    return d.promise;
  }
  enq_head = enq_head.then(f);
  handleBusiness();
}

var businessPromise = undefined;
var businessCallback = undefined;
var businessReported = false;

function handleBusiness() {
  if (!businessCallback) {
    return 0;
  }
  var busynow = enq_head.isPending();
  if (busynow) {
    businessPromise = enq_head.then(handleBusiness);
  }
  if (busynow != businessReported) {
    businessReported = busynow;
    if (businessCallback) {
      businessCallback(businessReported); 
    }
  }
  return 0;
}

function onBusiness (callback) {
//  businessCallback = callback;
}

module.exports = {
  enq:enq,
  onBusiness:onBusiness
};


