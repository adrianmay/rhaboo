
_rhaboo_trace = function(s) { console.log(s); }

Rhaboo.onBusiness(function (busy) {
  document.getElementById("business").innerHTML = busy?"Busy":"Idle";
});


if (page === 0) {
  for (var k in localStorage)
    if (localStorage.hasOwnProperty(k))
      localStorage.removeItem(k);
  localStorage.setItem("nextPhase", 2);
}


function same_ (p,e) {
  if (typeof p !== 'object')
    return (p === e);

  var en = 0, pn = 0;
  for (var ec in e) if (e.hasOwnProperty(ec)) en++;
  for (var pc in p) if ((pc !== '_rhaboo') && p.hasOwnProperty(pc)) {
    //console.log("MYSTERY:"+pc+":"+p[pc]);
    pn++;
    if (!same_(p[pc], e[pc]))
      return false;
  }
  //console.log("PN:"+pn+",EN:"+en);
  return (pn === en);
}

function same(p,e) {
  var ret = same_(p,e);
  if (!ret) {
    console.log("FAILED");
    console.log("P : " + JSON.stringify(p));
    console.log("E : " + JSON.stringify(e));
  }
  return ret;
}

var tests = {};

for (var pe in persistents) if (persistents.hasOwnProperty(pe)) {
  //console.log("A");
  tests[pe] = function (pe) { return function (assert) {
    var store = new Rhaboo.Persistent(pe);
    var steps = persistents[pe];
  //  console.log("C : "+ JSON.stringify(persistents));
  //  console.log("D : "+ pe);
    for (var st in steps) if (steps.hasOwnProperty(st)) { 
   //   console.log("B");
      var step = steps[st];
      if (step.action=="write") {
        var path = step.path.slice();
        var where = path.pop();
        var target = store;
        var x;
        for (x = path.shift(); x; x=path.shift())
          target = target[x];
        var vehicle = JSON.parse(step.vehicle);
        var val = vehicle.val;
        target.write(where, val);
      }
      var expect = JSON.parse(step.expect);
      assert.ok(same(store, expect));
    }
  }};
}

for (var p in tests) if (tests.hasOwnProperty(p)) {
  QUnit.test(p+ " test", tests[p](p));
}

// {\"P1000031\":{\"c\":[{\"x\":2,\"y\":true}],\"b\":[]},\"P1000032\":null}
