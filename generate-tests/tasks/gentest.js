//This rather eccentric hack seems to chuck out a wide variety of test cases.

"use strict"

var SR = require('seedrandom');
var AJON = require('ajon');
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
      m.script_ex('../../node_modules/ajon/src/ajon.js') +
      m.script_ex('../runner.js') +
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
    S : [0, ["ohjwfv", "je e", true, false, false, true, " o3r83rg", "ee efwdfb ", "    ", "23232323", "5t5t5t", "ng9u13htgjonn kjwfvojwv woef\nefbkjnbwrv w efb", "foo" ]],
    N : [0, [1, 43, 844758, -2, 0, -6385, 65535, 4, 0.0, 1.04, -75.64, 7340.10, -84.0, 123.0]],
    o : [0, [{}]],
    O : [0, [
      {foo:2, bar:["the", 3, "little", true]},
      {a:[], b:[]},
      {c:[{x:2,y:true}], b:[]},
      {n:{n:{n:{the:"who"}}}},
      {'ridiculously long and unsociable key' : true, arr : [{ another : [{ foo:4 }] }] }
    ]],
    a : [0, [[]]],
    A : [0, [
      [2, false, "blah", [3, true, "ecky"], {a: "asdf", b: true}], 
      [2,3,4,5], 
      ["the","quick","brown","fox",""], 
      [[[[[1,2,3]]]]] 
    ]],
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

  //If the script finds itself with an array in the firing line, it might interpret the ten codes to mean operations that only make sense for arrays
  var arrayOperations = {
    S : ['push', 0, [
      [1,2,3,4,5],
      [1,"bar", []],
      ["foo", { 1: "man", "went": [2,"mow"]}],
      []
    ]],
    N : ["pop", 0, [[]]],
    o : ['unshift', 0, [
      [1,2,3,4,5],
      [1,"bar", []],
      ["foo", { 1: "man", "went": [2,"mow"]}],
      []
    ]],
    O : ["shift", 0, [[]]],
    a : ["write", 0, [
      [0, undefined],
      [2, { the : "quick", brown: "fox"}],
      [20, "abcdefg"],
      [1, 123]
    ]],
    A : ["sort", 0, [[]]],
    u : ["reverse", 0, [[]]],
    n : ["splice", 0, [
      [0,0,1,2,3],
      [10,4,"foo"],
      [0,1000],
      [1000,0,10,20,30]
    ]],
  };

  function getArrayOperation(type) {
    if (!arrayOperations.hasOwnProperty(type))
      throw "Asking getArrayOperation for goofy type: " +type ;
    var set = arrayOperations[type][2];
    var max = set.length;
    var ret = set[arrayOperations[type][1]];
    arrayOperations[type][1]++;
    if (arrayOperations[type][1]>=max)
      arrayOperations[type][1]=0;
    return [arrayOperations[type][0], ret];
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

  Array.prototype.remove = function(where) {
    var rest = this.slice(where + 1);
    this.length = where;
    return this.push.apply(this, rest);
  };

  Array.prototype.write = function (where, what) {
    this[where] = what;
    if (what===undefined) {
      if (typeof parseInt(where) === 'number')
        this.remove(where);
      else
        delete this[where];
    }
    return this;
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

  //stories is now 2048 possible stories: 3 writes in each, each write assigning one of the 8 types to some property of a persistent and each write optionally being followed by a yield.
  //The test automat will paranoically check everything after every write and yield, so we don't need to put checking assertions in these stories: they are assumed.

  //Instead of these stories all happening to different persistents, we'd like to apply them to the contents of persistents we already made
  //so we'll start by making ~30 different persistents using the first 30 stories. Then we find the X objects and arrays in the result
  //and apply the next n*x stories to n members each of those objects, and so on until we run out of stories. But N doesn't have to be constant.

  var script = [];
  var pers = getPersName();
  var path = [getPersName()];
  var page = 0;

  //Gotta keep a register of what types our script will create under what names
  
  var thesearearrays = [];
  var theseareobjects = [];
  function findis(register, who) {
    for (var i in register) if (register.hasOwnProperty(i)) 
      if (register[i] == who)
        return i;
    return null;
  }
  function findisarray(who) { return findis(thesearearrays, who); }
  function findisobject(who) { return findis(theseareobjects, who); }
  function whatisthis(who) {
    var find = findisarray(who);
    if (find !== null) 
      return ['a', find];
    find = findisobject(who);
    if (find !== null) 
      return ['o', find];
    return ['l', null];
  }
  function thisis(what, who) {
    var its = whatisthis(who);
    if (its[0]===what) 
      return;
    if (its[0]=='a')
      delete thesearearrays[its[1]];
    if (its[0]=='o')
      delete theseareobjects[its[1]];
    if (what==='a')
      thesearearrays.push(who);
    if (what==='o')
      theseareobjects.push(who);
  }
  
  function conscript(ob) {
    script.push(ob);
    //grunt.log.write(JSON.stringify(ob)+"\n");
  }
  for (var st in stories) if (stories.hasOwnProperty(st)) {
    var story = stories[st].split('');
    for (var e in story) if (story.hasOwnProperty(e)) {
      var curtype = whatisthis(path[path.length-1])[0];
      var episode = story[e];
      if (episode=="y") {
        conscript({
          action : "yield",
          pers: pers,
          path: path.slice(),
        });
        page++;
      } else {
        if ( curtype === 'a' && (roll(3)>0) ) {
          var op = getArrayOperation(episode);
          conscript({
            action : "array",
            pers: pers,
            path: path.slice(),
            vehicle : AJON.stringify(op),
          });

        } else {
          var val = getValue(episode);
          conscript({
            action : "write",
            pers: pers,
            path: path.slice(),
            vehicle : AJON.stringify({"val":val}),
          });
          if (episode=='a' || episode=='A')
            thisis('a', path[path.length-1] );
          else if (episode=='o' || episode=='O')
            thisis('o', path[path.length-1] );
          else
            thisis('l', path[path.length-1] );

        }
      }
    }
    if (whatisthis(path[path.length-1])[0] === 'o') {
      //If we just made an object, maybe apply imminent tests inside it
      if (roll(2)==0) {
          path.push(getPersName());
      }
    } 
    if (roll(100)==0 || page > 10) {
      //Sometimes start a whole new persistent
      pers = getPersName();
      var path = [getPersName()];
      //thisis('o', pers);
      page = 0;
    } else if (roll(40)==0) {
      if (path.length>1)
        path.pop();
    } else if (roll(2)==0) {
      path.pop();
      path.push(getPersName());
    }

  }

  //Now we run it on a normal object to see what values to expect

  var persistents = {};

  function run(box, step) {
    box[step.pers] = box[step.pers] || {};
    if (step.action=="yield") {
      ;
    } else if (step.action=="write"){
      //grunt.log.write(JSON.stringify(step)+"\n");
      var vehicle = AJON.parse(step.vehicle);
      var val = vehicle.val;
      var path = step.path.slice();
      var where = path.pop();
      var target=box[step.pers];
      for (var dir in path) 
        if (path.hasOwnProperty(dir)) 
          target=target[path[dir]];
      target[where] = val;
      if (val === undefined)
        delete target[where];
      //grunt.log.write("   "+JSON.stringify(target[where])+"\n");
    } else if (step.action=="array"){
      //grunt.log.write(JSON.stringify(step)+"\n");
      var vehicle = AJON.parse(step.vehicle);
      var op = vehicle[0];
      var arglist = vehicle[1];
      var path = step.path.slice();
      var target=box[step.pers];
      for (var dir in path) 
        if (path.hasOwnProperty(dir)) 
          target=target[path[dir]];
      Array.prototype[op].apply(target, arglist);
    }
  }

  
  for (var st in script) if (script.hasOwnProperty(st)) {
    var step = script[st];
    run(persistents, step);
    step.expect = AJON.stringify(persistents[step.pers]);
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

  //var script = undefined;

  //Now we break each pers-story into pages. on each page, we'll check stuff and 
  //then make the changes and checks up to the next yield.

  for (var pe in script2) if (script2.hasOwnProperty(pe)) {
    var pers = script2[pe];
    var pers3 = script3[pe];
    var page=0;
    pers3[page] = pers3[page] || [];
    for (var st in pers) if (pers.hasOwnProperty(st)) {
      var step = pers[st];
      if (step.action=="write" || step.action=="array") {
        pers3[page].push({
          action :step.action,
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
    grunt.file.write("generate-tests/generated-pages/script.json", JSON.stringify(script, null, 3)+"\n");
    for (var pa in script4) if (script4.hasOwnProperty(pa)) {
      grunt.file.write("generate-tests/generated-pages/page." + pa + ".js", "var page = "+pa+";\nvar persistents = "+JSON.stringify(script4[pa], null, 3)+"\n");
      grunt.file.write("generate-tests/generated-pages/page." + pa + ".html", m.test_page(pa));
      grunt.log.write(oblen(script4[pa]) + ", ");
    }
  });

};

