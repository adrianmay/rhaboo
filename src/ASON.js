"use strict"

var ASON = {
  //Detailed type examination function...
  _classof : function(ob) {
    if (ob === undefined) return 'undefined';
    if (ob === null) return 'null';
    var ty = typeof ob;
    if (ty === 'string' || ty === 'number' || ty === 'boolean') return ty;
    function isArray(ob) { //Thx: Douglas Crockford
      return typeof ob.length === 'number' &&
        typeof ob.splice === 'function' &&
        !(ob.propertyIsEnumerable('length'));
    }
    if (ty === 'object') 
      return isArray(ob) ? 'array' : 'object';
    return 'bad';
  },
  //Per-type serialisation...
  _stringifiers : {
    'null'      : function (ob) { return "~"; },
    'undefined' : function (ob) { return "_"; },
    'number'    : function (ob) { return "("+ob.toString()+")"; },
    'boolean'   : function (ob) { return ob?"@":"!"; },
    'string'    : function (ob) { return '<'+ASON._quote('>', ob)+'>'; },
    'object'    : function (ob) { return "{"+ASON._serialise(ob)+"}"; },
    'array'     : function (ob) { return "["+ASON._serialise(ob)+"]"; },
    'bad'       : function (ob) { return ""; },
  },
  stringify : function (ob) {
    return ASON._stringifiers[ASON._classof(ob)](ob);
  },
  //Escape terminal character and backslash...
  _quote : function(char, str) {
    //return str.replace(new RegExp('(['+char+'\\\\])', 'g'),function (a) { return '\\'+a; });
    return str.replace(new RegExp('(['+char+'\\\\])', 'g'),'\\$1');
  },
  _unquote : function(char, str) {
    return str.replace(new RegExp('\\\\(.)', 'g'),'$1');
  },
  //Recurse into objects and arrays...
  _serialise : function(ob) {
    //The reason for this serialiser is to treat arrays just like other objects here.
    var ret = "";
    for (var i in ob) 
      if (ob.hasOwnProperty(i)) 
        ret += '<' + ASON._quote('>', i.toString()) + '>=' + ASON.stringify(ob[i]) + ';'; 
    return ret;
  },

  //That was stringifying, now for parsing...
  //We do a top-down algorithm, which means:
  //  There are a bunch of getter functions, each of which:
  //      EITHER: Finds nothing relevant, makes no changes to the input stream and returns false,
  //      OR:     Finds what it was written for, eats it, assigns its value to a passed-in reference and returns true.
  //  These rules must be followed faithfully otherwise things get very chaotic.
  //  More rules:
  //      There's a parsing context ("machine") telling us how far we got through the input stream ("cur") and 
  //       what token we're looking at ("yytok").
  //      Input characters are examined one by one.
  //      cur always points to the next *unexamined* character, yytok classifies the previousy examined character 
  //       and yyval provides details. We call chomp to consume the current token and load up the next one.
  //      In this very simple grammar, yyval is always equal to the last character read and yytok is the same 
  //       in the case of special characters, or 'a' in the case of ordinary ones.
  //      Getter functions usually just examine yytok and return false if it's not for them. 
  //      We have to start the whole parser by calling chomp.
  //  The point of returning boolean is that the getters can be combined as boolean expressions to express the grammar.
  
  //For each string to be parsed, we'll make an object with this as its prototype...
  machineProto : {
    tokens : '~_!@<>/=()[]{};\\',
    //Naive chomp...
    chomp_no_escape : function() {
      this.yyval = this.input.substr(this.cur,1);
      if (this.tokens.indexOf(this.yyval) !== -1) {
        this.yytok = this.yyval
      } else {
        this.yytok = 'a';
      }
      this.cur++;
    },
    //With backslash-style escapes...
    chomp : function() {
      this.chomp_no_escape();
      if (this.yytok!=='\\')
        return;
      this.chomp_no_escape();
      this.yytok = 'a';
    },
    //If the current token equals the parameter, eat it...
    getThisToken : function(tok) {
      if (this.yytok !== tok)
        return false;
      this.chomp();
      return true;
    },
    //Tried factoring this repetitive stuff but it caused more trouble than it was worth...
    getUndefined : function(box) {
      if (!this.getThisToken('_'))
        return false;
      box.val = undefined;
      return true;
    },
    getNull : function(box)  {
      if (!this.getThisToken('~'))
        return false;
      box.val = null;
      return true;
    },
    getTrue : function(box) {
      if (!this.getThisToken('@'))
        return false;
      box.val = true;
      return true;
    },
    getFalse : function(box) {
      if (!this.getThisToken('!'))
        return false;
      box.val = false;
      return true;
    },
    getBoolean : function(box) { 
      return this.getTrue(box) || this.getFalse(box); 
    },
    //Get a string in customisable brackets, allowing the close-bracket to be escaped inside the string...
    getInside : function(toko, tokc, box) {
      //This could have been written more robustly in terms of chomp; this hack is faster though... 
      if (this.yytok !== toko)
        return false;
      if (this.input.length - this.cur < 1)
        return false;
      var found;
      if (this.input.substr(this.cur, 1)===tokc)
        found = 0;
      else {
        found = 1 + this.input.substr(this.cur).search(new RegExp("[^\\\\]\\"+tokc));
        if (found === 0)
          return false;
      }
      box.val = this.input.substr(this.cur, found);
      this.cur += found+1;
      this.chomp();
      return true;
    },
    getNumber : function(box) {
      var num = {};
      if (!this.getInside('(', ')', num))
        return false;
      box.val = parseFloat(num.val);
      return true;
    },
    getString : function(box) {
      var s = {};
      if (!this.getInside('<', '>', s))
        return false;
      box.val = ASON._unquote('>', s.val);
      return true;
    },
    getObjectDelimiter : function(opening, box) {
      if (!this.getThisToken(opening?'{':'}'))
        return false;
      if (opening)
        box.val = {};
      return true;
    },
    getArrayDelimiter : function(opening, box) {
      if (!this.getThisToken(opening?'[':']'))
        return false;
      if (opening)
        box.val = [];
      return true;
    },
    getBranchDelimiter : function(opening, box) { 
      return this.getObjectDelimiter(opening, box) || this.getArrayDelimiter(opening, box); 
    },
    getBranch : function(box) {
      var savecur = this.cur, savetok = this.tok;
      if (!this.getBranchDelimiter(true, box)) 
        return false;
      var n = {}, v={};
      while (this.getString(n) && this.getThisToken('=', {}) && this.getValue(v) && this.getThisToken(';', {}) )
        box.val[n.val]=v.val;
      if (!this.getBranchDelimiter(false, {}))  {
        //Without this precaution, we'd have broken the EITHER/OR rule above...
        this.tok = savetok; this.cur = savecur;
        return false;
      }
      return true;
    },
    getValue : function(box) {
      return this.getUndefined(box) ||
        this.getNull(box) ||
        this.getNumber(box) ||
        this.getString(box) ||
        this.getBoolean(box) ||
        this.getBranch(box) ;
    }
  },
  init : function(str) {
    var machine = Object.create(this.machineProto);
    machine.input = str;
    machine.cur = 0;
    machine.chomp();
    return machine;
  },
  parse : function (str) {
    var res= {};
    ASON.init(str).getValue(res);
    return res.val;
  }
}

module.exports = ASON;
 
//The real tests of ASON are those of the rhaboo library,
//  that being what I wrote it for.


/*
var tortured = [0,1,2,3,4]
tortured[1] = undefined;
tortured[2] = null;
delete tortured[3];
tortured[8] = "foo";
tortured["bar"] = 123;

var tests = [
  { a: "b"},
  { 1 : "man", went: [2,"mow"] },
  ["the", ["quick", "brown"], { fox: "jumps", over: [2, "lazy", "dogs"] }],
  123 ,
  -321,
  123.45,
  -543.21,
  "A String"  ,
  'A <very> \\ "complex" String',
  false,
  true,
  undefined,
  null,
  tortured 
]


function show(col) {
  for (var i in col) if (col.hasOwnProperty(i))
  console.log(col[i]);
  console.log("========================");
}

var slized = tests.map(ASON.stringify, ASON);
var reborn = slized.map(ASON.parse, ASON);
var reslized = reborn.map(ASON.stringify, ASON);
show(slized);
show(reborn);
show(reslized);
*/



