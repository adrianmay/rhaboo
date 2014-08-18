"use strict"

var ASON = {
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
  _stringifiers : {
    'null'      : function (ob) { return "~"; },
    'undefined' : function (ob) { return "_"; },
    'number'    : function (ob) { return "#"+ob.toString()+"#"; },
    'boolean'   : function (ob) { return ob?"@":"!"; },
    'string'    : function (ob) { return '"'+ASON._quote('"', ob)+'"'; },
    'object'    : function (ob) { return "&"+ASON._serialise(ob)+"&"; },
    'array'     : function (ob) { return "%"+ASON._serialise(ob)+"%"; },
    'bad'       : function (ob) { return ""; },
  },
  _quote : function(char, str) {
    //return str.replace(new RegExp('(['+char+'\\\\])', 'g'),function (a) { return '\\'+a; });
    return str.replace(new RegExp('(['+char+'\\\\])', 'g'),'\\$1');
  },
  _unquote : function(char, str) {
    return str.replace(new RegExp('\\\\(.)', 'g'),'$1');
  },
  _serialise : function(ob) {
    //The reason for this serialiser is to treat arrays just like other objects here.
    var ret = "";
    for (var i in ob) 
      if (ob.hasOwnProperty(i)) 
        ret += '"' + ASON._quote('"', i.toString()) + '"' + ASON.stringify(ob[i]); 
    return ret;
  },
  stringify : function (ob) {
    return ASON._stringifiers[ASON._classof(ob)](ob);
  },
  machineProto : {
    tokens : '~_!@"/&%=#;\\',
    chomp_no_escape : function() {
      this.yyval = this.input.substr(this.cur,1);
      if (this.tokens.indexOf(this.yyval) !== -1) {
        this.yytok = this.yyval
      } else {
        this.yytok = 'a';
      }
      this.cur++;
    },
    chomp : function() {
      this.chomp_no_escape();
      if (this.yytok!=='\\')
        return;
      this.chomp_no_escape();
      this.yytok = 'a';
    },
    getThisToken : function(tok) {
      if (this.yytok !== tok)
        return false;
      this.chomp();
      return true;
    },
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
    getBoolean : function(box) { return this.getTrue(box) || this.getFalse(box); },
    getInside : function(tok, box) {
      here("getInside0:"+tok+":"+this.yytok,false);
      if (this.yytok !== tok)
        return here("getInsideA:"+tok,false);
      if (this.input.length - this.cur < 1)
        return here("getInsideB:"+tok,false);
      var found;
      if (this.input.substr(this.cur, 1)===tok)
        found = 0;
      else {
        found = 1 + this.input.substr(this.cur).search(new RegExp("[^\\\\]"+tok));
        if (found === 0)
          return here("getInsideC:"+tok,false);
      }
      box.val = this.input.substr(this.cur, found);
      this.cur += found+1;
      this.chomp();
      return true;
    },
    getNumber : function(box) {
      var num = {};
      if (!this.getInside('#', num))
        return false;
      here (num.val);
      box.val = parseFloat(num.val);
      return true;
    },
    getString : function(box) {
      var s = {};
      if (!this.getInside('"', s))
        return false;
      box.val = ASON._unquote('"', s.val);
      return true;
    },
    getObjectDelimiter : function(box) {
      if (!this.getThisToken('&'))
        return false;
      box.val = {};
      return true;
    },
    getArrayDelimiter : function(box) {
      if (!this.getThisToken('%'))
        return false;
      box.val = [];
      return true;
    },
    getBranchDelimiter : function(box) { 
      return this.getObjectDelimiter(box) || this.getArrayDelimiter(box); 
    },
    getBranch : function(box) {
      var savecur = this.cur, savetok = this.tok;
      if (!this.getBranchDelimiter(box)) 
        return false;
      var n = {}, v={};
      while (this.getString(n) && this.getValue(v))
        box.val[n.val]=v.val;
      if (!this.getBranchDelimiter({}))  {
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

/*
 
function here(msg, suc) {
//  console.log("HERE: "+msg);
  return suc;
}

var tortured = [0,1,2,3,4]
tortured[1] = undefined;
tortured[2] = null;
delete tortured[3];
var tests = [
  { a: "b"},
  { 1 : "man", went: [2,"mow"] },
  ["the", ["quick", "brown"], { fox: "jumps", over: [2, "lazy", "dogs"] }],
  123 ,
  -321,
  123.45,
  -543.21,
  "A String"  ,
  'A "quoted" String',
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

module.exports = ASON;


