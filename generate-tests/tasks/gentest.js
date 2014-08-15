//Now lets run them on regular objects (ignoring yields) to get the values we expect after each step. (Notice rhaboo has not been required into this test generator.)

"use strict"

var SR = require('seedrandom');
var rng = SR('squaggle.');
function roll(sides) { return Math.floor(rng()*sides); }

//Some simple markup-writing stuff

var m = {
  attlist:   function (atts) { 
    var ret = "";
    for (var name in atts) 
      if (atts.hasOwnProperty(name)) 
        ret += " "+name+"='"+atts[name]+"'";
    return ret;
  },
  el:        function(el,atts, body, multiline) { return "<"+el+m.attlist(atts)+">"+(multiline?"\n":"")+ body + (multiline?"\n":"") + "</"+el+">\n"; },

  script_ex: function(src)  { return m.el('script', { 'src': src }, '' ); },
  script_in: function(code) { return m.el('script', {}, code, true); },
  css:       function(url)  { return m.el('link', { rel:'stylesheet', type:'text/css', href:url }, ''); },
  testout:   function()     { return m.el('div',{id:'qunit'},'') + m.el('div',{id:'qunit-fixture'},''); },
  html:      function(head, body) {
    return "<!DOCTYPE html>\n" +
      //"<meta http-equiv='Content-Type' content='text/html; charset=utf-8'>\n" +
      m.el('meta', { 'http-equiv':'Content-Type', content:'text/html; charset:utf-8'}, "") +
      m.el('html', {}, 
         m.el('head', {}, head, true) + m.el('body', {}, body, true));
  },
  biglink:   function(cap,url) { return m.el('a', { class:'big',href:url },cap ); },
  //This will make more sense later....
  test_page: function(page) {
    return m.html(
      m.css('http://code.jquery.com/qunit/qunit-1.14.0.css') +
      m.script_ex('../../rhaboo.max.js') +
      m.el('style', {}, '.big { font-size:xx-large; }', true),
      m.script_ex('http://code.jquery.com/qunit/qunit-1.14.0.js') +
      m.script_ex('page.'+page+'.js') +
      m.script_ex('runner.js') +
      m.biglink('Start','page.0.html') + 
      m.biglink('Next','page.'+(parseInt(page)+1)+'.html') + 
      m.el('h4', { id: 'business'}, "Busy or not") +
      m.el('h1', {}, 'Rhaboo Generated Tests '+page) +
      m.el('a', {href: 'page.'+page+'.js'}, 'Test Code') +
      m.testout()
    );
  }
}


module.exports = function(grunt) {

  //This is a bunch of values organised by type which the test automat will draw on...
  //They'll be used cyclically and the leading 0s keep track of which was used last
  //  (although pseudo-random selection would be simpler and also fine)
  //The keys here introduce a notation used throughout
  var values = {
    B : [0, [true, false, false, true]],
    S : [0, ["ohjwfv", "je e", " o3r83rg", "ee efwdfb ", "    ", "23232323", "5t5t5t", "ng9u13htgjonn kjwfvojwv woef\nefbkjnbwrv w efb", "foo" ]],
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
      throw "Asking getValue for goofy type: " +type ;
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
  function getExpectname() {
    expectName++;
    return "E" + expectName.toString();
  }


  //y means yield, i.e., close browser window and test persistence
  var yon = {"" : true, "y" : true};

  Array.prototype.insertrandom = function (what) {
    this.splice(roll(this.length), 0, what);
  }

  var stories = ["dummy to make insertrandom fair"];

  for (var s1k in values)
    for (var s2k in yon)
      for (var s3k in values)
        for (var s4k in yon)
          for (var s5k in values)
            for (var s6k in yon)
              stories.insertrandom(s1k+s2k+s3k+s4k+s5k+s6k);

  stories.pop();

  //stories is now 8000 possible stories: 3 writes in each, each write assigning one of the ten types to some property of a persistent and each write optionally being followed by a yield
  //The test automat will paranoically check everything after every write and yield, so we don't need to put checking assertions in these stories: they are assumed.

  //Instead of these stories all happening to different persistents, we'd like to apply them to the contents of persistents we already made
  //so we'll start by making ~30 different persistents using the first 30 stories. Then we find the X objects and arrays in the result
  //and apply the next n*x stories to n members each of those objects, and so on until we run out of stories. But N doesn't have to be constant.

  var script = [];
  var pers = getPersName();
  var path = [getPersName()];
  var lastwrite = '';
  for (var st in stories) if (stories.hasOwnProperty(st)) {
    var story = stories[st].split('');
    for (var a in story) if (story.hasOwnProperty(a)) {
      var action = story[a];
      if (action=="y") {
        script.push({
          action : "yield",
          pers: pers
        });
      } else {
        lastwrite = action;
        var val = getValue(action);
        script.push({
          action : "write",
          pers: pers,
          path: path.slice(),
          vehicle : JSON.stringify({"val":val})
        });
      }
    }
    if (lastwrite=='o') {
      if (roll(2)==0) {
          path.push(getPersName());
      }
    } else {
      if (roll(2)==0) {
        if (roll(50)==0) {
          pers = getPersName();
          var path = [getPersName()];
        } else if (roll(5)==0) {
          if (path.length>1)
            path.pop();
        } else {
          path.pop();
          path.push(getPersName());
        }
      }
    }
  }

  //Now we run it on a normal object to see what values to expect

  var persistents = {};

  function run(box, step) {
    box[step.pers] = box[step.pers] || {};
    if (step.action=="yield") {
      ;
    } else {
      var vehicle = JSON.parse(step.vehicle);
      var val = vehicle.val;
      var path = step.path.slice();
      var where = path.pop();
      var target=box[step.pers];
      for (var dir in path) 
        if (path.hasOwnProperty(dir)) 
          target=target[path[dir]];
      target[where] = val;
    }
  }

  
  for (var st in script) if (script.hasOwnProperty(st)) {
    var step = script[st];
    run(persistents, step);
    step.expect = JSON.stringify(persistents[step.pers]);
  }


  //Now we have an array called script containing entries like:
  // { pers:    "name of persistent",
  //   action:  "yield" or "write",
  //   path:    [steps, into, persistent],
  //   vehicle: " { val: 123 } ",
  //   expect:  " { contents of persistent after operation } "
  // }

  //Eventually we'll have a bunch of html pages each containing a qunit test script whose steps 
  //correspond to a single persistent. so lets sort them out. first we separate each persistent
  //into its own story:

  var script2 = {};
  var script3 = {};
  for (var st in script) if (script.hasOwnProperty(st)) {
    var step = script[st];
    script2[step.pers] = script2[step.pers] || [];
    script3[step.pers] = script3[step.pers] || []; //need this later
    script2[step.pers].push(step);
  }

  var script = undefined;

  //Now we break each pers-story into pages. on each page, we'll check stuff and 
  //then make the changes and checks up to the next yield.

  for (var pe in script2) if (script2.hasOwnProperty(pe)) {
    var pers = script2[pe];
    var pers3 = script3[pe];
    var page=0;
    pers3[page] = pers3[page] || [];
    for (var st in pers) if (pers.hasOwnProperty(st)) {
      var step = pers[st];
      if (step.action=="write") {
        pers3[page].push({
          action : "write",
          path : step.path,
          vehicle : step.vehicle,
          expect: step.expect
        });
      } else {
        page++;
        pers3[page] = pers3[page] || [];
        pers3[page].push({
          expect: step.expect
        });
      }
    }
  }

  //Now script3 maps pers-names onto story3s where a story3 is a list of page3s, 
  //each page3 being a list of step3s, each step3 optionally having a path into the
  //pers and value to write there and definitely having the expected state of the 
  //pers after any write action. 
   
  //But we want pers-names inside pages, not vice-versa

  var script4 = [];

  for (var pe in script3) if (script3.hasOwnProperty(pe)) {
    var pers = script3[pe];
    for (var pa in pers) if (pers.hasOwnProperty(pa)) {
      var page = pers[pa];
      script4[pa] = script4[pa] || {};
      script4[pa][pe] = page;
    }
  }

  //Phew! Generator is done, over to the runner.

  function oblen(ob) {
    var count = 0;
    for (var x in ob) if (ob.hasOwnProperty(x)) count++;
    return count;
  }

  grunt.registerTask('gentest', function() {
    grunt.log.write("Persistents per page: ");
    for (var pa in script4) if (script4.hasOwnProperty(pa)) {
      grunt.file.write("generate-tests/generated-pages/page." + pa + ".js", "var page = "+pa+";\nvar persistents = "+JSON.stringify(script4[pa], null, 3)+"\n");
      grunt.file.write("generate-tests/generated-pages/page." + pa + ".html", m.test_page(pa));
      grunt.log.write(oblen(script4[pa]) + ", ");
    }
    grunt.file.write("generate-tests/generated-pages/script4.json", JSON.stringify(script4, null, 3)+"\n");
  });

};

