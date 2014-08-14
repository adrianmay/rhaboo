
module.exports = function(grunt) {

  //This is a bunch of values organised by type which the test automat will draw on...
  //They'll be used cyclically and the leading 0s keep track of which was used last
  //The keys here introduce a notation used throughout
  var values = {
    B : [0, [true, false, false, true]],
    S : [0, ["ohjwfv", "je e", " o3r83rg", "Ee efwdfb ", "    ", "23232323", "5t5t5t", "ng9u13htgjonn kjwfvojwv woef\nefbkjnbwrv w efb", "foo" ]],
    I : [0, [1, 43, 844758, -2, 0, -6385, 65535, 4]],
    F : [0, [0.0, 1.04, -75.64, 7340.10, -84.0, 123.0]],
    o : [0, [{}]],
    O : [0, [
      {foo:2, bar:["the", 3, "little", true]},
      {a:[], b:[]},
      {c:[{x:2,y:true}], b:[]},
      {n:{n:{n:{the:"who"}}}},
      {'ridiculously long and unsociable key' : true, arr : [{ another : [{ foo:4 }] }] }
    ]],
    a : [0, []],
    A : [0, 
      [2, false, "blah", [3, true, "ecky"], {a: "asdf", b: true}], 
      [2,3,4,5], 
      ["the","quick","brown","fox",""], 
      [[[[[1,2,3]]]]] 
    ],
    u : [0, [undefined]],
    n : [0, [null]]
  };

  function getValue(type) {
    if (!values.hasOwnProperty(type))
      throw "Asking getValue for goofy type";
    var set = values[type][1];
    var max = set.length;
    var ret = set[values[type][0]];
    values[type][0]++;
    if (values[type][0]>=max)
      values[type][0]=0;
    return ret;
  }

  var persName=1000000;
  function getPersName() {
    persName++;
    return "P" + persName.toString();
  }

  var expectName=1000000;
  function getExpectName() {
    expectName++;
    return "E" + expectName.toString();
  }

  //Assuming the automat has just made a new persistent, we can use one of these to create a place inside it for the automat to bang on:
  
  var contexts = {
    plain : function (pers) { return pers; },
    ob :    function (pers) { pers.write("ob", {});                   return pers.ob; },
    OB :    function (pers) { pers.write("OB", {a:1, b:"foo"});       return pers.OB; },
    ar :    function (pers) { pers.write("ar", []);                   return pers.ar; },
    AR :    function (pers) { pers.write("AR", [1,true,"three",[] ]); return pers.AR; },
    OBAR :  function (pers) { return contexts.AR(contexts.OB(pers));  },
    AROB :  function (pers) { return contexts.OB(contexts.AR(pers));  }
  }

  //y means yield, i.e., close browser window and test persistence
  var yon = {"" : true, "y" : true};
  
  var stories = [];

  for (var context in contexts)
    for (var s1k in values)
      for (var s2k in yon)
        for (var s3k in values)
          for (var s4k in yon)
            for (var s5k in values)
              for (var s6k in yon)
                stories.push([context, s1k+s2k+s3k+s4k+s5k+s6k]);

  //stories is now 7*8000 possible stories: 3 writes in each, each write assigning one of the ten types to one of 7 contexts and each write optionally being followed by a yield
  //The test automat will paranoically check everything after every write and yield, so we don't need to put checking assertions in these stories: they are assumed.

  //Now lets run them on regular objects (ignoring yields) to get the values we expect after each step. (Notice rhaboo has not been required into this test generator.)
  
/*
  Object.prototype.write = function (where, what) { this[where] = what; }
  
  var testscript;
  for (var story in stories) {
    var teststep = {
      persname : getPersName(),
      context : stories[story][0],
    };
    
    var pig = {};
    var piglet = contexts[stories[story][0]](pig);
    var body = stories[story][1];

  }

*/


  grunt.registerTask('gentest', function() {
    grunt.file.write("tests.json", JSON.stringify(stories)+"\n");
  });

};

