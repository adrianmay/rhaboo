var page = 0;
var persistents = {
   "P1000001": [
      {
         "action": "write",
         "path": [
            "P1000002"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1000002"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1000002"
         ],
         "vehicle": "{<val>=(1);}",
         "expect": "{<P1000002>=(1);}"
      }
   ],
   "P1000009": [
      {
         "action": "write",
         "path": [
            "P1000010"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000010>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1000010"
         ],
         "vehicle": "{<val>={<a>=[(0):];<b>=[(0):];};}",
         "expect": "{<P1000010>={<a>=[(0):];<b>=[(0):];};}"
      }
   ],
   "P1000012": [
      {
         "action": "write",
         "path": [
            "P1000013"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000013>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1000013"
         ],
         "vehicle": "{<val>=(-6385);}",
         "expect": "{<P1000013>=(-6385);}"
      },
      {
         "action": "write",
         "path": [
            "P1000013"
         ],
         "vehicle": "{<val>={<n>={<n>={<n>={<the>=<who>;};};};};}",
         "expect": "{<P1000013>={<n>={<n>={<n>={<the>=<who>;};};};};}"
      },
      {
         "action": "write",
         "path": [
            "P1000014"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1000013>={<n>={<n>={<n>={<the>=<who>;};};};};<P1000014>=[(0):];}"
      }
   ],
   "P1000017": [
      {
         "action": "write",
         "path": [
            "P1000018"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1000020": [
      {
         "action": "write",
         "path": [
            "P1000021"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000021>=~;}"
      }
   ],
   "P1000024": [
      {
         "action": "write",
         "path": [
            "P1000025"
         ],
         "vehicle": "{<val>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}",
         "expect": "{<P1000025>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      }
   ],
   "P1000030": [
      {
         "action": "write",
         "path": [
            "P1000031"
         ],
         "vehicle": "{<val>=(7340.1);}",
         "expect": "{<P1000031>=(7340.1);}"
      }
   ],
   "P1000036": [
      {
         "action": "write",
         "path": [
            "P1000037"
         ],
         "vehicle": "{<val>={<a>=[(0):];<b>=[(0):];};}",
         "expect": "{<P1000037>={<a>=[(0):];<b>=[(0):];};}"
      },
      {
         "action": "write",
         "path": [
            "P1000037"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000037>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1000037"
         ],
         "vehicle": "{<val>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}",
         "expect": "{<P1000037>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      },
      {
         "action": "write",
         "path": [
            "P1000037",
            "P1000038"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{<P1000037>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      },
      {
         "action": "write",
         "path": [
            "P1000037",
            "P1000038"
         ],
         "vehicle": "{<val>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}",
         "expect": "{<P1000037>={<P1000038>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      }
   ],
   "P1000043": [
      {
         "action": "write",
         "path": [
            "P1000044"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1000044>=[(0):];}"
      }
   ],
   "P1000048": [
      {
         "action": "write",
         "path": [
            "P1000049"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1000049>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      }
   ],
   "P1000055": [
      {
         "action": "write",
         "path": [
            "P1000056"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1000056>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      }
   ],
   "P1000059": [
      {
         "action": "write",
         "path": [
            "P1000060"
         ],
         "vehicle": "{<val>={<a>=[(0):];<b>=[(0):];};}",
         "expect": "{<P1000060>={<a>=[(0):];<b>=[(0):];};}"
      }
   ],
   "P1000068": [
      {
         "action": "write",
         "path": [
            "P1000069"
         ],
         "vehicle": "{<val>=<ng9u13htgjonn kjwfvojwv woef\nefbkjnbwrv w efb>;}",
         "expect": "{<P1000069>=<ng9u13htgjonn kjwfvojwv woef\nefbkjnbwrv w efb>;}"
      }
   ],
   "P1000075": [
      {
         "action": "write",
         "path": [
            "P1000076"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000076>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1000076"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1000076>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      }
   ],
   "P1000083": [
      {
         "action": "write",
         "path": [
            "P1000084"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1000088": [
      {
         "action": "write",
         "path": [
            "P1000089"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000089>={};}"
      }
   ],
   "P1000092": [
      {
         "action": "write",
         "path": [
            "P1000093"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1000093>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      }
   ],
   "P1000097": [
      {
         "action": "write",
         "path": [
            "P1000098"
         ],
         "vehicle": "{<val>=(7340.1);}",
         "expect": "{<P1000098>=(7340.1);}"
      }
   ],
   "P1000104": [
      {
         "action": "write",
         "path": [
            "P1000105"
         ],
         "vehicle": "{<val>=(123);}",
         "expect": "{<P1000105>=(123);}"
      }
   ],
   "P1000110": [
      {
         "action": "write",
         "path": [
            "P1000111"
         ],
         "vehicle": "{<val>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}",
         "expect": "{<P1000111>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}"
      },
      {
         "action": "write",
         "path": [
            "P1000111"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000111>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1000111"
         ],
         "vehicle": "{<val>=(-2);}",
         "expect": "{<P1000111>=(-2);}"
      }
   ],
   "P1000117": [
      {
         "action": "write",
         "path": [
            "P1000118"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000118>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1000118"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000118>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1000118"
         ],
         "vehicle": "{<val>=@;}",
         "expect": "{<P1000118>=@;}"
      },
      {
         "action": "write",
         "path": [
            "P1000118"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000118>={};}"
      }
   ],
   "P1000126": [
      {
         "action": "write",
         "path": [
            "P1000127"
         ],
         "vehicle": "{<val>=(1.04);}",
         "expect": "{<P1000127>=(1.04);}"
      },
      {
         "action": "write",
         "path": [
            "P1000127"
         ],
         "vehicle": "{<val>=<23232323>;}",
         "expect": "{<P1000127>=<23232323>;}"
      },
      {
         "action": "write",
         "path": [
            "P1000127"
         ],
         "vehicle": "{<val>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}",
         "expect": "{<P1000127>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      },
      {
         "action": "write",
         "path": [
            "P1000127",
            "P1000128"
         ],
         "vehicle": "{<val>={<n>={<n>={<n>={<the>=<who>;};};};};}",
         "expect": "{<P1000127>={<P1000128>={<n>={<n>={<n>={<the>=<who>;};};};};<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      }
   ],
   "P1000133": [
      {
         "action": "write",
         "path": [
            "P1000134"
         ],
         "vehicle": "{<val>=<je e>;}",
         "expect": "{<P1000134>=<je e>;}"
      }
   ],
   "P1000141": [
      {
         "action": "write",
         "path": [
            "P1000142"
         ],
         "vehicle": "{<val>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}",
         "expect": "{<P1000142>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}"
      },
      {
         "action": "write",
         "path": [
            "P1000142"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1000147": [
      {
         "action": "write",
         "path": [
            "P1000148"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000148>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1000148"
         ],
         "vehicle": "{<val>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}",
         "expect": "{<P1000148>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}"
      },
      {
         "action": "array",
         "path": [
            "P1000148"
         ],
         "vehicle": "[(2):<0>=<write>;<1>=[(2):<0>=(0);<1>=_;];]",
         "expect": "{<P1000148>=[(3):<0>=(3);<1>=(4);<2>=(5);];}"
      },
      {
         "action": "array",
         "path": [
            "P1000148"
         ],
         "vehicle": "[(2):<0>=<shift>;<1>=[(0):];]",
         "expect": "{<P1000148>=[(2):<0>=(4);<1>=(5);];}"
      }
   ],
   "P1000154": [
      {
         "action": "write",
         "path": [
            "P1000155"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000155>={};}"
      }
   ],
   "P1000161": [
      {
         "action": "write",
         "path": [
            "P1000162"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000162>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1000162"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000162>={};}"
      }
   ],
   "P1000167": [
      {
         "action": "write",
         "path": [
            "P1000168"
         ],
         "vehicle": "{<val>=(65535);}",
         "expect": "{<P1000168>=(65535);}"
      }
   ],
   "P1000175": [
      {
         "action": "write",
         "path": [
            "P1000176"
         ],
         "vehicle": "{<val>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}",
         "expect": "{<P1000176>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}"
      }
   ],
   "P1000179": [
      {
         "action": "write",
         "path": [
            "P1000180"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000180>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1000180"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000180>={};}"
      }
   ],
   "P1000187": [
      {
         "action": "write",
         "path": [
            "P1000188"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000188>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1000188"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000188>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1000188"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1000189"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000189>={};}"
      }
   ],
   "P1000193": [
      {
         "action": "write",
         "path": [
            "P1000194"
         ],
         "vehicle": "{<val>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}",
         "expect": "{<P1000194>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}"
      },
      {
         "action": "write",
         "path": [
            "P1000194"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000194>=~;}"
      }
   ],
   "P1000200": [
      {
         "action": "write",
         "path": [
            "P1000201"
         ],
         "vehicle": "{<val>={<n>={<n>={<n>={<the>=<who>;};};};};}",
         "expect": "{<P1000201>={<n>={<n>={<n>={<the>=<who>;};};};};}"
      },
      {
         "action": "write",
         "path": [
            "P1000201"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000201>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1000201"
         ],
         "vehicle": "{<val>=<je e>;}",
         "expect": "{<P1000201>=<je e>;}"
      },
      {
         "action": "write",
         "path": [
            "P1000202"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000201>=<je e>;<P1000202>={};}"
      }
   ],
   "P1000209": [
      {
         "action": "write",
         "path": [
            "P1000210"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000210>={};}"
      }
   ],
   "P1000214": [
      {
         "action": "write",
         "path": [
            "P1000215"
         ],
         "vehicle": "{<val>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}",
         "expect": "{<P1000215>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}"
      }
   ],
   "P1000220": [
      {
         "action": "write",
         "path": [
            "P1000221"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1000221>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      },
      {
         "action": "array",
         "path": [
            "P1000221"
         ],
         "vehicle": "[(2):<0>=<unshift>;<1>=[(2):<0>=<foo>;<1>={<1>=<man>;<went>=[(2):<0>=(2);<1>=<mow>;];};];]",
         "expect": "{<P1000221>=[(7):<0>=<foo>;<1>={<1>=<man>;<went>=[(2):<0>=(2);<1>=<mow>;];};<2>=(2);<3>=!;<4>=<blah>;<5>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<6>={<a>=<asdf>;<b>=@;};];}"
      },
      {
         "action": "array",
         "path": [
            "P1000221"
         ],
         "vehicle": "[(2):<0>=<shift>;<1>=[(0):];]",
         "expect": "{<P1000221>=[(6):<0>={<1>=<man>;<went>=[(2):<0>=(2);<1>=<mow>;];};<1>=(2);<2>=!;<3>=<blah>;<4>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<5>={<a>=<asdf>;<b>=@;};];}"
      },
      {
         "action": "write",
         "path": [
            "P1000222"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000221>=[(6):<0>={<1>=<man>;<went>=[(2):<0>=(2);<1>=<mow>;];};<1>=(2);<2>=!;<3>=<blah>;<4>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<5>={<a>=<asdf>;<b>=@;};];<P1000222>=~;}"
      }
   ],
   "P1000228": [
      {
         "action": "write",
         "path": [
            "P1000229"
         ],
         "vehicle": "{<val>=!;}",
         "expect": "{<P1000229>=!;}"
      },
      {
         "action": "write",
         "path": [
            "P1000229"
         ],
         "vehicle": "{<val>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}",
         "expect": "{<P1000229>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}"
      }
   ],
   "P1000233": [
      {
         "action": "write",
         "path": [
            "P1000234"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000234>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1000234"
         ],
         "vehicle": "{<val>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}",
         "expect": "{<P1000234>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}"
      }
   ],
   "P1000238": [
      {
         "action": "write",
         "path": [
            "P1000239"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000239>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1000239"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1000239"
         ],
         "vehicle": "{<val>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}",
         "expect": "{<P1000239>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}"
      }
   ],
   "P1000242": [
      {
         "action": "write",
         "path": [
            "P1000243"
         ],
         "vehicle": "{<val>={<a>=[(0):];<b>=[(0):];};}",
         "expect": "{<P1000243>={<a>=[(0):];<b>=[(0):];};}"
      },
      {
         "action": "write",
         "path": [
            "P1000243"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1000243>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1000243"
         ],
         "vehicle": "[(2):<0>=<shift>;<1>=[(0):];]",
         "expect": "{<P1000243>=[(0):];}"
      }
   ],
   "P1000248": [
      {
         "action": "write",
         "path": [
            "P1000249"
         ],
         "vehicle": "{<val>=<foo>;}",
         "expect": "{<P1000249>=<foo>;}"
      },
      {
         "action": "write",
         "path": [
            "P1000249"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000249>={};}"
      }
   ],
   "P1000253": [
      {
         "action": "write",
         "path": [
            "P1000254"
         ],
         "vehicle": "{<val>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}",
         "expect": "{<P1000254>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      }
   ],
   "P1000259": [
      {
         "action": "write",
         "path": [
            "P1000260"
         ],
         "vehicle": "{<val>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}",
         "expect": "{<P1000260>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}"
      }
   ],
   "P1000264": [
      {
         "action": "write",
         "path": [
            "P1000265"
         ],
         "vehicle": "{<val>={<a>=[(0):];<b>=[(0):];};}",
         "expect": "{<P1000265>={<a>=[(0):];<b>=[(0):];};}"
      },
      {
         "action": "write",
         "path": [
            "P1000265"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1000265"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000265>={};}"
      }
   ],
   "P1000271": [
      {
         "action": "write",
         "path": [
            "P1000272"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1000272>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1000272"
         ],
         "vehicle": "[(2):<0>=<pop>;<1>=[(0):];]",
         "expect": "{<P1000272>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1000272"
         ],
         "vehicle": "[(2):<0>=<unshift>;<1>=[(0):];]",
         "expect": "{<P1000272>=[(0):];}"
      }
   ],
   "P1000277": [
      {
         "action": "write",
         "path": [
            "P1000278"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000278>=~;}"
      }
   ],
   "P1000283": [
      {
         "action": "write",
         "path": [
            "P1000284"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1000287": [
      {
         "action": "write",
         "path": [
            "P1000288"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000288>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1000288"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1000288>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      }
   ],
   "P1000294": [
      {
         "action": "write",
         "path": [
            "P1000295"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000295>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1000295"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1000295"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1000295>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      },
      {
         "action": "write",
         "path": [
            "P1000296"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000295>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];<P1000296>={};}"
      }
   ],
   "P1000299": [
      {
         "action": "write",
         "path": [
            "P1000300"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000300>={};}"
      }
   ],
   "P1000305": [
      {
         "action": "write",
         "path": [
            "P1000306"
         ],
         "vehicle": "{<val>=<23232323>;}",
         "expect": "{<P1000306>=<23232323>;}"
      },
      {
         "action": "write",
         "path": [
            "P1000306"
         ],
         "vehicle": "{<val>=(0);}",
         "expect": "{<P1000306>=(0);}"
      }
   ],
   "P1000311": [
      {
         "action": "write",
         "path": [
            "P1000312"
         ],
         "vehicle": "{<val>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}",
         "expect": "{<P1000312>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}"
      }
   ],
   "P1000319": [
      {
         "action": "write",
         "path": [
            "P1000320"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1000320"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1000320>=[(0):];}"
      },
      {
         "action": "write",
         "path": [
            "P1000320"
         ],
         "vehicle": "{<val>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}",
         "expect": "{<P1000320>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}"
      }
   ],
   "P1000325": [
      {
         "action": "write",
         "path": [
            "P1000326"
         ],
         "vehicle": "{<val>={<n>={<n>={<n>={<the>=<who>;};};};};}",
         "expect": "{<P1000326>={<n>={<n>={<n>={<the>=<who>;};};};};}"
      }
   ],
   "P1000333": [
      {
         "action": "write",
         "path": [
            "P1000334"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1000334>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1000334"
         ],
         "vehicle": "[(2):<0>=<reverse>;<1>=[(0):];]",
         "expect": "{<P1000334>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1000334"
         ],
         "vehicle": "[(2):<0>=<push>;<1>=[(3):<0>=(1);<1>=<bar>;<2>=[(0):];];]",
         "expect": "{<P1000334>=[(3):<0>=(1);<1>=<bar>;<2>=[(0):];];}"
      },
      {
         "action": "write",
         "path": [
            "P1000335"
         ],
         "vehicle": "{<val>=<23232323>;}",
         "expect": "{<P1000334>=[(3):<0>=(1);<1>=<bar>;<2>=[(0):];];<P1000335>=<23232323>;}"
      }
   ],
   "P1000338": [
      {
         "action": "write",
         "path": [
            "P1000339"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1000341": [
      {
         "action": "write",
         "path": [
            "P1000342"
         ],
         "vehicle": "{<val>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}",
         "expect": "{<P1000342>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}"
      },
      {
         "action": "write",
         "path": [
            "P1000342"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1000342>=[(0):];}"
      }
   ],
   "P1000345": [
      {
         "action": "write",
         "path": [
            "P1000346"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1000346"
         ],
         "vehicle": "{<val>=<foo>;}",
         "expect": "{<P1000346>=<foo>;}"
      },
      {
         "action": "write",
         "path": [
            "P1000346"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1000347"
         ],
         "vehicle": "{<val>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}",
         "expect": "{<P1000347>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}"
      },
      {
         "action": "array",
         "path": [
            "P1000347"
         ],
         "vehicle": "[(2):<0>=<shift>;<1>=[(0):];]",
         "expect": "{<P1000347>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1000347"
         ],
         "vehicle": "[(2):<0>=<sort>;<1>=[(0):];]",
         "expect": "{<P1000347>=[(0):];}"
      }
   ],
   "P1000355": [
      {
         "action": "write",
         "path": [
            "P1000356"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1000356"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1000356>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1000356"
         ],
         "vehicle": "[(2):<0>=<push>;<1>=[(0):];]",
         "expect": "{<P1000356>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1000356"
         ],
         "vehicle": "[(2):<0>=<sort>;<1>=[(0):];]",
         "expect": "{<P1000356>=[(0):];}"
      }
   ],
   "P1000360": [
      {
         "action": "write",
         "path": [
            "P1000361"
         ],
         "vehicle": "{<val>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}",
         "expect": "{<P1000361>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}"
      }
   ],
   "P1000366": [
      {
         "action": "write",
         "path": [
            "P1000367"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1000372": [
      {
         "action": "write",
         "path": [
            "P1000373"
         ],
         "vehicle": "{<val>={<n>={<n>={<n>={<the>=<who>;};};};};}",
         "expect": "{<P1000373>={<n>={<n>={<n>={<the>=<who>;};};};};}"
      },
      {
         "action": "write",
         "path": [
            "P1000373"
         ],
         "vehicle": "{<val>=(65535);}",
         "expect": "{<P1000373>=(65535);}"
      }
   ],
   "P1000380": [
      {
         "action": "write",
         "path": [
            "P1000381"
         ],
         "vehicle": "{<val>=<    >;}",
         "expect": "{<P1000381>=<    >;}"
      }
   ],
   "P1000385": [
      {
         "action": "write",
         "path": [
            "P1000386"
         ],
         "vehicle": "{<val>=<5t5t5t>;}",
         "expect": "{<P1000386>=<5t5t5t>;}"
      }
   ],
   "P1000392": [
      {
         "action": "write",
         "path": [
            "P1000393"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1000393"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000393>={};}"
      }
   ],
   "P1000399": [
      {
         "action": "write",
         "path": [
            "P1000400"
         ],
         "vehicle": "{<val>=(1.04);}",
         "expect": "{<P1000400>=(1.04);}"
      }
   ],
   "P1000406": [
      {
         "action": "write",
         "path": [
            "P1000407"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1000410": [
      {
         "action": "write",
         "path": [
            "P1000411"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000411>={};}"
      }
   ],
   "P1000415": [
      {
         "action": "write",
         "path": [
            "P1000416"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1000416>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1000416"
         ],
         "vehicle": "[(2):<0>=<shift>;<1>=[(0):];]",
         "expect": "{<P1000416>=[(0):];}"
      }
   ],
   "P1000421": [
      {
         "action": "write",
         "path": [
            "P1000422"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1000422"
         ],
         "vehicle": "{<val>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}",
         "expect": "{<P1000422>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}"
      }
   ],
   "P1000428": [
      {
         "action": "write",
         "path": [
            "P1000429"
         ],
         "vehicle": "{<val>=<    >;}",
         "expect": "{<P1000429>=<    >;}"
      },
      {
         "action": "write",
         "path": [
            "P1000429"
         ],
         "vehicle": "{<val>={<a>=[(0):];<b>=[(0):];};}",
         "expect": "{<P1000429>={<a>=[(0):];<b>=[(0):];};}"
      },
      {
         "action": "write",
         "path": [
            "P1000429"
         ],
         "vehicle": "{<val>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}",
         "expect": "{<P1000429>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      },
      {
         "action": "write",
         "path": [
            "P1000429",
            "P1000431"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{<P1000429>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      }
   ],
   "P1000434": [
      {
         "action": "write",
         "path": [
            "P1000435"
         ],
         "vehicle": "{<val>=<ng9u13htgjonn kjwfvojwv woef\nefbkjnbwrv w efb>;}",
         "expect": "{<P1000435>=<ng9u13htgjonn kjwfvojwv woef\nefbkjnbwrv w efb>;}"
      },
      {
         "action": "write",
         "path": [
            "P1000435"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1000442": [
      {
         "action": "write",
         "path": [
            "P1000443"
         ],
         "vehicle": "{<val>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}",
         "expect": "{<P1000443>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}"
      }
   ],
   "P1000450": [
      {
         "action": "write",
         "path": [
            "P1000451"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000451>=~;}"
      }
   ],
   "P1000456": [
      {
         "action": "write",
         "path": [
            "P1000457"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000457>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1000457"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1000463": [
      {
         "action": "write",
         "path": [
            "P1000464"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000464>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1000464"
         ],
         "vehicle": "{<val>=(1);}",
         "expect": "{<P1000464>=(1);}"
      }
   ],
   "P1000471": [
      {
         "action": "write",
         "path": [
            "P1000472"
         ],
         "vehicle": "{<val>=(1.04);}",
         "expect": "{<P1000472>=(1.04);}"
      }
   ],
   "P1000478": [
      {
         "action": "write",
         "path": [
            "P1000479"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000479>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1000479"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000479>={};}"
      }
   ],
   "P1000484": [
      {
         "action": "write",
         "path": [
            "P1000485"
         ],
         "vehicle": "{<val>=(1);}",
         "expect": "{<P1000485>=(1);}"
      },
      {
         "action": "write",
         "path": [
            "P1000485"
         ],
         "vehicle": "{<val>=!;}",
         "expect": "{<P1000485>=!;}"
      },
      {
         "action": "write",
         "path": [
            "P1000485"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1000485>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      }
   ],
   "P1000492": [
      {
         "action": "write",
         "path": [
            "P1000493"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1000499": [
      {
         "action": "write",
         "path": [
            "P1000500"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000500>=~;}"
      }
   ],
   "P1000506": [
      {
         "action": "write",
         "path": [
            "P1000507"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1000507>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      }
   ],
   "P1000510": [
      {
         "action": "write",
         "path": [
            "P1000511"
         ],
         "vehicle": "{<val>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}",
         "expect": "{<P1000511>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      },
      {
         "action": "write",
         "path": [
            "P1000511"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000511>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1000511"
         ],
         "vehicle": "{<val>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}",
         "expect": "{<P1000511>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}"
      },
      {
         "action": "array",
         "path": [
            "P1000511"
         ],
         "vehicle": "[(2):<0>=<unshift>;<1>=[(2):<0>=<foo>;<1>={<1>=<man>;<went>=[(2):<0>=(2);<1>=<mow>;];};];]",
         "expect": "{<P1000511>=[(3):<0>=<foo>;<1>={<1>=<man>;<went>=[(2):<0>=(2);<1>=<mow>;];};<2>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}"
      }
   ],
   "P1000514": [
      {
         "action": "write",
         "path": [
            "P1000515"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1000515"
         ],
         "vehicle": "{<val>=(7340.1);}",
         "expect": "{<P1000515>=(7340.1);}"
      },
      {
         "action": "write",
         "path": [
            "P1000515"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000515>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1000515"
         ],
         "vehicle": "{<val>=<foo>;}",
         "expect": "{<P1000515>=<foo>;}"
      },
      {
         "action": "write",
         "path": [
            "P1000515"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000515>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1000515"
         ],
         "vehicle": "{<val>=(-84);}",
         "expect": "{<P1000515>=(-84);}"
      },
      {
         "action": "write",
         "path": [
            "P1000516"
         ],
         "vehicle": "{<val>=<ohjwfv>;}",
         "expect": "{<P1000515>=(-84);<P1000516>=<ohjwfv>;}"
      }
   ],
   "P1000521": [
      {
         "action": "write",
         "path": [
            "P1000522"
         ],
         "vehicle": "{<val>=(123);}",
         "expect": "{<P1000522>=(123);}"
      }
   ],
   "P1000524": [
      {
         "action": "write",
         "path": [
            "P1000525"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1000525>=[(0):];}"
      }
   ],
   "P1000531": [
      {
         "action": "write",
         "path": [
            "P1000532"
         ],
         "vehicle": "{<val>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}",
         "expect": "{<P1000532>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}"
      }
   ],
   "P1000537": [
      {
         "action": "write",
         "path": [
            "P1000538"
         ],
         "vehicle": "{<val>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}",
         "expect": "{<P1000538>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}"
      },
      {
         "action": "array",
         "path": [
            "P1000538"
         ],
         "vehicle": "[(2):<0>=<push>;<1>=[(5):<0>=(1);<1>=(2);<2>=(3);<3>=(4);<4>=(5);];]",
         "expect": "{<P1000538>=[(9):<0>=(2);<1>=(3);<2>=(4);<3>=(5);<4>=(1);<5>=(2);<6>=(3);<7>=(4);<8>=(5);];}"
      }
   ],
   "P1000544": [
      {
         "action": "write",
         "path": [
            "P1000545"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000545>=~;}"
      }
   ],
   "P1000550": [
      {
         "action": "write",
         "path": [
            "P1000551"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000551>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1000551"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000551>=~;}"
      }
   ],
   "P1000557": [
      {
         "action": "write",
         "path": [
            "P1000558"
         ],
         "vehicle": "{<val>=!;}",
         "expect": "{<P1000558>=!;}"
      }
   ],
   "P1000562": [
      {
         "action": "write",
         "path": [
            "P1000563"
         ],
         "vehicle": "{<val>={<a>=[(0):];<b>=[(0):];};}",
         "expect": "{<P1000563>={<a>=[(0):];<b>=[(0):];};}"
      },
      {
         "action": "write",
         "path": [
            "P1000563"
         ],
         "vehicle": "{<val>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}",
         "expect": "{<P1000563>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      }
   ],
   "P1000567": [
      {
         "action": "write",
         "path": [
            "P1000568"
         ],
         "vehicle": "{<val>=(-75.64);}",
         "expect": "{<P1000568>=(-75.64);}"
      },
      {
         "action": "write",
         "path": [
            "P1000568"
         ],
         "vehicle": "{<val>=(7340.1);}",
         "expect": "{<P1000568>=(7340.1);}"
      },
      {
         "action": "write",
         "path": [
            "P1000568"
         ],
         "vehicle": "{<val>=<ee efwdfb >;}",
         "expect": "{<P1000568>=<ee efwdfb >;}"
      }
   ],
   "P1000574": [
      {
         "action": "write",
         "path": [
            "P1000575"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1000575"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1000581": [
      {
         "action": "write",
         "path": [
            "P1000582"
         ],
         "vehicle": "{<val>=<je e>;}",
         "expect": "{<P1000582>=<je e>;}"
      }
   ],
   "P1000585": [
      {
         "action": "write",
         "path": [
            "P1000586"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1000586>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      }
   ],
   "P1000591": [
      {
         "action": "write",
         "path": [
            "P1000592"
         ],
         "vehicle": "{<val>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}",
         "expect": "{<P1000592>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}"
      }
   ],
   "P1000595": [
      {
         "action": "write",
         "path": [
            "P1000596"
         ],
         "vehicle": "{<val>=<5t5t5t>;}",
         "expect": "{<P1000596>=<5t5t5t>;}"
      }
   ],
   "P1000602": [
      {
         "action": "write",
         "path": [
            "P1000603"
         ],
         "vehicle": "{<val>=(1);}",
         "expect": "{<P1000603>=(1);}"
      },
      {
         "action": "write",
         "path": [
            "P1000603"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000603>=~;}"
      }
   ],
   "P1000604": [
      {
         "action": "write",
         "path": [
            "P1000605"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000605>=~;}"
      }
   ],
   "P1000609": [
      {
         "action": "write",
         "path": [
            "P1000610"
         ],
         "vehicle": "{<val>=(65535);}",
         "expect": "{<P1000610>=(65535);}"
      },
      {
         "action": "write",
         "path": [
            "P1000610"
         ],
         "vehicle": "{<val>={<n>={<n>={<n>={<the>=<who>;};};};};}",
         "expect": "{<P1000610>={<n>={<n>={<n>={<the>=<who>;};};};};}"
      }
   ],
   "P1000613": [
      {
         "action": "write",
         "path": [
            "P1000614"
         ],
         "vehicle": "{<val>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}",
         "expect": "{<P1000614>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}"
      },
      {
         "action": "write",
         "path": [
            "P1000614"
         ],
         "vehicle": "{<val>=<    >;}",
         "expect": "{<P1000614>=<    >;}"
      },
      {
         "action": "write",
         "path": [
            "P1000614"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1000621": [
      {
         "action": "write",
         "path": [
            "P1000622"
         ],
         "vehicle": "{<val>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}",
         "expect": "{<P1000622>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      },
      {
         "action": "write",
         "path": [
            "P1000622"
         ],
         "vehicle": "{<val>=<foo>;}",
         "expect": "{<P1000622>=<foo>;}"
      },
      {
         "action": "write",
         "path": [
            "P1000622"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000622>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1000622"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1000622>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      }
   ],
   "P1000627": [
      {
         "action": "write",
         "path": [
            "P1000628"
         ],
         "vehicle": "{<val>=(-75.64);}",
         "expect": "{<P1000628>=(-75.64);}"
      },
      {
         "action": "write",
         "path": [
            "P1000628"
         ],
         "vehicle": "{<val>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}",
         "expect": "{<P1000628>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}"
      }
   ],
   "P1000633": [
      {
         "action": "write",
         "path": [
            "P1000634"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1000634>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      },
      {
         "action": "array",
         "path": [
            "P1000634"
         ],
         "vehicle": "[(2):<0>=<unshift>;<1>=[(2):<0>=<foo>;<1>={<1>=<man>;<went>=[(2):<0>=(2);<1>=<mow>;];};];]",
         "expect": "{<P1000634>=[(7):<0>=<foo>;<1>={<1>=<man>;<went>=[(2):<0>=(2);<1>=<mow>;];};<2>=(2);<3>=!;<4>=<blah>;<5>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<6>={<a>=<asdf>;<b>=@;};];}"
      },
      {
         "action": "array",
         "path": [
            "P1000634"
         ],
         "vehicle": "[(2):<0>=<write>;<1>=[(2):<0>=(2);<1>={<brown>=<fox>;<the>=<quick>;};];]",
         "expect": "{<P1000634>=[(7):<0>=<foo>;<1>={<1>=<man>;<went>=[(2):<0>=(2);<1>=<mow>;];};<2>={<brown>=<fox>;<the>=<quick>;};<3>=!;<4>=<blah>;<5>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<6>={<a>=<asdf>;<b>=@;};];}"
      },
      {
         "action": "array",
         "path": [
            "P1000634"
         ],
         "vehicle": "[(2):<0>=<write>;<1>=[(2):<0>=(20);<1>=<abcdefg>;];]",
         "expect": "{<P1000634>=[(21):<0>=<foo>;<1>={<1>=<man>;<went>=[(2):<0>=(2);<1>=<mow>;];};<20>=<abcdefg>;<2>={<brown>=<fox>;<the>=<quick>;};<3>=!;<4>=<blah>;<5>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<6>={<a>=<asdf>;<b>=@;};];}"
      },
      {
         "action": "array",
         "path": [
            "P1000634"
         ],
         "vehicle": "[(2):<0>=<sort>;<1>=[(0):];]",
         "expect": "{<P1000634>=[(21):<0>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<1>={<1>=<man>;<went>=[(2):<0>=(2);<1>=<mow>;];};<2>={<brown>=<fox>;<the>=<quick>;};<3>={<a>=<asdf>;<b>=@;};<4>=<abcdefg>;<5>=<blah>;<6>=!;<7>=<foo>;];}"
      },
      {
         "action": "array",
         "path": [
            "P1000634"
         ],
         "vehicle": "[(2):<0>=<reverse>;<1>=[(0):];]",
         "expect": "{<P1000634>=[(21):<13>=<foo>;<14>=!;<15>=<blah>;<16>=<abcdefg>;<17>={<a>=<asdf>;<b>=@;};<18>={<brown>=<fox>;<the>=<quick>;};<19>={<1>=<man>;<went>=[(2):<0>=(2);<1>=<mow>;];};<20>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];];}"
      },
      {
         "action": "write",
         "path": [
            "P1000635"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1000634>=[(21):<13>=<foo>;<14>=!;<15>=<blah>;<16>=<abcdefg>;<17>={<a>=<asdf>;<b>=@;};<18>={<brown>=<fox>;<the>=<quick>;};<19>={<1>=<man>;<went>=[(2):<0>=(2);<1>=<mow>;];};<20>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];];<P1000635>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1000635"
         ],
         "vehicle": "[(2):<0>=<write>;<1>=[(2):<0>=(1);<1>=(123);];]",
         "expect": "{<P1000634>=[(21):<13>=<foo>;<14>=!;<15>=<blah>;<16>=<abcdefg>;<17>={<a>=<asdf>;<b>=@;};<18>={<brown>=<fox>;<the>=<quick>;};<19>={<1>=<man>;<went>=[(2):<0>=(2);<1>=<mow>;];};<20>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];];<P1000635>=[(2):<1>=(123);];}"
      }
   ],
   "P1000638": [
      {
         "action": "write",
         "path": [
            "P1000639"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000639>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1000639"
         ],
         "vehicle": "{<val>=<    >;}",
         "expect": "{<P1000639>=<    >;}"
      },
      {
         "action": "write",
         "path": [
            "P1000639"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000639>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1000639"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000639>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1000639"
         ],
         "vehicle": "{<val>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}",
         "expect": "{<P1000639>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}"
      },
      {
         "action": "write",
         "path": [
            "P1000639"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000639>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1000639"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1000639>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1000639"
         ],
         "vehicle": "[(2):<0>=<pop>;<1>=[(0):];]",
         "expect": "{<P1000639>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1000639"
         ],
         "vehicle": "[(2):<0>=<shift>;<1>=[(0):];]",
         "expect": "{<P1000639>=[(0):];}"
      }
   ],
   "P1000643": [
      {
         "action": "write",
         "path": [
            "P1000644"
         ],
         "vehicle": "{<val>={<a>=[(0):];<b>=[(0):];};}",
         "expect": "{<P1000644>={<a>=[(0):];<b>=[(0):];};}"
      },
      {
         "action": "write",
         "path": [
            "P1000644"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000644>={};}"
      }
   ],
   "P1000651": [
      {
         "action": "write",
         "path": [
            "P1000652"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1000656": [
      {
         "action": "write",
         "path": [
            "P1000657"
         ],
         "vehicle": "{<val>=!;}",
         "expect": "{<P1000657>=!;}"
      }
   ],
   "P1000662": [
      {
         "action": "write",
         "path": [
            "P1000663"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1000667": [
      {
         "action": "write",
         "path": [
            "P1000668"
         ],
         "vehicle": "{<val>=<ng9u13htgjonn kjwfvojwv woef\nefbkjnbwrv w efb>;}",
         "expect": "{<P1000668>=<ng9u13htgjonn kjwfvojwv woef\nefbkjnbwrv w efb>;}"
      },
      {
         "action": "write",
         "path": [
            "P1000668"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000668>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1000668"
         ],
         "vehicle": "{<val>=<foo>;}",
         "expect": "{<P1000668>=<foo>;}"
      }
   ],
   "P1000673": [
      {
         "action": "write",
         "path": [
            "P1000674"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000674>=~;}"
      }
   ],
   "P1000677": [
      {
         "action": "write",
         "path": [
            "P1000678"
         ],
         "vehicle": "{<val>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}",
         "expect": "{<P1000678>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}"
      }
   ],
   "P1000683": [
      {
         "action": "write",
         "path": [
            "P1000684"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000684>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1000684"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1000691": [
      {
         "action": "write",
         "path": [
            "P1000692"
         ],
         "vehicle": "{<val>={<n>={<n>={<n>={<the>=<who>;};};};};}",
         "expect": "{<P1000692>={<n>={<n>={<n>={<the>=<who>;};};};};}"
      },
      {
         "action": "write",
         "path": [
            "P1000692"
         ],
         "vehicle": "{<val>=(7340.1);}",
         "expect": "{<P1000692>=(7340.1);}"
      },
      {
         "action": "write",
         "path": [
            "P1000692"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1000692>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      }
   ],
   "P1000697": [
      {
         "action": "write",
         "path": [
            "P1000698"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1000698"
         ],
         "vehicle": "{<val>=(1);}",
         "expect": "{<P1000698>=(1);}"
      }
   ],
   "P1000706": [
      {
         "action": "write",
         "path": [
            "P1000707"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000707>={};}"
      }
   ],
   "P1000710": [
      {
         "action": "write",
         "path": [
            "P1000711"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1000711>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1000711"
         ],
         "vehicle": "[(2):<0>=<reverse>;<1>=[(0):];]",
         "expect": "{<P1000711>=[(0):];}"
      }
   ],
   "P1000714": [
      {
         "action": "write",
         "path": [
            "P1000715"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1000715>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      },
      {
         "action": "array",
         "path": [
            "P1000715"
         ],
         "vehicle": "[(2):<0>=<reverse>;<1>=[(0):];]",
         "expect": "{<P1000715>=[(5):<0>={<a>=<asdf>;<b>=@;};<1>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<2>=<blah>;<3>=!;<4>=(2);];}"
      },
      {
         "action": "write",
         "path": [
            "P1000715"
         ],
         "vehicle": "{<val>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}",
         "expect": "{<P1000715>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}"
      },
      {
         "action": "write",
         "path": [
            "P1000716"
         ],
         "vehicle": "{<val>=(65535);}",
         "expect": "{<P1000715>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];<P1000716>=(65535);}"
      },
      {
         "action": "write",
         "path": [
            "P1000716"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000715>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];<P1000716>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1000716"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{<P1000715>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}"
      }
   ],
   "P1000722": [
      {
         "action": "write",
         "path": [
            "P1000723"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1000723>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      },
      {
         "action": "array",
         "path": [
            "P1000723"
         ],
         "vehicle": "[(2):<0>=<reverse>;<1>=[(0):];]",
         "expect": "{<P1000723>=[(5):<0>=<>;<1>=<fox>;<2>=<brown>;<3>=<quick>;<4>=<the>;];}"
      }
   ],
   "P1000725": [
      {
         "action": "write",
         "path": [
            "P1000726"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000726>={};}"
      }
   ],
   "P1000727": [
      {
         "action": "write",
         "path": [
            "P1000728"
         ],
         "vehicle": "{<val>=(-75.64);}",
         "expect": "{<P1000728>=(-75.64);}"
      }
   ],
   "P1000733": [
      {
         "action": "write",
         "path": [
            "P1000734"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000734>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1000734"
         ],
         "vehicle": "{<val>=<23232323>;}",
         "expect": "{<P1000734>=<23232323>;}"
      }
   ],
   "P1000739": [
      {
         "action": "write",
         "path": [
            "P1000740"
         ],
         "vehicle": "{<val>=<ng9u13htgjonn kjwfvojwv woef\nefbkjnbwrv w efb>;}",
         "expect": "{<P1000740>=<ng9u13htgjonn kjwfvojwv woef\nefbkjnbwrv w efb>;}"
      }
   ],
   "P1000743": [
      {
         "action": "write",
         "path": [
            "P1000744"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1000749": [
      {
         "action": "write",
         "path": [
            "P1000750"
         ],
         "vehicle": "{<val>=@;}",
         "expect": "{<P1000750>=@;}"
      },
      {
         "action": "write",
         "path": [
            "P1000750"
         ],
         "vehicle": "{<val>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}",
         "expect": "{<P1000750>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}"
      },
      {
         "action": "write",
         "path": [
            "P1000750"
         ],
         "vehicle": "{<val>=(7340.1);}",
         "expect": "{<P1000750>=(7340.1);}"
      }
   ],
   "P1000754": [
      {
         "action": "write",
         "path": [
            "P1000755"
         ],
         "vehicle": "{<val>=<ee efwdfb >;}",
         "expect": "{<P1000755>=<ee efwdfb >;}"
      },
      {
         "action": "write",
         "path": [
            "P1000755"
         ],
         "vehicle": "{<val>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}",
         "expect": "{<P1000755>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      },
      {
         "action": "write",
         "path": [
            "P1000755"
         ],
         "vehicle": "{<val>=<    >;}",
         "expect": "{<P1000755>=<    >;}"
      }
   ],
   "P1000757": [
      {
         "action": "write",
         "path": [
            "P1000758"
         ],
         "vehicle": "{<val>=(1);}",
         "expect": "{<P1000758>=(1);}"
      },
      {
         "action": "write",
         "path": [
            "P1000758"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000758>=~;}"
      }
   ],
   "P1000764": [
      {
         "action": "write",
         "path": [
            "P1000765"
         ],
         "vehicle": "{<val>=(0);}",
         "expect": "{<P1000765>=(0);}"
      }
   ],
   "P1000769": [
      {
         "action": "write",
         "path": [
            "P1000770"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1000770"
         ],
         "vehicle": "{<val>=(-6385);}",
         "expect": "{<P1000770>=(-6385);}"
      },
      {
         "action": "write",
         "path": [
            "P1000770"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1000779": [
      {
         "action": "write",
         "path": [
            "P1000780"
         ],
         "vehicle": "{<val>={<n>={<n>={<n>={<the>=<who>;};};};};}",
         "expect": "{<P1000780>={<n>={<n>={<n>={<the>=<who>;};};};};}"
      },
      {
         "action": "write",
         "path": [
            "P1000780"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000780>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1000780"
         ],
         "vehicle": "{<val>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}",
         "expect": "{<P1000780>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}"
      },
      {
         "action": "write",
         "path": [
            "P1000780",
            "P1000781"
         ],
         "vehicle": "{<val>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}",
         "expect": "{<P1000780>={<P1000781>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}"
      }
   ],
   "P1000785": [
      {
         "action": "write",
         "path": [
            "P1000786"
         ],
         "vehicle": "{<val>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}",
         "expect": "{<P1000786>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}"
      }
   ],
   "P1000792": [
      {
         "action": "write",
         "path": [
            "P1000793"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1000793>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      }
   ],
   "P1000797": [
      {
         "action": "write",
         "path": [
            "P1000798"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000798>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1000798"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000798>=~;}"
      }
   ],
   "P1000804": [
      {
         "action": "write",
         "path": [
            "P1000805"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1000811": [
      {
         "action": "write",
         "path": [
            "P1000812"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000812>=~;}"
      }
   ],
   "P1000820": [
      {
         "action": "write",
         "path": [
            "P1000821"
         ],
         "vehicle": "{<val>=<5t5t5t>;}",
         "expect": "{<P1000821>=<5t5t5t>;}"
      },
      {
         "action": "write",
         "path": [
            "P1000821"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1000821>=[(0):];}"
      },
      {
         "action": "write",
         "path": [
            "P1000821"
         ],
         "vehicle": "{<val>=(65535);}",
         "expect": "{<P1000821>=(65535);}"
      }
   ],
   "P1000827": [
      {
         "action": "write",
         "path": [
            "P1000828"
         ],
         "vehicle": "{<val>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}",
         "expect": "{<P1000828>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}"
      }
   ],
   "P1000832": [
      {
         "action": "write",
         "path": [
            "P1000833"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000833>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1000833"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1000839": [
      {
         "action": "write",
         "path": [
            "P1000840"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1000840>=[(0):];}"
      }
   ],
   "P1000846": [
      {
         "action": "write",
         "path": [
            "P1000847"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1000847>=[(0):];}"
      }
   ],
   "P1000851": [
      {
         "action": "write",
         "path": [
            "P1000852"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1000852>=[(0):];}"
      },
      {
         "action": "write",
         "path": [
            "P1000852"
         ],
         "vehicle": "{<val>=< o3r83rg>;}",
         "expect": "{<P1000852>=< o3r83rg>;}"
      },
      {
         "action": "write",
         "path": [
            "P1000852"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1000861": [
      {
         "action": "write",
         "path": [
            "P1000862"
         ],
         "vehicle": "{<val>=<23232323>;}",
         "expect": "{<P1000862>=<23232323>;}"
      }
   ],
   "P1000869": [
      {
         "action": "write",
         "path": [
            "P1000870"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1000877": [
      {
         "action": "write",
         "path": [
            "P1000878"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1000878"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1000878>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      },
      {
         "action": "array",
         "path": [
            "P1000878"
         ],
         "vehicle": "[(2):<0>=<splice>;<1>=[(2):<0>=(0);<1>=(1000);];]",
         "expect": "{<P1000878>=[(0):];}"
      }
   ],
   "P1000879": [
      {
         "action": "write",
         "path": [
            "P1000880"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000880>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1000880"
         ],
         "vehicle": "{<val>=(1.04);}",
         "expect": "{<P1000880>=(1.04);}"
      }
   ],
   "P1000884": [
      {
         "action": "write",
         "path": [
            "P1000885"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1000885>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      }
   ],
   "P1000890": [
      {
         "action": "write",
         "path": [
            "P1000891"
         ],
         "vehicle": "{<val>=@;}",
         "expect": "{<P1000891>=@;}"
      }
   ],
   "P1000895": [
      {
         "action": "write",
         "path": [
            "P1000896"
         ],
         "vehicle": "{<val>=(-6385);}",
         "expect": "{<P1000896>=(-6385);}"
      }
   ],
   "P1000902": [
      {
         "action": "write",
         "path": [
            "P1000903"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1000906": [
      {
         "action": "write",
         "path": [
            "P1000907"
         ],
         "vehicle": "{<val>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}",
         "expect": "{<P1000907>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}"
      }
   ],
   "P1000915": [
      {
         "action": "write",
         "path": [
            "P1000916"
         ],
         "vehicle": "{<val>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}",
         "expect": "{<P1000916>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      }
   ],
   "P1000920": [
      {
         "action": "write",
         "path": [
            "P1000921"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000921>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1000921"
         ],
         "vehicle": "{<val>=(0);}",
         "expect": "{<P1000921>=(0);}"
      }
   ],
   "P1000929": [
      {
         "action": "write",
         "path": [
            "P1000930"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000930>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1000930"
         ],
         "vehicle": "{<val>=<ohjwfv>;}",
         "expect": "{<P1000930>=<ohjwfv>;}"
      }
   ],
   "P1000934": [
      {
         "action": "write",
         "path": [
            "P1000935"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1000935>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1000935"
         ],
         "vehicle": "[(2):<0>=<splice>;<1>=[(2):<0>=(0);<1>=(1000);];]",
         "expect": "{<P1000935>=[(0):];}"
      }
   ],
   "P1000941": [
      {
         "action": "write",
         "path": [
            "P1000942"
         ],
         "vehicle": "{<val>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}",
         "expect": "{<P1000942>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}"
      },
      {
         "action": "write",
         "path": [
            "P1000942"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1000942>=[(0):];}"
      }
   ],
   "P1000947": [
      {
         "action": "write",
         "path": [
            "P1000948"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1000954": [
      {
         "action": "write",
         "path": [
            "P1000955"
         ],
         "vehicle": "{<val>={<a>=[(0):];<b>=[(0):];};}",
         "expect": "{<P1000955>={<a>=[(0):];<b>=[(0):];};}"
      }
   ],
   "P1000961": [
      {
         "action": "write",
         "path": [
            "P1000962"
         ],
         "vehicle": "{<val>=<foo>;}",
         "expect": "{<P1000962>=<foo>;}"
      },
      {
         "action": "write",
         "path": [
            "P1000962"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1000962>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      }
   ],
   "P1000966": [
      {
         "action": "write",
         "path": [
            "P1000967"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1000971": [
      {
         "action": "write",
         "path": [
            "P1000972"
         ],
         "vehicle": "{<val>=(1.04);}",
         "expect": "{<P1000972>=(1.04);}"
      },
      {
         "action": "write",
         "path": [
            "P1000972"
         ],
         "vehicle": "{<val>=<ee efwdfb >;}",
         "expect": "{<P1000972>=<ee efwdfb >;}"
      },
      {
         "action": "write",
         "path": [
            "P1000972"
         ],
         "vehicle": "{<val>=<    >;}",
         "expect": "{<P1000972>=<    >;}"
      },
      {
         "action": "write",
         "path": [
            "P1000972"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000972>={};}"
      }
   ],
   "P1000973": [
      {
         "action": "write",
         "path": [
            "P1000974"
         ],
         "vehicle": "{<val>=(-75.64);}",
         "expect": "{<P1000974>=(-75.64);}"
      }
   ],
   "P1000978": [
      {
         "action": "write",
         "path": [
            "P1000979"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1000979>=~;}"
      }
   ],
   "P1000982": [
      {
         "action": "write",
         "path": [
            "P1000983"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1000983>={};}"
      }
   ],
   "P1000986": [
      {
         "action": "write",
         "path": [
            "P1000987"
         ],
         "vehicle": "{<val>={<n>={<n>={<n>={<the>=<who>;};};};};}",
         "expect": "{<P1000987>={<n>={<n>={<n>={<the>=<who>;};};};};}"
      }
   ],
   "P1000989": [
      {
         "action": "write",
         "path": [
            "P1000990"
         ],
         "vehicle": "{<val>=(-84);}",
         "expect": "{<P1000990>=(-84);}"
      },
      {
         "action": "write",
         "path": [
            "P1000990"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1000990"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1000990>=[(0):];}"
      }
   ],
   "P1000997": [
      {
         "action": "write",
         "path": [
            "P1000998"
         ],
         "vehicle": "{<val>={<n>={<n>={<n>={<the>=<who>;};};};};}",
         "expect": "{<P1000998>={<n>={<n>={<n>={<the>=<who>;};};};};}"
      }
   ],
   "P1001001": [
      {
         "action": "write",
         "path": [
            "P1001002"
         ],
         "vehicle": "{<val>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}",
         "expect": "{<P1001002>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}"
      }
   ],
   "P1001005": [
      {
         "action": "write",
         "path": [
            "P1001006"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001006>=~;}"
      }
   ],
   "P1001010": [
      {
         "action": "write",
         "path": [
            "P1001011"
         ],
         "vehicle": "{<val>={<a>=[(0):];<b>=[(0):];};}",
         "expect": "{<P1001011>={<a>=[(0):];<b>=[(0):];};}"
      }
   ],
   "P1001017": [
      {
         "action": "write",
         "path": [
            "P1001018"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001018>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1001018"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001018>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1001018"
         ],
         "vehicle": "[(2):<0>=<push>;<1>=[(2):<0>=<foo>;<1>={<1>=<man>;<went>=[(2):<0>=(2);<1>=<mow>;];};];]",
         "expect": "{<P1001018>=[(2):<0>=<foo>;<1>={<1>=<man>;<went>=[(2):<0>=(2);<1>=<mow>;];};];}"
      }
   ],
   "P1001024": [
      {
         "action": "write",
         "path": [
            "P1001025"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001025>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1001025"
         ],
         "vehicle": "{<val>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}",
         "expect": "{<P1001025>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}"
      }
   ],
   "P1001029": [
      {
         "action": "write",
         "path": [
            "P1001030"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001030>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1001030"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001030>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1001030"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001030>={};}"
      }
   ],
   "P1001035": [
      {
         "action": "write",
         "path": [
            "P1001036"
         ],
         "vehicle": "{<val>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}",
         "expect": "{<P1001036>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      }
   ],
   "P1001042": [
      {
         "action": "write",
         "path": [
            "P1001043"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001043>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1001043"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1001043>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      }
   ],
   "P1001047": [
      {
         "action": "write",
         "path": [
            "P1001048"
         ],
         "vehicle": "{<val>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}",
         "expect": "{<P1001048>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}"
      }
   ],
   "P1001049": [
      {
         "action": "write",
         "path": [
            "P1001050"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001050>=[(0):];}"
      },
      {
         "action": "write",
         "path": [
            "P1001050"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1001055": [
      {
         "action": "write",
         "path": [
            "P1001056"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001056>=[(0):];}"
      }
   ],
   "P1001062": [
      {
         "action": "write",
         "path": [
            "P1001063"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001063>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1001063"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001063>=[(0):];}"
      }
   ],
   "P1001070": [
      {
         "action": "write",
         "path": [
            "P1001071"
         ],
         "vehicle": "{<val>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}",
         "expect": "{<P1001071>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      },
      {
         "action": "write",
         "path": [
            "P1001071"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001071>=[(0):];}"
      }
   ],
   "P1001076": [
      {
         "action": "write",
         "path": [
            "P1001077"
         ],
         "vehicle": "{<val>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}",
         "expect": "{<P1001077>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}"
      }
   ],
   "P1001081": [
      {
         "action": "write",
         "path": [
            "P1001082"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1001082>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      }
   ],
   "P1001090": [
      {
         "action": "write",
         "path": [
            "P1001091"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1001091"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001091>=~;}"
      }
   ],
   "P1001098": [
      {
         "action": "write",
         "path": [
            "P1001099"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1001099"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1001099>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      }
   ],
   "P1001102": [
      {
         "action": "write",
         "path": [
            "P1001103"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1001108": [
      {
         "action": "write",
         "path": [
            "P1001109"
         ],
         "vehicle": "{<val>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}",
         "expect": "{<P1001109>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}"
      },
      {
         "action": "write",
         "path": [
            "P1001109"
         ],
         "vehicle": "{<val>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}",
         "expect": "{<P1001109>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}"
      },
      {
         "action": "write",
         "path": [
            "P1001109"
         ],
         "vehicle": "{<val>=(-75.64);}",
         "expect": "{<P1001109>=(-75.64);}"
      }
   ],
   "P1001114": [
      {
         "action": "write",
         "path": [
            "P1001115"
         ],
         "vehicle": "{<val>=(1);}",
         "expect": "{<P1001115>=(1);}"
      },
      {
         "action": "write",
         "path": [
            "P1001115"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001115>=~;}"
      }
   ],
   "P1001118": [
      {
         "action": "write",
         "path": [
            "P1001119"
         ],
         "vehicle": "{<val>=(43);}",
         "expect": "{<P1001119>=(43);}"
      }
   ],
   "P1001122": [
      {
         "action": "write",
         "path": [
            "P1001123"
         ],
         "vehicle": "{<val>=<ohjwfv>;}",
         "expect": "{<P1001123>=<ohjwfv>;}"
      },
      {
         "action": "write",
         "path": [
            "P1001123"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001123>=[(0):];}"
      }
   ],
   "P1001126": [
      {
         "action": "write",
         "path": [
            "P1001127"
         ],
         "vehicle": "{<val>=!;}",
         "expect": "{<P1001127>=!;}"
      }
   ],
   "P1001132": [
      {
         "action": "write",
         "path": [
            "P1001133"
         ],
         "vehicle": "{<val>=(0);}",
         "expect": "{<P1001133>=(0);}"
      },
      {
         "action": "write",
         "path": [
            "P1001133"
         ],
         "vehicle": "{<val>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}",
         "expect": "{<P1001133>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}"
      }
   ],
   "P1001136": [
      {
         "action": "write",
         "path": [
            "P1001137"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001137>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1001137"
         ],
         "vehicle": "{<val>=(-84);}",
         "expect": "{<P1001137>=(-84);}"
      },
      {
         "action": "write",
         "path": [
            "P1001137"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1001137>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      }
   ],
   "P1001142": [
      {
         "action": "write",
         "path": [
            "P1001143"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1001144": [
      {
         "action": "write",
         "path": [
            "P1001145"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1001145>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      },
      {
         "action": "array",
         "path": [
            "P1001145"
         ],
         "vehicle": "[(2):<0>=<reverse>;<1>=[(0):];]",
         "expect": "{<P1001145>=[(5):<0>={<a>=<asdf>;<b>=@;};<1>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<2>=<blah>;<3>=!;<4>=(2);];}"
      }
   ],
   "P1001151": [
      {
         "action": "write",
         "path": [
            "P1001152"
         ],
         "vehicle": "{<val>=!;}",
         "expect": "{<P1001152>=!;}"
      },
      {
         "action": "write",
         "path": [
            "P1001152"
         ],
         "vehicle": "{<val>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}",
         "expect": "{<P1001152>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}"
      },
      {
         "action": "array",
         "path": [
            "P1001152"
         ],
         "vehicle": "[(2):<0>=<push>;<1>=[(3):<0>=(1);<1>=<bar>;<2>=[(0):];];]",
         "expect": "{<P1001152>=[(4):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];<1>=(1);<2>=<bar>;<3>=[(0):];];}"
      },
      {
         "action": "array",
         "path": [
            "P1001152"
         ],
         "vehicle": "[(2):<0>=<push>;<1>=[(2):<0>=<foo>;<1>={<1>=<man>;<went>=[(2):<0>=(2);<1>=<mow>;];};];]",
         "expect": "{<P1001152>=[(6):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];<1>=(1);<2>=<bar>;<3>=[(0):];<4>=<foo>;<5>={<1>=<man>;<went>=[(2):<0>=(2);<1>=<mow>;];};];}"
      }
   ],
   "P1001154": [
      {
         "action": "write",
         "path": [
            "P1001155"
         ],
         "vehicle": "{<val>={<a>=[(0):];<b>=[(0):];};}",
         "expect": "{<P1001155>={<a>=[(0):];<b>=[(0):];};}"
      }
   ],
   "P1001160": [
      {
         "action": "write",
         "path": [
            "P1001161"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001161>=[(0):];}"
      }
   ],
   "P1001167": [
      {
         "action": "write",
         "path": [
            "P1001168"
         ],
         "vehicle": "{<val>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}",
         "expect": "{<P1001168>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}"
      },
      {
         "action": "array",
         "path": [
            "P1001168"
         ],
         "vehicle": "[(2):<0>=<reverse>;<1>=[(0):];]",
         "expect": "{<P1001168>=[(4):<0>=(5);<1>=(4);<2>=(3);<3>=(2);];}"
      }
   ],
   "P1001175": [
      {
         "action": "write",
         "path": [
            "P1001176"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001176>=~;}"
      }
   ],
   "P1001183": [
      {
         "action": "write",
         "path": [
            "P1001184"
         ],
         "vehicle": "{<val>=(1);}",
         "expect": "{<P1001184>=(1);}"
      }
   ],
   "P1001188": [
      {
         "action": "write",
         "path": [
            "P1001189"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1001193": [
      {
         "action": "write",
         "path": [
            "P1001194"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1001194>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      }
   ],
   "P1001200": [
      {
         "action": "write",
         "path": [
            "P1001201"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001201>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1001201"
         ],
         "vehicle": "[(2):<0>=<push>;<1>=[(3):<0>=(1);<1>=<bar>;<2>=[(0):];];]",
         "expect": "{<P1001201>=[(3):<0>=(1);<1>=<bar>;<2>=[(0):];];}"
      }
   ],
   "P1001204": [
      {
         "action": "write",
         "path": [
            "P1001205"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001205>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1001205"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1001205>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      }
   ],
   "P1001208": [
      {
         "action": "write",
         "path": [
            "P1001209"
         ],
         "vehicle": "{<val>={<n>={<n>={<n>={<the>=<who>;};};};};}",
         "expect": "{<P1001209>={<n>={<n>={<n>={<the>=<who>;};};};};}"
      }
   ],
   "P1001216": [
      {
         "action": "write",
         "path": [
            "P1001217"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001217>=~;}"
      }
   ],
   "P1001220": [
      {
         "action": "write",
         "path": [
            "P1001221"
         ],
         "vehicle": "{<val>={<n>={<n>={<n>={<the>=<who>;};};};};}",
         "expect": "{<P1001221>={<n>={<n>={<n>={<the>=<who>;};};};};}"
      }
   ],
   "P1001226": [
      {
         "action": "write",
         "path": [
            "P1001227"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001227>={};}"
      }
   ],
   "P1001232": [
      {
         "action": "write",
         "path": [
            "P1001233"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1001233"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001233>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1001233"
         ],
         "vehicle": "[(2):<0>=<push>;<1>=[(5):<0>=(1);<1>=(2);<2>=(3);<3>=(4);<4>=(5);];]",
         "expect": "{<P1001233>=[(5):<0>=(1);<1>=(2);<2>=(3);<3>=(4);<4>=(5);];}"
      }
   ],
   "P1001237": [
      {
         "action": "write",
         "path": [
            "P1001238"
         ],
         "vehicle": "{<val>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}",
         "expect": "{<P1001238>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}"
      },
      {
         "action": "array",
         "path": [
            "P1001238"
         ],
         "vehicle": "[(2):<0>=<pop>;<1>=[(0):];]",
         "expect": "{<P1001238>=[(0):];}"
      }
   ],
   "P1001242": [
      {
         "action": "write",
         "path": [
            "P1001243"
         ],
         "vehicle": "{<val>=(0);}",
         "expect": "{<P1001243>=(0);}"
      }
   ],
   "P1001246": [
      {
         "action": "write",
         "path": [
            "P1001247"
         ],
         "vehicle": "{<val>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}",
         "expect": "{<P1001247>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}"
      }
   ],
   "P1001252": [
      {
         "action": "write",
         "path": [
            "P1001253"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001253>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1001253"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001253>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1001253"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001253>=[(0):];}"
      }
   ],
   "P1001260": [
      {
         "action": "write",
         "path": [
            "P1001261"
         ],
         "vehicle": "{<val>=(0);}",
         "expect": "{<P1001261>=(0);}"
      },
      {
         "action": "write",
         "path": [
            "P1001261"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1001261"
         ],
         "vehicle": "{<val>=(1.04);}",
         "expect": "{<P1001261>=(1.04);}"
      },
      {
         "action": "write",
         "path": [
            "P1001261"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1001261>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      }
   ],
   "P1001266": [
      {
         "action": "write",
         "path": [
            "P1001267"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001267>=[(0):];}"
      }
   ],
   "P1001271": [
      {
         "action": "write",
         "path": [
            "P1001272"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001272>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1001272"
         ],
         "vehicle": "{<val>=(-84);}",
         "expect": "{<P1001272>=(-84);}"
      }
   ],
   "P1001277": [
      {
         "action": "write",
         "path": [
            "P1001278"
         ],
         "vehicle": "{<val>=!;}",
         "expect": "{<P1001278>=!;}"
      },
      {
         "action": "write",
         "path": [
            "P1001278"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001278>=[(0):];}"
      }
   ],
   "P1001283": [
      {
         "action": "write",
         "path": [
            "P1001284"
         ],
         "vehicle": "{<val>=(4);}",
         "expect": "{<P1001284>=(4);}"
      }
   ],
   "P1001295": [
      {
         "action": "write",
         "path": [
            "P1001296"
         ],
         "vehicle": "{<val>=(1.04);}",
         "expect": "{<P1001296>=(1.04);}"
      },
      {
         "action": "write",
         "path": [
            "P1001296"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001296>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1001296"
         ],
         "vehicle": "{<val>=<    >;}",
         "expect": "{<P1001296>=<    >;}"
      }
   ],
   "P1001302": [
      {
         "action": "write",
         "path": [
            "P1001303"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1001303>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      },
      {
         "action": "write",
         "path": [
            "P1001303"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001303>=~;}"
      }
   ],
   "P1001306": [
      {
         "action": "write",
         "path": [
            "P1001307"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001307>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1001307"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001307>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1001307"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001307>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1001307"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001307>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1001307"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001307>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1001307"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001307>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1001308"
         ],
         "vehicle": "{<val>=(844758);}",
         "expect": "{<P1001307>={};<P1001308>=(844758);}"
      },
      {
         "action": "write",
         "path": [
            "P1001308"
         ],
         "vehicle": "{<val>=(-2);}",
         "expect": "{<P1001307>={};<P1001308>=(-2);}"
      },
      {
         "action": "write",
         "path": [
            "P1001308"
         ],
         "vehicle": "{<val>=(0);}",
         "expect": "{<P1001307>={};<P1001308>=(0);}"
      },
      {
         "action": "write",
         "path": [
            "P1001308"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001307>={};<P1001308>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1001308"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{<P1001307>={};}"
      }
   ],
   "P1001313": [
      {
         "action": "write",
         "path": [
            "P1001314"
         ],
         "vehicle": "{<val>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}",
         "expect": "{<P1001314>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}"
      }
   ],
   "P1001317": [
      {
         "action": "write",
         "path": [
            "P1001318"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001318>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1001318"
         ],
         "vehicle": "{<val>=(4);}",
         "expect": "{<P1001318>=(4);}"
      },
      {
         "action": "write",
         "path": [
            "P1001318"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001318>=~;}"
      }
   ],
   "P1001321": [
      {
         "action": "write",
         "path": [
            "P1001322"
         ],
         "vehicle": "{<val>=(-75.64);}",
         "expect": "{<P1001322>=(-75.64);}"
      },
      {
         "action": "write",
         "path": [
            "P1001322"
         ],
         "vehicle": "{<val>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}",
         "expect": "{<P1001322>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}"
      },
      {
         "action": "array",
         "path": [
            "P1001322"
         ],
         "vehicle": "[(2):<0>=<splice>;<1>=[(3):<0>=(10);<1>=(4);<2>=<foo>;];]",
         "expect": "{<P1001322>=[(5):<0>=(2);<1>=(3);<2>=(4);<3>=(5);<4>=<foo>;];}"
      },
      {
         "action": "array",
         "path": [
            "P1001322"
         ],
         "vehicle": "[(2):<0>=<splice>;<1>=[(2):<0>=(0);<1>=(1000);];]",
         "expect": "{<P1001322>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1001322"
         ],
         "vehicle": "[(2):<0>=<unshift>;<1>=[(3):<0>=(1);<1>=<bar>;<2>=[(0):];];]",
         "expect": "{<P1001322>=[(3):<0>=(1);<1>=<bar>;<2>=[(0):];];}"
      },
      {
         "action": "array",
         "path": [
            "P1001322"
         ],
         "vehicle": "[(2):<0>=<splice>;<1>=[(5):<0>=(1000);<1>=(0);<2>=(10);<3>=(20);<4>=(30);];]",
         "expect": "{<P1001322>=[(6):<0>=(1);<1>=<bar>;<2>=[(0):];<3>=(10);<4>=(20);<5>=(30);];}"
      },
      {
         "action": "write",
         "path": [
            "P1001323"
         ],
         "vehicle": "{<val>=(7340.1);}",
         "expect": "{<P1001322>=[(6):<0>=(1);<1>=<bar>;<2>=[(0):];<3>=(10);<4>=(20);<5>=(30);];<P1001323>=(7340.1);}"
      }
   ],
   "P1001327": [
      {
         "action": "write",
         "path": [
            "P1001328"
         ],
         "vehicle": "{<val>=<foo>;}",
         "expect": "{<P1001328>=<foo>;}"
      }
   ],
   "P1001331": [
      {
         "action": "write",
         "path": [
            "P1001332"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001332>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1001332"
         ],
         "vehicle": "{<val>={<a>=[(0):];<b>=[(0):];};}",
         "expect": "{<P1001332>={<a>=[(0):];<b>=[(0):];};}"
      },
      {
         "action": "write",
         "path": [
            "P1001332"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001332>=[(0):];}"
      }
   ],
   "P1001343": [
      {
         "action": "write",
         "path": [
            "P1001344"
         ],
         "vehicle": "{<val>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}",
         "expect": "{<P1001344>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}"
      }
   ],
   "P1001350": [
      {
         "action": "write",
         "path": [
            "P1001351"
         ],
         "vehicle": "{<val>=< o3r83rg>;}",
         "expect": "{<P1001351>=< o3r83rg>;}"
      },
      {
         "action": "write",
         "path": [
            "P1001351"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1001351"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001351>=~;}"
      }
   ],
   "P1001355": [
      {
         "action": "write",
         "path": [
            "P1001356"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1001356>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      },
      {
         "action": "array",
         "path": [
            "P1001356"
         ],
         "vehicle": "[(2):<0>=<unshift>;<1>=[(5):<0>=(1);<1>=(2);<2>=(3);<3>=(4);<4>=(5);];]",
         "expect": "{<P1001356>=[(10):<0>=(1);<1>=(2);<2>=(3);<3>=(4);<4>=(5);<5>=(2);<6>=!;<7>=<blah>;<8>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<9>={<a>=<asdf>;<b>=@;};];}"
      },
      {
         "action": "array",
         "path": [
            "P1001356"
         ],
         "vehicle": "[(2):<0>=<reverse>;<1>=[(0):];]",
         "expect": "{<P1001356>=[(10):<0>={<a>=<asdf>;<b>=@;};<1>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<2>=<blah>;<3>=!;<4>=(2);<5>=(5);<6>=(4);<7>=(3);<8>=(2);<9>=(1);];}"
      }
   ],
   "P1001357": [
      {
         "action": "write",
         "path": [
            "P1001358"
         ],
         "vehicle": "{<val>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}",
         "expect": "{<P1001358>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}"
      },
      {
         "action": "write",
         "path": [
            "P1001358"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001358>=[(0):];}"
      }
   ],
   "P1001364": [
      {
         "action": "write",
         "path": [
            "P1001365"
         ],
         "vehicle": "{<val>=(-6385);}",
         "expect": "{<P1001365>=(-6385);}"
      }
   ],
   "P1001370": [
      {
         "action": "write",
         "path": [
            "P1001371"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1001371"
         ],
         "vehicle": "{<val>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}",
         "expect": "{<P1001371>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      }
   ],
   "P1001381": [
      {
         "action": "write",
         "path": [
            "P1001382"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001382>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1001382"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1001388": [
      {
         "action": "write",
         "path": [
            "P1001389"
         ],
         "vehicle": "{<val>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}",
         "expect": "{<P1001389>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      },
      {
         "action": "write",
         "path": [
            "P1001389"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001389>=[(0):];}"
      }
   ],
   "P1001395": [
      {
         "action": "write",
         "path": [
            "P1001396"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001396>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1001396"
         ],
         "vehicle": "{<val>=<foo>;}",
         "expect": "{<P1001396>=<foo>;}"
      },
      {
         "action": "write",
         "path": [
            "P1001396"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1001399": [
      {
         "action": "write",
         "path": [
            "P1001400"
         ],
         "vehicle": "{<val>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}",
         "expect": "{<P1001400>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      }
   ],
   "P1001404": [
      {
         "action": "write",
         "path": [
            "P1001405"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001405>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1001405"
         ],
         "vehicle": "{<val>={<n>={<n>={<n>={<the>=<who>;};};};};}",
         "expect": "{<P1001405>={<n>={<n>={<n>={<the>=<who>;};};};};}"
      },
      {
         "action": "write",
         "path": [
            "P1001405"
         ],
         "vehicle": "{<val>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}",
         "expect": "{<P1001405>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}"
      }
   ],
   "P1001410": [
      {
         "action": "write",
         "path": [
            "P1001411"
         ],
         "vehicle": "{<val>=(844758);}",
         "expect": "{<P1001411>=(844758);}"
      }
   ],
   "P1001416": [
      {
         "action": "write",
         "path": [
            "P1001417"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1001421": [
      {
         "action": "write",
         "path": [
            "P1001422"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001422>=[(0):];}"
      }
   ],
   "P1001428": [
      {
         "action": "write",
         "path": [
            "P1001429"
         ],
         "vehicle": "{<val>={<n>={<n>={<n>={<the>=<who>;};};};};}",
         "expect": "{<P1001429>={<n>={<n>={<n>={<the>=<who>;};};};};}"
      }
   ],
   "P1001431": [
      {
         "action": "write",
         "path": [
            "P1001432"
         ],
         "vehicle": "{<val>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}",
         "expect": "{<P1001432>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}"
      },
      {
         "action": "write",
         "path": [
            "P1001432"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001432>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1001432"
         ],
         "vehicle": "[(2):<0>=<splice>;<1>=[(2):<0>=(0);<1>=(1000);];]",
         "expect": "{<P1001432>=[(0):];}"
      },
      {
         "action": "write",
         "path": [
            "P1001433"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001432>=[(0):];<P1001433>=~;}"
      }
   ],
   "P1001437": [
      {
         "action": "write",
         "path": [
            "P1001438"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001438>=~;}"
      }
   ],
   "P1001442": [
      {
         "action": "write",
         "path": [
            "P1001443"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1001443>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      }
   ],
   "P1001446": [
      {
         "action": "write",
         "path": [
            "P1001447"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1001447"
         ],
         "vehicle": "{<val>=<5t5t5t>;}",
         "expect": "{<P1001447>=<5t5t5t>;}"
      },
      {
         "action": "write",
         "path": [
            "P1001447"
         ],
         "vehicle": "{<val>=<ng9u13htgjonn kjwfvojwv woef\nefbkjnbwrv w efb>;}",
         "expect": "{<P1001447>=<ng9u13htgjonn kjwfvojwv woef\nefbkjnbwrv w efb>;}"
      },
      {
         "action": "write",
         "path": [
            "P1001448"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001447>=<ng9u13htgjonn kjwfvojwv woef\nefbkjnbwrv w efb>;<P1001448>=[(0):];}"
      }
   ],
   "P1001455": [
      {
         "action": "write",
         "path": [
            "P1001456"
         ],
         "vehicle": "{<val>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}",
         "expect": "{<P1001456>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}"
      }
   ],
   "P1001462": [
      {
         "action": "write",
         "path": [
            "P1001463"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1001463>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      }
   ],
   "P1001468": [
      {
         "action": "write",
         "path": [
            "P1001469"
         ],
         "vehicle": "{<val>=(-84);}",
         "expect": "{<P1001469>=(-84);}"
      },
      {
         "action": "write",
         "path": [
            "P1001469"
         ],
         "vehicle": "{<val>={<a>=[(0):];<b>=[(0):];};}",
         "expect": "{<P1001469>={<a>=[(0):];<b>=[(0):];};}"
      }
   ],
   "P1001476": [
      {
         "action": "write",
         "path": [
            "P1001477"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1001477>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      },
      {
         "action": "array",
         "path": [
            "P1001477"
         ],
         "vehicle": "[(2):<0>=<unshift>;<1>=[(2):<0>=<foo>;<1>={<1>=<man>;<went>=[(2):<0>=(2);<1>=<mow>;];};];]",
         "expect": "{<P1001477>=[(7):<0>=<foo>;<1>={<1>=<man>;<went>=[(2):<0>=(2);<1>=<mow>;];};<2>=<the>;<3>=<quick>;<4>=<brown>;<5>=<fox>;<6>=<>;];}"
      }
   ],
   "P1001483": [
      {
         "action": "write",
         "path": [
            "P1001484"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001484>=~;}"
      }
   ],
   "P1001486": [
      {
         "action": "write",
         "path": [
            "P1001487"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001487>=[(0):];}"
      }
   ],
   "P1001491": [
      {
         "action": "write",
         "path": [
            "P1001492"
         ],
         "vehicle": "{<val>=< o3r83rg>;}",
         "expect": "{<P1001492>=< o3r83rg>;}"
      },
      {
         "action": "write",
         "path": [
            "P1001492"
         ],
         "vehicle": "{<val>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}",
         "expect": "{<P1001492>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}"
      },
      {
         "action": "write",
         "path": [
            "P1001492"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1001492>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      },
      {
         "action": "write",
         "path": [
            "P1001493"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{<P1001492>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      },
      {
         "action": "write",
         "path": [
            "P1001493"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001492>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];<P1001493>=~;}"
      }
   ],
   "P1001497": [
      {
         "action": "write",
         "path": [
            "P1001498"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001498>=[(0):];}"
      },
      {
         "action": "write",
         "path": [
            "P1001498"
         ],
         "vehicle": "{<val>=(0);}",
         "expect": "{<P1001498>=(0);}"
      },
      {
         "action": "write",
         "path": [
            "P1001498"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001498>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1001498"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001498>=[(0):];}"
      }
   ],
   "P1001504": [
      {
         "action": "write",
         "path": [
            "P1001505"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001505>=[(0):];}"
      }
   ],
   "P1001512": [
      {
         "action": "write",
         "path": [
            "P1001513"
         ],
         "vehicle": "{<val>=<ohjwfv>;}",
         "expect": "{<P1001513>=<ohjwfv>;}"
      },
      {
         "action": "write",
         "path": [
            "P1001513"
         ],
         "vehicle": "{<val>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}",
         "expect": "{<P1001513>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}"
      }
   ],
   "P1001519": [
      {
         "action": "write",
         "path": [
            "P1001520"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001520>=~;}"
      }
   ],
   "P1001523": [
      {
         "action": "write",
         "path": [
            "P1001524"
         ],
         "vehicle": "{<val>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}",
         "expect": "{<P1001524>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      }
   ],
   "P1001529": [
      {
         "action": "write",
         "path": [
            "P1001530"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001530>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1001530"
         ],
         "vehicle": "[(2):<0>=<reverse>;<1>=[(0):];]",
         "expect": "{<P1001530>=[(0):];}"
      }
   ],
   "P1001533": [
      {
         "action": "write",
         "path": [
            "P1001534"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001534>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1001534"
         ],
         "vehicle": "{<val>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}",
         "expect": "{<P1001534>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      },
      {
         "action": "write",
         "path": [
            "P1001534"
         ],
         "vehicle": "{<val>=(844758);}",
         "expect": "{<P1001534>=(844758);}"
      },
      {
         "action": "write",
         "path": [
            "P1001535"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{<P1001534>=(844758);}"
      },
      {
         "action": "write",
         "path": [
            "P1001535"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001534>=(844758);<P1001535>=[(0):];}"
      }
   ],
   "P1001539": [
      {
         "action": "write",
         "path": [
            "P1001540"
         ],
         "vehicle": "{<val>=(-6385);}",
         "expect": "{<P1001540>=(-6385);}"
      },
      {
         "action": "write",
         "path": [
            "P1001540"
         ],
         "vehicle": "{<val>=(65535);}",
         "expect": "{<P1001540>=(65535);}"
      },
      {
         "action": "write",
         "path": [
            "P1001540"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1001540>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      }
   ],
   "P1001545": [
      {
         "action": "write",
         "path": [
            "P1001546"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001546>={};}"
      }
   ],
   "P1001550": [
      {
         "action": "write",
         "path": [
            "P1001551"
         ],
         "vehicle": "{<val>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}",
         "expect": "{<P1001551>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}"
      }
   ],
   "P1001556": [
      {
         "action": "write",
         "path": [
            "P1001557"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001557>={};}"
      }
   ],
   "P1001565": [
      {
         "action": "write",
         "path": [
            "P1001566"
         ],
         "vehicle": "{<val>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}",
         "expect": "{<P1001566>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}"
      },
      {
         "action": "write",
         "path": [
            "P1001566"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1001566>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      },
      {
         "action": "array",
         "path": [
            "P1001566"
         ],
         "vehicle": "[(2):<0>=<unshift>;<1>=[(0):];]",
         "expect": "{<P1001566>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      },
      {
         "action": "write",
         "path": [
            "P1001567"
         ],
         "vehicle": "{<val>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}",
         "expect": "{<P1001566>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];<P1001567>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}"
      }
   ],
   "P1001570": [
      {
         "action": "write",
         "path": [
            "P1001571"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001571>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1001571"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1001571"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001571>=[(0):];}"
      }
   ],
   "P1001575": [
      {
         "action": "write",
         "path": [
            "P1001576"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1001579": [
      {
         "action": "write",
         "path": [
            "P1001580"
         ],
         "vehicle": "{<val>=<ohjwfv>;}",
         "expect": "{<P1001580>=<ohjwfv>;}"
      },
      {
         "action": "write",
         "path": [
            "P1001580"
         ],
         "vehicle": "{<val>=(0);}",
         "expect": "{<P1001580>=(0);}"
      }
   ],
   "P1001582": [
      {
         "action": "write",
         "path": [
            "P1001583"
         ],
         "vehicle": "{<val>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}",
         "expect": "{<P1001583>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}"
      }
   ],
   "P1001587": [
      {
         "action": "write",
         "path": [
            "P1001588"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1001588>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      },
      {
         "action": "array",
         "path": [
            "P1001588"
         ],
         "vehicle": "[(2):<0>=<push>;<1>=[(2):<0>=<foo>;<1>={<1>=<man>;<went>=[(2):<0>=(2);<1>=<mow>;];};];]",
         "expect": "{<P1001588>=[(7):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};<5>=<foo>;<6>={<1>=<man>;<went>=[(2):<0>=(2);<1>=<mow>;];};];}"
      }
   ],
   "P1001590": [
      {
         "action": "write",
         "path": [
            "P1001591"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1001596": [
      {
         "action": "write",
         "path": [
            "P1001597"
         ],
         "vehicle": "{<val>={<n>={<n>={<n>={<the>=<who>;};};};};}",
         "expect": "{<P1001597>={<n>={<n>={<n>={<the>=<who>;};};};};}"
      },
      {
         "action": "write",
         "path": [
            "P1001597"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001597>={};}"
      }
   ],
   "P1001602": [
      {
         "action": "write",
         "path": [
            "P1001603"
         ],
         "vehicle": "{<val>=<ng9u13htgjonn kjwfvojwv woef\nefbkjnbwrv w efb>;}",
         "expect": "{<P1001603>=<ng9u13htgjonn kjwfvojwv woef\nefbkjnbwrv w efb>;}"
      },
      {
         "action": "write",
         "path": [
            "P1001603"
         ],
         "vehicle": "{<val>=(844758);}",
         "expect": "{<P1001603>=(844758);}"
      },
      {
         "action": "write",
         "path": [
            "P1001603"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001603>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1001603"
         ],
         "vehicle": "{<val>=<foo>;}",
         "expect": "{<P1001603>=<foo>;}"
      }
   ],
   "P1001612": [
      {
         "action": "write",
         "path": [
            "P1001613"
         ],
         "vehicle": "{<val>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}",
         "expect": "{<P1001613>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}"
      }
   ],
   "P1001616": [
      {
         "action": "write",
         "path": [
            "P1001617"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001617>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1001617"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001617>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1001617"
         ],
         "vehicle": "{<val>={<n>={<n>={<n>={<the>=<who>;};};};};}",
         "expect": "{<P1001617>={<n>={<n>={<n>={<the>=<who>;};};};};}"
      }
   ],
   "P1001623": [
      {
         "action": "write",
         "path": [
            "P1001624"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001624>={};}"
      }
   ],
   "P1001628": [
      {
         "action": "write",
         "path": [
            "P1001629"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001629>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1001629"
         ],
         "vehicle": "{<val>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}",
         "expect": "{<P1001629>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      }
   ],
   "P1001635": [
      {
         "action": "write",
         "path": [
            "P1001636"
         ],
         "vehicle": "{<val>=<5t5t5t>;}",
         "expect": "{<P1001636>=<5t5t5t>;}"
      },
      {
         "action": "write",
         "path": [
            "P1001636"
         ],
         "vehicle": "{<val>=(-84);}",
         "expect": "{<P1001636>=(-84);}"
      }
   ],
   "P1001643": [
      {
         "action": "write",
         "path": [
            "P1001644"
         ],
         "vehicle": "{<val>=<ng9u13htgjonn kjwfvojwv woef\nefbkjnbwrv w efb>;}",
         "expect": "{<P1001644>=<ng9u13htgjonn kjwfvojwv woef\nefbkjnbwrv w efb>;}"
      }
   ],
   "P1001649": [
      {
         "action": "write",
         "path": [
            "P1001650"
         ],
         "vehicle": "{<val>=(844758);}",
         "expect": "{<P1001650>=(844758);}"
      }
   ],
   "P1001654": [
      {
         "action": "write",
         "path": [
            "P1001655"
         ],
         "vehicle": "{<val>=(65535);}",
         "expect": "{<P1001655>=(65535);}"
      },
      {
         "action": "write",
         "path": [
            "P1001655"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1001655>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      }
   ],
   "P1001661": [
      {
         "action": "write",
         "path": [
            "P1001662"
         ],
         "vehicle": "{<val>=@;}",
         "expect": "{<P1001662>=@;}"
      },
      {
         "action": "write",
         "path": [
            "P1001662"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001662>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1001662"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001662>=[(0):];}"
      }
   ],
   "P1001670": [
      {
         "action": "write",
         "path": [
            "P1001671"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1001671>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      }
   ],
   "P1001678": [
      {
         "action": "write",
         "path": [
            "P1001679"
         ],
         "vehicle": "{<val>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}",
         "expect": "{<P1001679>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      }
   ],
   "P1001683": [
      {
         "action": "write",
         "path": [
            "P1001684"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001684>=[(0):];}"
      }
   ],
   "P1001690": [
      {
         "action": "write",
         "path": [
            "P1001691"
         ],
         "vehicle": "{<val>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}",
         "expect": "{<P1001691>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}"
      },
      {
         "action": "write",
         "path": [
            "P1001691"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001691>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1001691"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001691>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1001691",
            "P1001692"
         ],
         "vehicle": "{<val>=!;}",
         "expect": "{<P1001691>={<P1001692>=!;};}"
      },
      {
         "action": "write",
         "path": [
            "P1001691",
            "P1001692"
         ],
         "vehicle": "{<val>={<a>=[(0):];<b>=[(0):];};}",
         "expect": "{<P1001691>={<P1001692>={<a>=[(0):];<b>=[(0):];};};}"
      }
   ],
   "P1001695": [
      {
         "action": "write",
         "path": [
            "P1001696"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001696>={};}"
      }
   ],
   "P1001701": [
      {
         "action": "write",
         "path": [
            "P1001702"
         ],
         "vehicle": "{<val>=(0);}",
         "expect": "{<P1001702>=(0);}"
      }
   ],
   "P1001705": [
      {
         "action": "write",
         "path": [
            "P1001706"
         ],
         "vehicle": "{<val>=(-84);}",
         "expect": "{<P1001706>=(-84);}"
      }
   ],
   "P1001710": [
      {
         "action": "write",
         "path": [
            "P1001711"
         ],
         "vehicle": "{<val>=<5t5t5t>;}",
         "expect": "{<P1001711>=<5t5t5t>;}"
      },
      {
         "action": "write",
         "path": [
            "P1001711"
         ],
         "vehicle": "{<val>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}",
         "expect": "{<P1001711>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}"
      }
   ],
   "P1001718": [
      {
         "action": "write",
         "path": [
            "P1001719"
         ],
         "vehicle": "{<val>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}",
         "expect": "{<P1001719>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}"
      },
      {
         "action": "array",
         "path": [
            "P1001719"
         ],
         "vehicle": "[(2):<0>=<reverse>;<1>=[(0):];]",
         "expect": "{<P1001719>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}"
      }
   ],
   "P1001724": [
      {
         "action": "write",
         "path": [
            "P1001725"
         ],
         "vehicle": "{<val>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}",
         "expect": "{<P1001725>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      },
      {
         "action": "write",
         "path": [
            "P1001725"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001725>={};}"
      }
   ],
   "P1001734": [
      {
         "action": "write",
         "path": [
            "P1001735"
         ],
         "vehicle": "{<val>=<    >;}",
         "expect": "{<P1001735>=<    >;}"
      },
      {
         "action": "write",
         "path": [
            "P1001735"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1001735"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001735>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1001735"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1001735>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      },
      {
         "action": "write",
         "path": [
            "P1001735"
         ],
         "vehicle": "{<val>=<23232323>;}",
         "expect": "{<P1001735>=<23232323>;}"
      }
   ],
   "P1001738": [
      {
         "action": "write",
         "path": [
            "P1001739"
         ],
         "vehicle": "{<val>=(123);}",
         "expect": "{<P1001739>=(123);}"
      },
      {
         "action": "write",
         "path": [
            "P1001739"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001739>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1001739"
         ],
         "vehicle": "[(2):<0>=<shift>;<1>=[(0):];]",
         "expect": "{<P1001739>=[(0):];}"
      }
   ],
   "P1001742": [
      {
         "action": "write",
         "path": [
            "P1001743"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001743>=[(0):];}"
      }
   ],
   "P1001746": [
      {
         "action": "write",
         "path": [
            "P1001747"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001747>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1001747"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001747>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1001747"
         ],
         "vehicle": "[(2):<0>=<write>;<1>=[(2):<0>=(2);<1>={<brown>=<fox>;<the>=<quick>;};];]",
         "expect": "{<P1001747>=[(3):<2>={<brown>=<fox>;<the>=<quick>;};];}"
      }
   ],
   "P1001754": [
      {
         "action": "write",
         "path": [
            "P1001755"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1001755"
         ],
         "vehicle": "{<val>=<je e>;}",
         "expect": "{<P1001755>=<je e>;}"
      },
      {
         "action": "write",
         "path": [
            "P1001755"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001755>=~;}"
      }
   ],
   "P1001760": [
      {
         "action": "write",
         "path": [
            "P1001761"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001761>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1001761"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001761>=[(0):];}"
      }
   ],
   "P1001767": [
      {
         "action": "write",
         "path": [
            "P1001768"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1001774": [
      {
         "action": "write",
         "path": [
            "P1001775"
         ],
         "vehicle": "{<val>=(1.04);}",
         "expect": "{<P1001775>=(1.04);}"
      },
      {
         "action": "write",
         "path": [
            "P1001775"
         ],
         "vehicle": "{<val>=<ng9u13htgjonn kjwfvojwv woef\nefbkjnbwrv w efb>;}",
         "expect": "{<P1001775>=<ng9u13htgjonn kjwfvojwv woef\nefbkjnbwrv w efb>;}"
      }
   ],
   "P1001782": [
      {
         "action": "write",
         "path": [
            "P1001783"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1001786": [
      {
         "action": "write",
         "path": [
            "P1001787"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001787>=[(0):];}"
      },
      {
         "action": "write",
         "path": [
            "P1001787"
         ],
         "vehicle": "{<val>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}",
         "expect": "{<P1001787>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}"
      }
   ],
   "P1001793": [
      {
         "action": "write",
         "path": [
            "P1001794"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1001794"
         ],
         "vehicle": "{<val>=(0);}",
         "expect": "{<P1001794>=(0);}"
      },
      {
         "action": "write",
         "path": [
            "P1001794"
         ],
         "vehicle": "{<val>=@;}",
         "expect": "{<P1001794>=@;}"
      }
   ],
   "P1001796": [
      {
         "action": "write",
         "path": [
            "P1001797"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001797>=[(0):];}"
      }
   ],
   "P1001803": [
      {
         "action": "write",
         "path": [
            "P1001804"
         ],
         "vehicle": "{<val>={<a>=[(0):];<b>=[(0):];};}",
         "expect": "{<P1001804>={<a>=[(0):];<b>=[(0):];};}"
      },
      {
         "action": "write",
         "path": [
            "P1001804"
         ],
         "vehicle": "{<val>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}",
         "expect": "{<P1001804>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      },
      {
         "action": "write",
         "path": [
            "P1001804"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1001804>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      }
   ],
   "P1001807": [
      {
         "action": "write",
         "path": [
            "P1001808"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001808>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1001808"
         ],
         "vehicle": "{<val>=<23232323>;}",
         "expect": "{<P1001808>=<23232323>;}"
      },
      {
         "action": "write",
         "path": [
            "P1001808"
         ],
         "vehicle": "{<val>=(0);}",
         "expect": "{<P1001808>=(0);}"
      },
      {
         "action": "write",
         "path": [
            "P1001809"
         ],
         "vehicle": "{<val>=<5t5t5t>;}",
         "expect": "{<P1001808>=(0);<P1001809>=<5t5t5t>;}"
      },
      {
         "action": "write",
         "path": [
            "P1001809"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001808>=(0);<P1001809>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1001809"
         ],
         "vehicle": "{<val>={<n>={<n>={<n>={<the>=<who>;};};};};}",
         "expect": "{<P1001808>=(0);<P1001809>={<n>={<n>={<n>={<the>=<who>;};};};};}"
      },
      {
         "action": "write",
         "path": [
            "P1001809",
            "P1001810"
         ],
         "vehicle": "{<val>=(1.04);}",
         "expect": "{<P1001808>=(0);<P1001809>={<P1001810>=(1.04);<n>={<n>={<n>={<the>=<who>;};};};};}"
      },
      {
         "action": "write",
         "path": [
            "P1001809",
            "P1001810"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001808>=(0);<P1001809>={<P1001810>={};<n>={<n>={<n>={<the>=<who>;};};};};}"
      }
   ],
   "P1001817": [
      {
         "action": "write",
         "path": [
            "P1001818"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1001818>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      }
   ],
   "P1001826": [
      {
         "action": "write",
         "path": [
            "P1001827"
         ],
         "vehicle": "{<val>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}",
         "expect": "{<P1001827>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}"
      }
   ],
   "P1001832": [
      {
         "action": "write",
         "path": [
            "P1001833"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001833>={};}"
      }
   ],
   "P1001839": [
      {
         "action": "write",
         "path": [
            "P1001840"
         ],
         "vehicle": "{<val>={<a>=[(0):];<b>=[(0):];};}",
         "expect": "{<P1001840>={<a>=[(0):];<b>=[(0):];};}"
      }
   ],
   "P1001844": [
      {
         "action": "write",
         "path": [
            "P1001845"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1001845"
         ],
         "vehicle": "{<val>=!;}",
         "expect": "{<P1001845>=!;}"
      }
   ],
   "P1001847": [
      {
         "action": "write",
         "path": [
            "P1001848"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001848>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1001848"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1001853": [
      {
         "action": "write",
         "path": [
            "P1001854"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1001859": [
      {
         "action": "write",
         "path": [
            "P1001860"
         ],
         "vehicle": "{<val>=(123);}",
         "expect": "{<P1001860>=(123);}"
      }
   ],
   "P1001863": [
      {
         "action": "write",
         "path": [
            "P1001864"
         ],
         "vehicle": "{<val>=<ee efwdfb >;}",
         "expect": "{<P1001864>=<ee efwdfb >;}"
      },
      {
         "action": "write",
         "path": [
            "P1001864"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001864>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1001864"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1001868": [
      {
         "action": "write",
         "path": [
            "P1001869"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001869>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1001869"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1001869>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      }
   ],
   "P1001873": [
      {
         "action": "write",
         "path": [
            "P1001874"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1001874>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      }
   ],
   "P1001880": [
      {
         "action": "write",
         "path": [
            "P1001881"
         ],
         "vehicle": "{<val>=<ng9u13htgjonn kjwfvojwv woef\nefbkjnbwrv w efb>;}",
         "expect": "{<P1001881>=<ng9u13htgjonn kjwfvojwv woef\nefbkjnbwrv w efb>;}"
      },
      {
         "action": "write",
         "path": [
            "P1001881"
         ],
         "vehicle": "{<val>=<foo>;}",
         "expect": "{<P1001881>=<foo>;}"
      },
      {
         "action": "write",
         "path": [
            "P1001881"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001881>=[(0):];}"
      }
   ],
   "P1001888": [
      {
         "action": "write",
         "path": [
            "P1001889"
         ],
         "vehicle": "{<val>=(-75.64);}",
         "expect": "{<P1001889>=(-75.64);}"
      },
      {
         "action": "write",
         "path": [
            "P1001889"
         ],
         "vehicle": "{<val>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}",
         "expect": "{<P1001889>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}"
      }
   ],
   "P1001894": [
      {
         "action": "write",
         "path": [
            "P1001895"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001895>=~;}"
      }
   ],
   "P1001902": [
      {
         "action": "write",
         "path": [
            "P1001903"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1001903"
         ],
         "vehicle": "{<val>=(844758);}",
         "expect": "{<P1001903>=(844758);}"
      },
      {
         "action": "write",
         "path": [
            "P1001903"
         ],
         "vehicle": "{<val>={<a>=[(0):];<b>=[(0):];};}",
         "expect": "{<P1001903>={<a>=[(0):];<b>=[(0):];};}"
      },
      {
         "action": "write",
         "path": [
            "P1001904"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001903>={<a>=[(0):];<b>=[(0):];};<P1001904>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1001904"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001903>={<a>=[(0):];<b>=[(0):];};<P1001904>=[(0):];}"
      }
   ],
   "P1001907": [
      {
         "action": "write",
         "path": [
            "P1001908"
         ],
         "vehicle": "{<val>=<23232323>;}",
         "expect": "{<P1001908>=<23232323>;}"
      },
      {
         "action": "write",
         "path": [
            "P1001908"
         ],
         "vehicle": "{<val>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}",
         "expect": "{<P1001908>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      }
   ],
   "P1001910": [
      {
         "action": "write",
         "path": [
            "P1001911"
         ],
         "vehicle": "{<val>={<n>={<n>={<n>={<the>=<who>;};};};};}",
         "expect": "{<P1001911>={<n>={<n>={<n>={<the>=<who>;};};};};}"
      }
   ],
   "P1001916": [
      {
         "action": "write",
         "path": [
            "P1001917"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001917>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1001917"
         ],
         "vehicle": "{<val>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}",
         "expect": "{<P1001917>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}"
      },
      {
         "action": "write",
         "path": [
            "P1001917"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1001917>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      }
   ],
   "P1001923": [
      {
         "action": "write",
         "path": [
            "P1001924"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1001924>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      }
   ],
   "P1001928": [
      {
         "action": "write",
         "path": [
            "P1001929"
         ],
         "vehicle": "{<val>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}",
         "expect": "{<P1001929>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      }
   ],
   "P1001935": [
      {
         "action": "write",
         "path": [
            "P1001936"
         ],
         "vehicle": "{<val>=(4);}",
         "expect": "{<P1001936>=(4);}"
      }
   ],
   "P1001939": [
      {
         "action": "write",
         "path": [
            "P1001940"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001940>={};}"
      }
   ],
   "P1001942": [
      {
         "action": "write",
         "path": [
            "P1001943"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001943>=[(0):];}"
      },
      {
         "action": "write",
         "path": [
            "P1001943"
         ],
         "vehicle": "{<val>=@;}",
         "expect": "{<P1001943>=@;}"
      },
      {
         "action": "write",
         "path": [
            "P1001943"
         ],
         "vehicle": "{<val>=(123);}",
         "expect": "{<P1001943>=(123);}"
      },
      {
         "action": "write",
         "path": [
            "P1001944"
         ],
         "vehicle": "{<val>=!;}",
         "expect": "{<P1001943>=(123);<P1001944>=!;}"
      }
   ],
   "P1001947": [
      {
         "action": "write",
         "path": [
            "P1001948"
         ],
         "vehicle": "{<val>=(43);}",
         "expect": "{<P1001948>=(43);}"
      },
      {
         "action": "write",
         "path": [
            "P1001948"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001948>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1001948"
         ],
         "vehicle": "{<val>=< o3r83rg>;}",
         "expect": "{<P1001948>=< o3r83rg>;}"
      }
   ],
   "P1001953": [
      {
         "action": "write",
         "path": [
            "P1001954"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001954>={};}"
      }
   ],
   "P1001958": [
      {
         "action": "write",
         "path": [
            "P1001959"
         ],
         "vehicle": "{<val>=(-6385);}",
         "expect": "{<P1001959>=(-6385);}"
      }
   ],
   "P1001962": [
      {
         "action": "write",
         "path": [
            "P1001963"
         ],
         "vehicle": "{<val>=(1.04);}",
         "expect": "{<P1001963>=(1.04);}"
      }
   ],
   "P1001971": [
      {
         "action": "write",
         "path": [
            "P1001972"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001972>=~;}"
      }
   ],
   "P1001977": [
      {
         "action": "write",
         "path": [
            "P1001978"
         ],
         "vehicle": "{<val>={<n>={<n>={<n>={<the>=<who>;};};};};}",
         "expect": "{<P1001978>={<n>={<n>={<n>={<the>=<who>;};};};};}"
      },
      {
         "action": "write",
         "path": [
            "P1001978"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1001978>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1001978"
         ],
         "vehicle": "{<val>=<5t5t5t>;}",
         "expect": "{<P1001978>=<5t5t5t>;}"
      }
   ],
   "P1001984": [
      {
         "action": "write",
         "path": [
            "P1001985"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1001985>=~;}"
      }
   ],
   "P1001988": [
      {
         "action": "write",
         "path": [
            "P1001989"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001989>=[(0):];}"
      }
   ],
   "P1001995": [
      {
         "action": "write",
         "path": [
            "P1001996"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1001996>=[(0):];}"
      }
   ],
   "P1002001": [
      {
         "action": "write",
         "path": [
            "P1002002"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002002>=~;}"
      }
   ],
   "P1002004": [
      {
         "action": "write",
         "path": [
            "P1002005"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002005>=~;}"
      }
   ],
   "P1002012": [
      {
         "action": "write",
         "path": [
            "P1002013"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1002013"
         ],
         "vehicle": "{<val>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}",
         "expect": "{<P1002013>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      },
      {
         "action": "write",
         "path": [
            "P1002013"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002013>=~;}"
      }
   ],
   "P1002017": [
      {
         "action": "write",
         "path": [
            "P1002018"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002018>=~;}"
      }
   ],
   "P1002024": [
      {
         "action": "write",
         "path": [
            "P1002025"
         ],
         "vehicle": "{<val>=(43);}",
         "expect": "{<P1002025>=(43);}"
      }
   ],
   "P1002029": [
      {
         "action": "write",
         "path": [
            "P1002030"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002030>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1002030"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002030>=[(0):];}"
      }
   ],
   "P1002034": [
      {
         "action": "write",
         "path": [
            "P1002035"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002035>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1002035"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002035>={};}"
      }
   ],
   "P1002038": [
      {
         "action": "write",
         "path": [
            "P1002039"
         ],
         "vehicle": "{<val>={<a>=[(0):];<b>=[(0):];};}",
         "expect": "{<P1002039>={<a>=[(0):];<b>=[(0):];};}"
      },
      {
         "action": "write",
         "path": [
            "P1002039"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002039>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1002039"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002039>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1002039"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002039>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1002039"
         ],
         "vehicle": "[(2):<0>=<shift>;<1>=[(0):];]",
         "expect": "{<P1002039>=[(0):];}"
      }
   ],
   "P1002048": [
      {
         "action": "write",
         "path": [
            "P1002049"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002049>=~;}"
      }
   ],
   "P1002059": [
      {
         "action": "write",
         "path": [
            "P1002060"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1002060>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      },
      {
         "action": "array",
         "path": [
            "P1002060"
         ],
         "vehicle": "[(2):<0>=<unshift>;<1>=[(3):<0>=(1);<1>=<bar>;<2>=[(0):];];]",
         "expect": "{<P1002060>=[(8):<0>=(1);<1>=<bar>;<2>=[(0):];<3>=(2);<4>=!;<5>=<blah>;<6>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<7>={<a>=<asdf>;<b>=@;};];}"
      },
      {
         "action": "write",
         "path": [
            "P1002060"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002060>=~;}"
      }
   ],
   "P1002064": [
      {
         "action": "write",
         "path": [
            "P1002065"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1002065>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      },
      {
         "action": "array",
         "path": [
            "P1002065"
         ],
         "vehicle": "[(2):<0>=<reverse>;<1>=[(0):];]",
         "expect": "{<P1002065>=[(5):<0>={<a>=<asdf>;<b>=@;};<1>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<2>=<blah>;<3>=!;<4>=(2);];}"
      }
   ],
   "P1002069": [
      {
         "action": "write",
         "path": [
            "P1002070"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1002075": [
      {
         "action": "write",
         "path": [
            "P1002076"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002076>=~;}"
      }
   ],
   "P1002079": [
      {
         "action": "write",
         "path": [
            "P1002080"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002080>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1002080"
         ],
         "vehicle": "[(2):<0>=<push>;<1>=[(3):<0>=(1);<1>=<bar>;<2>=[(0):];];]",
         "expect": "{<P1002080>=[(3):<0>=(1);<1>=<bar>;<2>=[(0):];];}"
      },
      {
         "action": "array",
         "path": [
            "P1002080"
         ],
         "vehicle": "[(2):<0>=<push>;<1>=[(2):<0>=<foo>;<1>={<1>=<man>;<went>=[(2):<0>=(2);<1>=<mow>;];};];]",
         "expect": "{<P1002080>=[(5):<0>=(1);<1>=<bar>;<2>=[(0):];<3>=<foo>;<4>={<1>=<man>;<went>=[(2):<0>=(2);<1>=<mow>;];};];}"
      }
   ],
   "P1002087": [
      {
         "action": "write",
         "path": [
            "P1002088"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002088>=~;}"
      }
   ],
   "P1002093": [
      {
         "action": "write",
         "path": [
            "P1002094"
         ],
         "vehicle": "{<val>=(0);}",
         "expect": "{<P1002094>=(0);}"
      },
      {
         "action": "write",
         "path": [
            "P1002094"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1002094"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002094>=~;}"
      }
   ],
   "P1002098": [
      {
         "action": "write",
         "path": [
            "P1002099"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002099>={};}"
      }
   ],
   "P1002103": [
      {
         "action": "write",
         "path": [
            "P1002104"
         ],
         "vehicle": "{<val>=(123);}",
         "expect": "{<P1002104>=(123);}"
      },
      {
         "action": "write",
         "path": [
            "P1002104"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002104>=[(0):];}"
      }
   ],
   "P1002106": [
      {
         "action": "write",
         "path": [
            "P1002107"
         ],
         "vehicle": "{<val>=(-2);}",
         "expect": "{<P1002107>=(-2);}"
      },
      {
         "action": "write",
         "path": [
            "P1002107"
         ],
         "vehicle": "{<val>=(0);}",
         "expect": "{<P1002107>=(0);}"
      },
      {
         "action": "write",
         "path": [
            "P1002107"
         ],
         "vehicle": "{<val>=(-6385);}",
         "expect": "{<P1002107>=(-6385);}"
      }
   ],
   "P1002112": [
      {
         "action": "write",
         "path": [
            "P1002113"
         ],
         "vehicle": "{<val>=@;}",
         "expect": "{<P1002113>=@;}"
      },
      {
         "action": "write",
         "path": [
            "P1002113"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1002113"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002113>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1002114"
         ],
         "vehicle": "{<val>=< o3r83rg>;}",
         "expect": "{<P1002113>={};<P1002114>=< o3r83rg>;}"
      }
   ],
   "P1002118": [
      {
         "action": "write",
         "path": [
            "P1002119"
         ],
         "vehicle": "{<val>=<foo>;}",
         "expect": "{<P1002119>=<foo>;}"
      },
      {
         "action": "write",
         "path": [
            "P1002119"
         ],
         "vehicle": "{<val>=(-75.64);}",
         "expect": "{<P1002119>=(-75.64);}"
      }
   ],
   "P1002120": [
      {
         "action": "write",
         "path": [
            "P1002121"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002121>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1002121"
         ],
         "vehicle": "{<val>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}",
         "expect": "{<P1002121>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}"
      },
      {
         "action": "array",
         "path": [
            "P1002121"
         ],
         "vehicle": "[(2):<0>=<unshift>;<1>=[(0):];]",
         "expect": "{<P1002121>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}"
      }
   ],
   "P1002126": [
      {
         "action": "write",
         "path": [
            "P1002127"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1002127>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      },
      {
         "action": "array",
         "path": [
            "P1002127"
         ],
         "vehicle": "[(2):<0>=<shift>;<1>=[(0):];]",
         "expect": "{<P1002127>=[(4):<0>=!;<1>=<blah>;<2>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<3>={<a>=<asdf>;<b>=@;};];}"
      },
      {
         "action": "write",
         "path": [
            "P1002127"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1002127"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002127>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1002127"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002127>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1002127"
         ],
         "vehicle": "{<val>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}",
         "expect": "{<P1002127>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}"
      }
   ],
   "P1002133": [
      {
         "action": "write",
         "path": [
            "P1002134"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002134>={};}"
      }
   ],
   "P1002138": [
      {
         "action": "write",
         "path": [
            "P1002139"
         ],
         "vehicle": "{<val>=@;}",
         "expect": "{<P1002139>=@;}"
      },
      {
         "action": "write",
         "path": [
            "P1002139"
         ],
         "vehicle": "{<val>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}",
         "expect": "{<P1002139>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}"
      },
      {
         "action": "array",
         "path": [
            "P1002139"
         ],
         "vehicle": "[(2):<0>=<reverse>;<1>=[(0):];]",
         "expect": "{<P1002139>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}"
      },
      {
         "action": "write",
         "path": [
            "P1002140"
         ],
         "vehicle": "{<val>=!;}",
         "expect": "{<P1002139>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];<P1002140>=!;}"
      }
   ],
   "P1002143": [
      {
         "action": "write",
         "path": [
            "P1002144"
         ],
         "vehicle": "{<val>=!;}",
         "expect": "{<P1002144>=!;}"
      },
      {
         "action": "write",
         "path": [
            "P1002144"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1002150": [
      {
         "action": "write",
         "path": [
            "P1002151"
         ],
         "vehicle": "{<val>=(43);}",
         "expect": "{<P1002151>=(43);}"
      },
      {
         "action": "write",
         "path": [
            "P1002151"
         ],
         "vehicle": "{<val>=<ee efwdfb >;}",
         "expect": "{<P1002151>=<ee efwdfb >;}"
      }
   ],
   "P1002154": [
      {
         "action": "write",
         "path": [
            "P1002155"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002155>=[(0):];}"
      },
      {
         "action": "write",
         "path": [
            "P1002155"
         ],
         "vehicle": "{<val>={<a>=[(0):];<b>=[(0):];};}",
         "expect": "{<P1002155>={<a>=[(0):];<b>=[(0):];};}"
      },
      {
         "action": "write",
         "path": [
            "P1002155"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002155>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1002155"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002155>=~;}"
      }
   ],
   "P1002163": [
      {
         "action": "write",
         "path": [
            "P1002164"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002164>=~;}"
      }
   ],
   "P1002168": [
      {
         "action": "write",
         "path": [
            "P1002169"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002169>=[(0):];}"
      }
   ],
   "P1002173": [
      {
         "action": "write",
         "path": [
            "P1002174"
         ],
         "vehicle": "{<val>={<a>=[(0):];<b>=[(0):];};}",
         "expect": "{<P1002174>={<a>=[(0):];<b>=[(0):];};}"
      },
      {
         "action": "write",
         "path": [
            "P1002174"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1002174>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      },
      {
         "action": "array",
         "path": [
            "P1002174"
         ],
         "vehicle": "[(2):<0>=<sort>;<1>=[(0):];]",
         "expect": "{<P1002174>=[(5):<0>=(2);<1>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<2>={<a>=<asdf>;<b>=@;};<3>=<blah>;<4>=!;];}"
      },
      {
         "action": "write",
         "path": [
            "P1002175"
         ],
         "vehicle": "{<val>=(0);}",
         "expect": "{<P1002174>=[(5):<0>=(2);<1>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<2>={<a>=<asdf>;<b>=@;};<3>=<blah>;<4>=!;];<P1002175>=(0);}"
      }
   ],
   "P1002179": [
      {
         "action": "write",
         "path": [
            "P1002180"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002180>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1002180"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002180>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1002180"
         ],
         "vehicle": "{<val>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}",
         "expect": "{<P1002180>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}"
      },
      {
         "action": "array",
         "path": [
            "P1002180"
         ],
         "vehicle": "[(2):<0>=<write>;<1>=[(2):<0>=(0);<1>=_;];]",
         "expect": "{<P1002180>=[(3):<0>=(3);<1>=(4);<2>=(5);];}"
      }
   ],
   "P1002183": [
      {
         "action": "write",
         "path": [
            "P1002184"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1002184"
         ],
         "vehicle": "{<val>={<a>=[(0):];<b>=[(0):];};}",
         "expect": "{<P1002184>={<a>=[(0):];<b>=[(0):];};}"
      },
      {
         "action": "write",
         "path": [
            "P1002184"
         ],
         "vehicle": "{<val>=<    >;}",
         "expect": "{<P1002184>=<    >;}"
      },
      {
         "action": "write",
         "path": [
            "P1002184"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002184>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1002184"
         ],
         "vehicle": "{<val>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}",
         "expect": "{<P1002184>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      }
   ],
   "P1002190": [
      {
         "action": "write",
         "path": [
            "P1002191"
         ],
         "vehicle": "{<val>=(7340.1);}",
         "expect": "{<P1002191>=(7340.1);}"
      }
   ],
   "P1002195": [
      {
         "action": "write",
         "path": [
            "P1002196"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1002196>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      },
      {
         "action": "array",
         "path": [
            "P1002196"
         ],
         "vehicle": "[(2):<0>=<unshift>;<1>=[(5):<0>=(1);<1>=(2);<2>=(3);<3>=(4);<4>=(5);];]",
         "expect": "{<P1002196>=[(10):<0>=(1);<1>=(2);<2>=(3);<3>=(4);<4>=(5);<5>=(2);<6>=!;<7>=<blah>;<8>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<9>={<a>=<asdf>;<b>=@;};];}"
      }
   ],
   "P1002200": [
      {
         "action": "write",
         "path": [
            "P1002201"
         ],
         "vehicle": "{<val>=!;}",
         "expect": "{<P1002201>=!;}"
      }
   ],
   "P1002204": [
      {
         "action": "write",
         "path": [
            "P1002205"
         ],
         "vehicle": "{<val>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}",
         "expect": "{<P1002205>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}"
      },
      {
         "action": "array",
         "path": [
            "P1002205"
         ],
         "vehicle": "[(2):<0>=<pop>;<1>=[(0):];]",
         "expect": "{<P1002205>=[(3):<0>=(2);<1>=(3);<2>=(4);];}"
      }
   ],
   "P1002209": [
      {
         "action": "write",
         "path": [
            "P1002210"
         ],
         "vehicle": "{<val>=(-6385);}",
         "expect": "{<P1002210>=(-6385);}"
      },
      {
         "action": "write",
         "path": [
            "P1002210"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1002210>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      },
      {
         "action": "array",
         "path": [
            "P1002210"
         ],
         "vehicle": "[(2):<0>=<splice>;<1>=[(2):<0>=(0);<1>=(1000);];]",
         "expect": "{<P1002210>=[(0):];}"
      }
   ],
   "P1002215": [
      {
         "action": "write",
         "path": [
            "P1002216"
         ],
         "vehicle": "{<val>=<foo>;}",
         "expect": "{<P1002216>=<foo>;}"
      },
      {
         "action": "write",
         "path": [
            "P1002216"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1002216>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      },
      {
         "action": "array",
         "path": [
            "P1002216"
         ],
         "vehicle": "[(2):<0>=<unshift>;<1>=[(0):];]",
         "expect": "{<P1002216>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      }
   ],
   "P1002221": [
      {
         "action": "write",
         "path": [
            "P1002222"
         ],
         "vehicle": "{<val>=(1.04);}",
         "expect": "{<P1002222>=(1.04);}"
      }
   ],
   "P1002226": [
      {
         "action": "write",
         "path": [
            "P1002227"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002227>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1002227"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1002227>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      }
   ],
   "P1002230": [
      {
         "action": "write",
         "path": [
            "P1002231"
         ],
         "vehicle": "{<val>=(7340.1);}",
         "expect": "{<P1002231>=(7340.1);}"
      }
   ],
   "P1002235": [
      {
         "action": "write",
         "path": [
            "P1002236"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1002236>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      },
      {
         "action": "array",
         "path": [
            "P1002236"
         ],
         "vehicle": "[(2):<0>=<pop>;<1>=[(0):];]",
         "expect": "{<P1002236>=[(4):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];];}"
      },
      {
         "action": "array",
         "path": [
            "P1002236"
         ],
         "vehicle": "[(2):<0>=<pop>;<1>=[(0):];]",
         "expect": "{<P1002236>=[(3):<0>=(2);<1>=!;<2>=<blah>;];}"
      },
      {
         "action": "write",
         "path": [
            "P1002236"
         ],
         "vehicle": "{<val>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}",
         "expect": "{<P1002236>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}"
      },
      {
         "action": "write",
         "path": [
            "P1002236"
         ],
         "vehicle": "{<val>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}",
         "expect": "{<P1002236>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}"
      },
      {
         "action": "write",
         "path": [
            "P1002236"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1002237"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002237>=[(0):];}"
      }
   ],
   "P1002243": [
      {
         "action": "write",
         "path": [
            "P1002244"
         ],
         "vehicle": "{<val>={<n>={<n>={<n>={<the>=<who>;};};};};}",
         "expect": "{<P1002244>={<n>={<n>={<n>={<the>=<who>;};};};};}"
      }
   ],
   "P1002248": [
      {
         "action": "write",
         "path": [
            "P1002249"
         ],
         "vehicle": "{<val>=<23232323>;}",
         "expect": "{<P1002249>=<23232323>;}"
      },
      {
         "action": "write",
         "path": [
            "P1002249"
         ],
         "vehicle": "{<val>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}",
         "expect": "{<P1002249>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}"
      }
   ],
   "P1002255": [
      {
         "action": "write",
         "path": [
            "P1002256"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002256>={};}"
      }
   ],
   "P1002259": [
      {
         "action": "write",
         "path": [
            "P1002260"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1002260"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002260>=[(0):];}"
      }
   ],
   "P1002263": [
      {
         "action": "write",
         "path": [
            "P1002264"
         ],
         "vehicle": "{<val>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}",
         "expect": "{<P1002264>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}"
      },
      {
         "action": "array",
         "path": [
            "P1002264"
         ],
         "vehicle": "[(2):<0>=<sort>;<1>=[(0):];]",
         "expect": "{<P1002264>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}"
      }
   ],
   "P1002267": [
      {
         "action": "write",
         "path": [
            "P1002268"
         ],
         "vehicle": "{<val>=(-84);}",
         "expect": "{<P1002268>=(-84);}"
      }
   ],
   "P1002273": [
      {
         "action": "write",
         "path": [
            "P1002274"
         ],
         "vehicle": "{<val>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}",
         "expect": "{<P1002274>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}"
      }
   ],
   "P1002279": [
      {
         "action": "write",
         "path": [
            "P1002280"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1002280>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      }
   ],
   "P1002283": [
      {
         "action": "write",
         "path": [
            "P1002284"
         ],
         "vehicle": "{<val>={<n>={<n>={<n>={<the>=<who>;};};};};}",
         "expect": "{<P1002284>={<n>={<n>={<n>={<the>=<who>;};};};};}"
      },
      {
         "action": "write",
         "path": [
            "P1002284"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002284>={};}"
      }
   ],
   "P1002290": [
      {
         "action": "write",
         "path": [
            "P1002291"
         ],
         "vehicle": "{<val>=(4);}",
         "expect": "{<P1002291>=(4);}"
      }
   ],
   "P1002295": [
      {
         "action": "write",
         "path": [
            "P1002296"
         ],
         "vehicle": "{<val>=<ee efwdfb >;}",
         "expect": "{<P1002296>=<ee efwdfb >;}"
      }
   ],
   "P1002303": [
      {
         "action": "write",
         "path": [
            "P1002304"
         ],
         "vehicle": "{<val>=(43);}",
         "expect": "{<P1002304>=(43);}"
      },
      {
         "action": "write",
         "path": [
            "P1002304"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1002304"
         ],
         "vehicle": "{<val>=(844758);}",
         "expect": "{<P1002304>=(844758);}"
      }
   ],
   "P1002309": [
      {
         "action": "write",
         "path": [
            "P1002310"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1002310"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1002314": [
      {
         "action": "write",
         "path": [
            "P1002315"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002315>={};}"
      }
   ],
   "P1002318": [
      {
         "action": "write",
         "path": [
            "P1002319"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002319>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1002319"
         ],
         "vehicle": "{<val>={<n>={<n>={<n>={<the>=<who>;};};};};}",
         "expect": "{<P1002319>={<n>={<n>={<n>={<the>=<who>;};};};};}"
      },
      {
         "action": "write",
         "path": [
            "P1002319"
         ],
         "vehicle": "{<val>=(4);}",
         "expect": "{<P1002319>=(4);}"
      }
   ],
   "P1002326": [
      {
         "action": "write",
         "path": [
            "P1002327"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002327>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1002327"
         ],
         "vehicle": "[(2):<0>=<push>;<1>=[(3):<0>=(1);<1>=<bar>;<2>=[(0):];];]",
         "expect": "{<P1002327>=[(3):<0>=(1);<1>=<bar>;<2>=[(0):];];}"
      },
      {
         "action": "array",
         "path": [
            "P1002327"
         ],
         "vehicle": "[(2):<0>=<splice>;<1>=[(5):<0>=(1000);<1>=(0);<2>=(10);<3>=(20);<4>=(30);];]",
         "expect": "{<P1002327>=[(6):<0>=(1);<1>=<bar>;<2>=[(0):];<3>=(10);<4>=(20);<5>=(30);];}"
      },
      {
         "action": "write",
         "path": [
            "P1002327"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1002327>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      }
   ],
   "P1002334": [
      {
         "action": "write",
         "path": [
            "P1002335"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1002335"
         ],
         "vehicle": "{<val>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}",
         "expect": "{<P1002335>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      },
      {
         "action": "write",
         "path": [
            "P1002335"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002335>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1002336"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{<P1002335>=~;}"
      }
   ],
   "P1002342": [
      {
         "action": "write",
         "path": [
            "P1002343"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1002343"
         ],
         "vehicle": "{<val>=<ee efwdfb >;}",
         "expect": "{<P1002343>=<ee efwdfb >;}"
      },
      {
         "action": "write",
         "path": [
            "P1002343"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002343>=[(0):];}"
      }
   ],
   "P1002355": [
      {
         "action": "write",
         "path": [
            "P1002356"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002356>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1002356"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002356>=[(0):];}"
      },
      {
         "action": "write",
         "path": [
            "P1002356"
         ],
         "vehicle": "{<val>=(0);}",
         "expect": "{<P1002356>=(0);}"
      },
      {
         "action": "write",
         "path": [
            "P1002356"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002356>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1002356"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002356>=[(0):];}"
      }
   ],
   "P1002357": [
      {
         "action": "write",
         "path": [
            "P1002358"
         ],
         "vehicle": "{<val>=(65535);}",
         "expect": "{<P1002358>=(65535);}"
      }
   ],
   "P1002360": [
      {
         "action": "write",
         "path": [
            "P1002361"
         ],
         "vehicle": "{<val>=(1.04);}",
         "expect": "{<P1002361>=(1.04);}"
      }
   ],
   "P1002367": [
      {
         "action": "write",
         "path": [
            "P1002368"
         ],
         "vehicle": "{<val>=@;}",
         "expect": "{<P1002368>=@;}"
      }
   ],
   "P1002371": [
      {
         "action": "write",
         "path": [
            "P1002372"
         ],
         "vehicle": "{<val>=(1);}",
         "expect": "{<P1002372>=(1);}"
      },
      {
         "action": "write",
         "path": [
            "P1002372"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002372>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1002372"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002372>={};}"
      }
   ],
   "P1002377": [
      {
         "action": "write",
         "path": [
            "P1002378"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002378>=[(0):];}"
      }
   ],
   "P1002381": [
      {
         "action": "write",
         "path": [
            "P1002382"
         ],
         "vehicle": "{<val>=(-2);}",
         "expect": "{<P1002382>=(-2);}"
      }
   ],
   "P1002387": [
      {
         "action": "write",
         "path": [
            "P1002388"
         ],
         "vehicle": "{<val>=(65535);}",
         "expect": "{<P1002388>=(65535);}"
      }
   ],
   "P1002391": [
      {
         "action": "write",
         "path": [
            "P1002392"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002392>=[(0):];}"
      }
   ],
   "P1002396": [
      {
         "action": "write",
         "path": [
            "P1002397"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1002397>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      }
   ],
   "P1002403": [
      {
         "action": "write",
         "path": [
            "P1002404"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1002413": [
      {
         "action": "write",
         "path": [
            "P1002414"
         ],
         "vehicle": "{<val>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}",
         "expect": "{<P1002414>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      }
   ],
   "P1002419": [
      {
         "action": "write",
         "path": [
            "P1002420"
         ],
         "vehicle": "{<val>=<5t5t5t>;}",
         "expect": "{<P1002420>=<5t5t5t>;}"
      }
   ],
   "P1002426": [
      {
         "action": "write",
         "path": [
            "P1002427"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002427>={};}"
      }
   ],
   "P1002434": [
      {
         "action": "write",
         "path": [
            "P1002435"
         ],
         "vehicle": "{<val>={<n>={<n>={<n>={<the>=<who>;};};};};}",
         "expect": "{<P1002435>={<n>={<n>={<n>={<the>=<who>;};};};};}"
      }
   ],
   "P1002440": [
      {
         "action": "write",
         "path": [
            "P1002441"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1002441>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      }
   ],
   "P1002443": [
      {
         "action": "write",
         "path": [
            "P1002444"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002444>=[(0):];}"
      }
   ],
   "P1002447": [
      {
         "action": "write",
         "path": [
            "P1002448"
         ],
         "vehicle": "{<val>=<    >;}",
         "expect": "{<P1002448>=<    >;}"
      }
   ],
   "P1002450": [
      {
         "action": "write",
         "path": [
            "P1002451"
         ],
         "vehicle": "{<val>={<a>=[(0):];<b>=[(0):];};}",
         "expect": "{<P1002451>={<a>=[(0):];<b>=[(0):];};}"
      }
   ],
   "P1002459": [
      {
         "action": "write",
         "path": [
            "P1002460"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002460>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1002460"
         ],
         "vehicle": "{<val>=(-6385);}",
         "expect": "{<P1002460>=(-6385);}"
      }
   ],
   "P1002465": [
      {
         "action": "write",
         "path": [
            "P1002466"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002466>=[(0):];}"
      }
   ],
   "P1002473": [
      {
         "action": "write",
         "path": [
            "P1002474"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002474>=[(0):];}"
      }
   ],
   "P1002478": [
      {
         "action": "write",
         "path": [
            "P1002479"
         ],
         "vehicle": "{<val>=!;}",
         "expect": "{<P1002479>=!;}"
      }
   ],
   "P1002482": [
      {
         "action": "write",
         "path": [
            "P1002483"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002483>={};}"
      }
   ],
   "P1002489": [
      {
         "action": "write",
         "path": [
            "P1002490"
         ],
         "vehicle": "{<val>=(43);}",
         "expect": "{<P1002490>=(43);}"
      }
   ],
   "P1002495": [
      {
         "action": "write",
         "path": [
            "P1002496"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002496>=[(0):];}"
      }
   ],
   "P1002501": [
      {
         "action": "write",
         "path": [
            "P1002502"
         ],
         "vehicle": "{<val>={<a>=[(0):];<b>=[(0):];};}",
         "expect": "{<P1002502>={<a>=[(0):];<b>=[(0):];};}"
      },
      {
         "action": "write",
         "path": [
            "P1002502"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002502>=~;}"
      }
   ],
   "P1002506": [
      {
         "action": "write",
         "path": [
            "P1002507"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002507>=[(0):];}"
      }
   ],
   "P1002511": [
      {
         "action": "write",
         "path": [
            "P1002512"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002512>=[(0):];}"
      },
      {
         "action": "write",
         "path": [
            "P1002512"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002512>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1002512"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002512>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1002512"
         ],
         "vehicle": "[(2):<0>=<push>;<1>=[(2):<0>=<foo>;<1>={<1>=<man>;<went>=[(2):<0>=(2);<1>=<mow>;];};];]",
         "expect": "{<P1002512>=[(2):<0>=<foo>;<1>={<1>=<man>;<went>=[(2):<0>=(2);<1>=<mow>;];};];}"
      }
   ],
   "P1002515": [
      {
         "action": "write",
         "path": [
            "P1002516"
         ],
         "vehicle": "{<val>=@;}",
         "expect": "{<P1002516>=@;}"
      },
      {
         "action": "write",
         "path": [
            "P1002516"
         ],
         "vehicle": "{<val>={<a>=[(0):];<b>=[(0):];};}",
         "expect": "{<P1002516>={<a>=[(0):];<b>=[(0):];};}"
      },
      {
         "action": "write",
         "path": [
            "P1002516"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1002521": [
      {
         "action": "write",
         "path": [
            "P1002522"
         ],
         "vehicle": "{<val>=<    >;}",
         "expect": "{<P1002522>=<    >;}"
      },
      {
         "action": "write",
         "path": [
            "P1002522"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1002526": [
      {
         "action": "write",
         "path": [
            "P1002527"
         ],
         "vehicle": "{<val>={<n>={<n>={<n>={<the>=<who>;};};};};}",
         "expect": "{<P1002527>={<n>={<n>={<n>={<the>=<who>;};};};};}"
      }
   ],
   "P1002531": [
      {
         "action": "write",
         "path": [
            "P1002532"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002532>=[(0):];}"
      }
   ],
   "P1002537": [
      {
         "action": "write",
         "path": [
            "P1002538"
         ],
         "vehicle": "{<val>=@;}",
         "expect": "{<P1002538>=@;}"
      }
   ],
   "P1002539": [
      {
         "action": "write",
         "path": [
            "P1002540"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1002540"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002540>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1002540"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002540>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1002540",
            "P1002541"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{<P1002540>={};}"
      }
   ],
   "P1002548": [
      {
         "action": "write",
         "path": [
            "P1002549"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002549>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1002549"
         ],
         "vehicle": "{<val>=(-6385);}",
         "expect": "{<P1002549>=(-6385);}"
      },
      {
         "action": "write",
         "path": [
            "P1002549"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002549>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1002550"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{<P1002549>=~;}"
      }
   ],
   "P1002554": [
      {
         "action": "write",
         "path": [
            "P1002555"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1002555"
         ],
         "vehicle": "{<val>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}",
         "expect": "{<P1002555>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}"
      }
   ],
   "P1002561": [
      {
         "action": "write",
         "path": [
            "P1002562"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1002562>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      },
      {
         "action": "array",
         "path": [
            "P1002562"
         ],
         "vehicle": "[(2):<0>=<push>;<1>=[(3):<0>=(1);<1>=<bar>;<2>=[(0):];];]",
         "expect": "{<P1002562>=[(8):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;<5>=(1);<6>=<bar>;<7>=[(0):];];}"
      },
      {
         "action": "array",
         "path": [
            "P1002562"
         ],
         "vehicle": "[(2):<0>=<write>;<1>=[(2):<0>=(0);<1>=_;];]",
         "expect": "{<P1002562>=[(7):<0>=<quick>;<1>=<brown>;<2>=<fox>;<3>=<>;<4>=(1);<5>=<bar>;<6>=[(0):];];}"
      }
   ],
   "P1002566": [
      {
         "action": "write",
         "path": [
            "P1002567"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1002567"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1002575": [
      {
         "action": "write",
         "path": [
            "P1002576"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1002576"
         ],
         "vehicle": "{<val>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}",
         "expect": "{<P1002576>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}"
      },
      {
         "action": "write",
         "path": [
            "P1002576"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1002582": [
      {
         "action": "write",
         "path": [
            "P1002583"
         ],
         "vehicle": "{<val>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}",
         "expect": "{<P1002583>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      },
      {
         "action": "write",
         "path": [
            "P1002583"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002583>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1002583"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002583>=[(0):];}"
      }
   ],
   "P1002588": [
      {
         "action": "write",
         "path": [
            "P1002589"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002589>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1002589"
         ],
         "vehicle": "{<val>=<je e>;}",
         "expect": "{<P1002589>=<je e>;}"
      },
      {
         "action": "write",
         "path": [
            "P1002589"
         ],
         "vehicle": "{<val>=@;}",
         "expect": "{<P1002589>=@;}"
      }
   ],
   "P1002597": [
      {
         "action": "write",
         "path": [
            "P1002598"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1002598>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      }
   ],
   "P1002604": [
      {
         "action": "write",
         "path": [
            "P1002605"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1002611": [
      {
         "action": "write",
         "path": [
            "P1002612"
         ],
         "vehicle": "{<val>=<5t5t5t>;}",
         "expect": "{<P1002612>=<5t5t5t>;}"
      }
   ],
   "P1002617": [
      {
         "action": "write",
         "path": [
            "P1002618"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002618>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1002618"
         ],
         "vehicle": "[(2):<0>=<write>;<1>=[(2):<0>=(1);<1>=(123);];]",
         "expect": "{<P1002618>=[(2):<1>=(123);];}"
      },
      {
         "action": "write",
         "path": [
            "P1002618"
         ],
         "vehicle": "{<val>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}",
         "expect": "{<P1002618>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}"
      },
      {
         "action": "write",
         "path": [
            "P1002618"
         ],
         "vehicle": "{<val>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}",
         "expect": "{<P1002618>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}"
      }
   ],
   "P1002619": [
      {
         "action": "write",
         "path": [
            "P1002620"
         ],
         "vehicle": "{<val>=(0);}",
         "expect": "{<P1002620>=(0);}"
      }
   ],
   "P1002623": [
      {
         "action": "write",
         "path": [
            "P1002624"
         ],
         "vehicle": "{<val>=< o3r83rg>;}",
         "expect": "{<P1002624>=< o3r83rg>;}"
      }
   ],
   "P1002629": [
      {
         "action": "write",
         "path": [
            "P1002630"
         ],
         "vehicle": "{<val>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}",
         "expect": "{<P1002630>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}"
      },
      {
         "action": "array",
         "path": [
            "P1002630"
         ],
         "vehicle": "[(2):<0>=<sort>;<1>=[(0):];]",
         "expect": "{<P1002630>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}"
      }
   ],
   "P1002636": [
      {
         "action": "write",
         "path": [
            "P1002637"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002637>=[(0):];}"
      },
      {
         "action": "write",
         "path": [
            "P1002637"
         ],
         "vehicle": "{<val>=(-2);}",
         "expect": "{<P1002637>=(-2);}"
      },
      {
         "action": "write",
         "path": [
            "P1002637"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002637>=[(0):];}"
      }
   ],
   "P1002642": [
      {
         "action": "write",
         "path": [
            "P1002643"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1002649": [
      {
         "action": "write",
         "path": [
            "P1002650"
         ],
         "vehicle": "{<val>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}",
         "expect": "{<P1002650>={<bar>=[(4):<0>=<the>;<1>=(3);<2>=<little>;<3>=@;];<foo>=(2);};}"
      },
      {
         "action": "write",
         "path": [
            "P1002650"
         ],
         "vehicle": "{<val>=<ng9u13htgjonn kjwfvojwv woef\nefbkjnbwrv w efb>;}",
         "expect": "{<P1002650>=<ng9u13htgjonn kjwfvojwv woef\nefbkjnbwrv w efb>;}"
      }
   ],
   "P1002652": [
      {
         "action": "write",
         "path": [
            "P1002653"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002653>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1002653"
         ],
         "vehicle": "[(2):<0>=<reverse>;<1>=[(0):];]",
         "expect": "{<P1002653>=[(0):];}"
      }
   ],
   "P1002662": [
      {
         "action": "write",
         "path": [
            "P1002663"
         ],
         "vehicle": "{<val>=(7340.1);}",
         "expect": "{<P1002663>=(7340.1);}"
      }
   ],
   "P1002667": [
      {
         "action": "write",
         "path": [
            "P1002668"
         ],
         "vehicle": "{<val>=(43);}",
         "expect": "{<P1002668>=(43);}"
      },
      {
         "action": "write",
         "path": [
            "P1002668"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1002668"
         ],
         "vehicle": "{<val>=<23232323>;}",
         "expect": "{<P1002668>=<23232323>;}"
      },
      {
         "action": "write",
         "path": [
            "P1002669"
         ],
         "vehicle": "{<val>=(844758);}",
         "expect": "{<P1002668>=<23232323>;<P1002669>=(844758);}"
      }
   ],
   "P1002674": [
      {
         "action": "write",
         "path": [
            "P1002675"
         ],
         "vehicle": "{<val>=<foo>;}",
         "expect": "{<P1002675>=<foo>;}"
      },
      {
         "action": "write",
         "path": [
            "P1002675"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002675>=[(0):];}"
      },
      {
         "action": "write",
         "path": [
            "P1002675"
         ],
         "vehicle": "{<val>=<ohjwfv>;}",
         "expect": "{<P1002675>=<ohjwfv>;}"
      }
   ],
   "P1002677": [
      {
         "action": "write",
         "path": [
            "P1002678"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1002681": [
      {
         "action": "write",
         "path": [
            "P1002682"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002682>=~;}"
      }
   ],
   "P1002687": [
      {
         "action": "write",
         "path": [
            "P1002688"
         ],
         "vehicle": "{<val>=(0);}",
         "expect": "{<P1002688>=(0);}"
      },
      {
         "action": "write",
         "path": [
            "P1002688"
         ],
         "vehicle": "{<val>=(1.04);}",
         "expect": "{<P1002688>=(1.04);}"
      },
      {
         "action": "write",
         "path": [
            "P1002688"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002688>=[(0):];}"
      },
      {
         "action": "write",
         "path": [
            "P1002688"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1002688"
         ],
         "vehicle": "{<val>=!;}",
         "expect": "{<P1002688>=!;}"
      }
   ],
   "P1002692": [
      {
         "action": "write",
         "path": [
            "P1002693"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002693>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1002693"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002693>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1002693"
         ],
         "vehicle": "{<val>={<n>={<n>={<n>={<the>=<who>;};};};};}",
         "expect": "{<P1002693>={<n>={<n>={<n>={<the>=<who>;};};};};}"
      }
   ],
   "P1002695": [
      {
         "action": "write",
         "path": [
            "P1002696"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1002696>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      },
      {
         "action": "array",
         "path": [
            "P1002696"
         ],
         "vehicle": "[(2):<0>=<reverse>;<1>=[(0):];]",
         "expect": "{<P1002696>=[(5):<0>={<a>=<asdf>;<b>=@;};<1>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<2>=<blah>;<3>=!;<4>=(2);];}"
      }
   ],
   "P1002700": [
      {
         "action": "write",
         "path": [
            "P1002701"
         ],
         "vehicle": "{<val>={<n>={<n>={<n>={<the>=<who>;};};};};}",
         "expect": "{<P1002701>={<n>={<n>={<n>={<the>=<who>;};};};};}"
      }
   ],
   "P1002703": [
      {
         "action": "write",
         "path": [
            "P1002704"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1002704>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      },
      {
         "action": "array",
         "path": [
            "P1002704"
         ],
         "vehicle": "[(2):<0>=<pop>;<1>=[(0):];]",
         "expect": "{<P1002704>=[(4):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;];}"
      },
      {
         "action": "array",
         "path": [
            "P1002704"
         ],
         "vehicle": "[(2):<0>=<unshift>;<1>=[(5):<0>=(1);<1>=(2);<2>=(3);<3>=(4);<4>=(5);];]",
         "expect": "{<P1002704>=[(9):<0>=(1);<1>=(2);<2>=(3);<3>=(4);<4>=(5);<5>=<the>;<6>=<quick>;<7>=<brown>;<8>=<fox>;];}"
      },
      {
         "action": "write",
         "path": [
            "P1002705"
         ],
         "vehicle": "{<val>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}",
         "expect": "{<P1002704>=[(9):<0>=(1);<1>=(2);<2>=(3);<3>=(4);<4>=(5);<5>=<the>;<6>=<quick>;<7>=<brown>;<8>=<fox>;];<P1002705>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}"
      },
      {
         "action": "write",
         "path": [
            "P1002705"
         ],
         "vehicle": "{<val>=<je e>;}",
         "expect": "{<P1002704>=[(9):<0>=(1);<1>=(2);<2>=(3);<3>=(4);<4>=(5);<5>=<the>;<6>=<quick>;<7>=<brown>;<8>=<fox>;];<P1002705>=<je e>;}"
      }
   ],
   "P1002708": [
      {
         "action": "write",
         "path": [
            "P1002709"
         ],
         "vehicle": "{<val>=(1);}",
         "expect": "{<P1002709>=(1);}"
      },
      {
         "action": "write",
         "path": [
            "P1002709"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002709>=[(0):];}"
      }
   ],
   "P1002714": [
      {
         "action": "write",
         "path": [
            "P1002715"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002715>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1002715"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1002715"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002715>=[(0):];}"
      },
      {
         "action": "write",
         "path": [
            "P1002716"
         ],
         "vehicle": "{<val>={<n>={<n>={<n>={<the>=<who>;};};};};}",
         "expect": "{<P1002715>=[(0):];<P1002716>={<n>={<n>={<n>={<the>=<who>;};};};};}"
      },
      {
         "action": "write",
         "path": [
            "P1002716"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1002715>=[(0):];<P1002716>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      }
   ],
   "P1002720": [
      {
         "action": "write",
         "path": [
            "P1002721"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002721>=~;}"
      }
   ],
   "P1002724": [
      {
         "action": "write",
         "path": [
            "P1002725"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1002732": [
      {
         "action": "write",
         "path": [
            "P1002733"
         ],
         "vehicle": "{<val>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}",
         "expect": "{<P1002733>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}"
      },
      {
         "action": "array",
         "path": [
            "P1002733"
         ],
         "vehicle": "[(2):<0>=<sort>;<1>=[(0):];]",
         "expect": "{<P1002733>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}"
      }
   ],
   "P1002737": [
      {
         "action": "write",
         "path": [
            "P1002738"
         ],
         "vehicle": "{<val>=(65535);}",
         "expect": "{<P1002738>=(65535);}"
      },
      {
         "action": "write",
         "path": [
            "P1002738"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002738>={};}"
      }
   ],
   "P1002744": [
      {
         "action": "write",
         "path": [
            "P1002745"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002745>={};}"
      }
   ],
   "P1002749": [
      {
         "action": "write",
         "path": [
            "P1002750"
         ],
         "vehicle": "{<val>=<foo>;}",
         "expect": "{<P1002750>=<foo>;}"
      }
   ],
   "P1002754": [
      {
         "action": "write",
         "path": [
            "P1002755"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002755>=[(0):];}"
      }
   ],
   "P1002759": [
      {
         "action": "write",
         "path": [
            "P1002760"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002760>=[(0):];}"
      }
   ],
   "P1002762": [
      {
         "action": "write",
         "path": [
            "P1002763"
         ],
         "vehicle": "{<val>=!;}",
         "expect": "{<P1002763>=!;}"
      },
      {
         "action": "write",
         "path": [
            "P1002763"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002763>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1002763"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002763>={};}"
      }
   ],
   "P1002768": [
      {
         "action": "write",
         "path": [
            "P1002769"
         ],
         "vehicle": "{<val>=@;}",
         "expect": "{<P1002769>=@;}"
      },
      {
         "action": "write",
         "path": [
            "P1002769"
         ],
         "vehicle": "{<val>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}",
         "expect": "{<P1002769>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}"
      },
      {
         "action": "write",
         "path": [
            "P1002769"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002769>=[(0):];}"
      },
      {
         "action": "write",
         "path": [
            "P1002770"
         ],
         "vehicle": "{<val>={<a>=[(0):];<b>=[(0):];};}",
         "expect": "{<P1002769>=[(0):];<P1002770>={<a>=[(0):];<b>=[(0):];};}"
      }
   ],
   "P1002776": [
      {
         "action": "write",
         "path": [
            "P1002777"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1002777"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002777>=~;}"
      }
   ],
   "P1002780": [
      {
         "action": "write",
         "path": [
            "P1002781"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002781>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1002781"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002781>=~;}"
      }
   ],
   "P1002784": [
      {
         "action": "write",
         "path": [
            "P1002785"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1002790": [
      {
         "action": "write",
         "path": [
            "P1002791"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1002791"
         ],
         "vehicle": "{<val>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}",
         "expect": "{<P1002791>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}"
      }
   ],
   "P1002792": [
      {
         "action": "write",
         "path": [
            "P1002793"
         ],
         "vehicle": "{<val>=(-84);}",
         "expect": "{<P1002793>=(-84);}"
      }
   ],
   "P1002799": [
      {
         "action": "write",
         "path": [
            "P1002800"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002800>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1002800"
         ],
         "vehicle": "{<val>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}",
         "expect": "{<P1002800>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      }
   ],
   "P1002804": [
      {
         "action": "write",
         "path": [
            "P1002805"
         ],
         "vehicle": "{<val>=(-2);}",
         "expect": "{<P1002805>=(-2);}"
      }
   ],
   "P1002809": [
      {
         "action": "write",
         "path": [
            "P1002810"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1002810"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1002816": [
      {
         "action": "write",
         "path": [
            "P1002817"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002817>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1002817"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002817>={};}"
      }
   ],
   "P1002825": [
      {
         "action": "write",
         "path": [
            "P1002826"
         ],
         "vehicle": "{<val>=<5t5t5t>;}",
         "expect": "{<P1002826>=<5t5t5t>;}"
      },
      {
         "action": "write",
         "path": [
            "P1002826"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002826>={};}"
      }
   ],
   "P1002830": [
      {
         "action": "write",
         "path": [
            "P1002831"
         ],
         "vehicle": "{<val>=<foo>;}",
         "expect": "{<P1002831>=<foo>;}"
      },
      {
         "action": "write",
         "path": [
            "P1002831"
         ],
         "vehicle": "{<val>=(-75.64);}",
         "expect": "{<P1002831>=(-75.64);}"
      },
      {
         "action": "write",
         "path": [
            "P1002831"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002831>=~;}"
      }
   ],
   "P1002832": [
      {
         "action": "write",
         "path": [
            "P1002833"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1002839": [
      {
         "action": "write",
         "path": [
            "P1002840"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1002843": [
      {
         "action": "write",
         "path": [
            "P1002844"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1002844"
         ],
         "vehicle": "{<val>=!;}",
         "expect": "{<P1002844>=!;}"
      },
      {
         "action": "write",
         "path": [
            "P1002844"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1002844>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      },
      {
         "action": "write",
         "path": [
            "P1002845"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{<P1002844>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      },
      {
         "action": "write",
         "path": [
            "P1002845"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002844>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];<P1002845>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1002845"
         ],
         "vehicle": "{<val>={<a>=[(0):];<b>=[(0):];};}",
         "expect": "{<P1002844>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];<P1002845>={<a>=[(0):];<b>=[(0):];};}"
      }
   ],
   "P1002848": [
      {
         "action": "write",
         "path": [
            "P1002849"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1002854": [
      {
         "action": "write",
         "path": [
            "P1002855"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1002861": [
      {
         "action": "write",
         "path": [
            "P1002862"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1002862"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1002866": [
      {
         "action": "write",
         "path": [
            "P1002867"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1002872": [
      {
         "action": "write",
         "path": [
            "P1002873"
         ],
         "vehicle": "{<val>=<foo>;}",
         "expect": "{<P1002873>=<foo>;}"
      }
   ],
   "P1002879": [
      {
         "action": "write",
         "path": [
            "P1002880"
         ],
         "vehicle": "{<val>={<n>={<n>={<n>={<the>=<who>;};};};};}",
         "expect": "{<P1002880>={<n>={<n>={<n>={<the>=<who>;};};};};}"
      },
      {
         "action": "write",
         "path": [
            "P1002880"
         ],
         "vehicle": "{<val>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}",
         "expect": "{<P1002880>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}"
      }
   ],
   "P1002886": [
      {
         "action": "write",
         "path": [
            "P1002887"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1002887>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      },
      {
         "action": "array",
         "path": [
            "P1002887"
         ],
         "vehicle": "[(2):<0>=<unshift>;<1>=[(0):];]",
         "expect": "{<P1002887>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      }
   ],
   "P1002891": [
      {
         "action": "write",
         "path": [
            "P1002892"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1002892"
         ],
         "vehicle": "{<val>=@;}",
         "expect": "{<P1002892>=@;}"
      },
      {
         "action": "write",
         "path": [
            "P1002892"
         ],
         "vehicle": "{<val>={<n>={<n>={<n>={<the>=<who>;};};};};}",
         "expect": "{<P1002892>={<n>={<n>={<n>={<the>=<who>;};};};};}"
      }
   ],
   "P1002896": [
      {
         "action": "write",
         "path": [
            "P1002897"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002897>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1002897"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002897>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1002897"
         ],
         "vehicle": "{<val>=<ee efwdfb >;}",
         "expect": "{<P1002897>=<ee efwdfb >;}"
      },
      {
         "action": "write",
         "path": [
            "P1002898"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002897>=<ee efwdfb >;<P1002898>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1002898"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1002897>=<ee efwdfb >;<P1002898>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      }
   ],
   "P1002904": [
      {
         "action": "write",
         "path": [
            "P1002905"
         ],
         "vehicle": "{<val>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}",
         "expect": "{<P1002905>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}"
      },
      {
         "action": "array",
         "path": [
            "P1002905"
         ],
         "vehicle": "[(2):<0>=<splice>;<1>=[(2):<0>=(0);<1>=(1000);];]",
         "expect": "{<P1002905>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1002905"
         ],
         "vehicle": "[(2):<0>=<splice>;<1>=[(5):<0>=(1000);<1>=(0);<2>=(10);<3>=(20);<4>=(30);];]",
         "expect": "{<P1002905>=[(3):<0>=(10);<1>=(20);<2>=(30);];}"
      }
   ],
   "P1002909": [
      {
         "action": "write",
         "path": [
            "P1002910"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002910>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1002910"
         ],
         "vehicle": "[(2):<0>=<unshift>;<1>=[(3):<0>=(1);<1>=<bar>;<2>=[(0):];];]",
         "expect": "{<P1002910>=[(3):<0>=(1);<1>=<bar>;<2>=[(0):];];}"
      }
   ],
   "P1002915": [
      {
         "action": "write",
         "path": [
            "P1002916"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002916>=[(0):];}"
      }
   ],
   "P1002923": [
      {
         "action": "write",
         "path": [
            "P1002924"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1002924>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      }
   ],
   "P1002927": [
      {
         "action": "write",
         "path": [
            "P1002928"
         ],
         "vehicle": "{<val>=(7340.1);}",
         "expect": "{<P1002928>=(7340.1);}"
      }
   ],
   "P1002933": [
      {
         "action": "write",
         "path": [
            "P1002934"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1002934"
         ],
         "vehicle": "{<val>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}",
         "expect": "{<P1002934>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}"
      },
      {
         "action": "array",
         "path": [
            "P1002934"
         ],
         "vehicle": "[(2):<0>=<write>;<1>=[(2):<0>=(20);<1>=<abcdefg>;];]",
         "expect": "{<P1002934>=[(21):<0>=(2);<1>=(3);<20>=<abcdefg>;<2>=(4);<3>=(5);];}"
      }
   ],
   "P1002937": [
      {
         "action": "write",
         "path": [
            "P1002938"
         ],
         "vehicle": "{<val>={<a>=[(0):];<b>=[(0):];};}",
         "expect": "{<P1002938>={<a>=[(0):];<b>=[(0):];};}"
      }
   ],
   "P1002941": [
      {
         "action": "write",
         "path": [
            "P1002942"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002942>={};}"
      }
   ],
   "P1002947": [
      {
         "action": "write",
         "path": [
            "P1002948"
         ],
         "vehicle": "{<val>=<23232323>;}",
         "expect": "{<P1002948>=<23232323>;}"
      },
      {
         "action": "write",
         "path": [
            "P1002948"
         ],
         "vehicle": "{<val>=<5t5t5t>;}",
         "expect": "{<P1002948>=<5t5t5t>;}"
      }
   ],
   "P1002953": [
      {
         "action": "write",
         "path": [
            "P1002954"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002954>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1002954"
         ],
         "vehicle": "{<val>=<ohjwfv>;}",
         "expect": "{<P1002954>=<ohjwfv>;}"
      }
   ],
   "P1002959": [
      {
         "action": "write",
         "path": [
            "P1002960"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002960>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1002960"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002960>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1002960"
         ],
         "vehicle": "[(2):<0>=<shift>;<1>=[(0):];]",
         "expect": "{<P1002960>=[(0):];}"
      }
   ],
   "P1002963": [
      {
         "action": "write",
         "path": [
            "P1002964"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1002964>=~;}"
      }
   ],
   "P1002971": [
      {
         "action": "write",
         "path": [
            "P1002972"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002972>=[(0):];}"
      },
      {
         "action": "write",
         "path": [
            "P1002972"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1002972>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      }
   ],
   "P1002977": [
      {
         "action": "write",
         "path": [
            "P1002978"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1002978>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      },
      {
         "action": "array",
         "path": [
            "P1002978"
         ],
         "vehicle": "[(2):<0>=<shift>;<1>=[(0):];]",
         "expect": "{<P1002978>=[(4):<0>=<quick>;<1>=<brown>;<2>=<fox>;<3>=<>;];}"
      },
      {
         "action": "array",
         "path": [
            "P1002978"
         ],
         "vehicle": "[(2):<0>=<push>;<1>=[(5):<0>=(1);<1>=(2);<2>=(3);<3>=(4);<4>=(5);];]",
         "expect": "{<P1002978>=[(9):<0>=<quick>;<1>=<brown>;<2>=<fox>;<3>=<>;<4>=(1);<5>=(2);<6>=(3);<7>=(4);<8>=(5);];}"
      },
      {
         "action": "array",
         "path": [
            "P1002978"
         ],
         "vehicle": "[(2):<0>=<shift>;<1>=[(0):];]",
         "expect": "{<P1002978>=[(8):<0>=<brown>;<1>=<fox>;<2>=<>;<3>=(1);<4>=(2);<5>=(3);<6>=(4);<7>=(5);];}"
      }
   ],
   "P1002981": [
      {
         "action": "write",
         "path": [
            "P1002982"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002982>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1002982"
         ],
         "vehicle": "{<val>={<a>=[(0):];<b>=[(0):];};}",
         "expect": "{<P1002982>={<a>=[(0):];<b>=[(0):];};}"
      },
      {
         "action": "write",
         "path": [
            "P1002982"
         ],
         "vehicle": "{<val>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}",
         "expect": "{<P1002982>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      },
      {
         "action": "write",
         "path": [
            "P1002982",
            "P1002984"
         ],
         "vehicle": "{<val>=<    >;}",
         "expect": "{<P1002982>={<P1002984>=<    >;<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      },
      {
         "action": "write",
         "path": [
            "P1002982",
            "P1002984"
         ],
         "vehicle": "{<val>={<n>={<n>={<n>={<the>=<who>;};};};};}",
         "expect": "{<P1002982>={<P1002984>={<n>={<n>={<n>={<the>=<who>;};};};};<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      }
   ],
   "P1002991": [
      {
         "action": "write",
         "path": [
            "P1002992"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1002992>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      },
      {
         "action": "array",
         "path": [
            "P1002992"
         ],
         "vehicle": "[(2):<0>=<push>;<1>=[(3):<0>=(1);<1>=<bar>;<2>=[(0):];];]",
         "expect": "{<P1002992>=[(8):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;<5>=(1);<6>=<bar>;<7>=[(0):];];}"
      },
      {
         "action": "array",
         "path": [
            "P1002992"
         ],
         "vehicle": "[(2):<0>=<unshift>;<1>=[(0):];]",
         "expect": "{<P1002992>=[(8):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;<5>=(1);<6>=<bar>;<7>=[(0):];];}"
      },
      {
         "action": "write",
         "path": [
            "P1002993"
         ],
         "vehicle": "{<val>=<ng9u13htgjonn kjwfvojwv woef\nefbkjnbwrv w efb>;}",
         "expect": "{<P1002992>=[(8):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;<5>=(1);<6>=<bar>;<7>=[(0):];];<P1002993>=<ng9u13htgjonn kjwfvojwv woef\nefbkjnbwrv w efb>;}"
      },
      {
         "action": "write",
         "path": [
            "P1002993"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1002992>=[(8):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;<5>=(1);<6>=<bar>;<7>=[(0):];];<P1002993>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1002993"
         ],
         "vehicle": "{<val>={<a>=[(0):];<b>=[(0):];};}",
         "expect": "{<P1002992>=[(8):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;<5>=(1);<6>=<bar>;<7>=[(0):];];<P1002993>={<a>=[(0):];<b>=[(0):];};}"
      }
   ],
   "P1002997": [
      {
         "action": "write",
         "path": [
            "P1002998"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002998>=[(0):];}"
      },
      {
         "action": "write",
         "path": [
            "P1002998"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1002998>=[(0):];}"
      }
   ],
   "P1003002": [
      {
         "action": "write",
         "path": [
            "P1003003"
         ],
         "vehicle": "{<val>=(0);}",
         "expect": "{<P1003003>=(0);}"
      }
   ],
   "P1003007": [
      {
         "action": "write",
         "path": [
            "P1003008"
         ],
         "vehicle": "{<val>=(1.04);}",
         "expect": "{<P1003008>=(1.04);}"
      },
      {
         "action": "write",
         "path": [
            "P1003008"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1003008>=[(0):];}"
      }
   ],
   "P1003014": [
      {
         "action": "write",
         "path": [
            "P1003015"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1003015>={};}"
      }
   ],
   "P1003023": [
      {
         "action": "write",
         "path": [
            "P1003024"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1003024>=[(0):];}"
      },
      {
         "action": "write",
         "path": [
            "P1003024"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1003024>=[(0):];}"
      }
   ],
   "P1003027": [
      {
         "action": "write",
         "path": [
            "P1003028"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1003028>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1003028"
         ],
         "vehicle": "{<val>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}",
         "expect": "{<P1003028>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}"
      },
      {
         "action": "write",
         "path": [
            "P1003028"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1003028>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1003028",
            "P1003029"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1003028>={<P1003029>=[(0):];};}"
      },
      {
         "action": "array",
         "path": [
            "P1003028",
            "P1003029"
         ],
         "vehicle": "[(2):<0>=<pop>;<1>=[(0):];]",
         "expect": "{<P1003028>={<P1003029>=[(0):];};}"
      }
   ],
   "P1003035": [
      {
         "action": "write",
         "path": [
            "P1003036"
         ],
         "vehicle": "{<val>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}",
         "expect": "{<P1003036>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}"
      }
   ],
   "P1003040": [
      {
         "action": "write",
         "path": [
            "P1003041"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1003041>=[(0):];}"
      }
   ],
   "P1003045": [
      {
         "action": "write",
         "path": [
            "P1003046"
         ],
         "vehicle": "{<val>=(0);}",
         "expect": "{<P1003046>=(0);}"
      },
      {
         "action": "write",
         "path": [
            "P1003046"
         ],
         "vehicle": "{<val>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}",
         "expect": "{<P1003046>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}"
      }
   ],
   "P1003051": [
      {
         "action": "write",
         "path": [
            "P1003052"
         ],
         "vehicle": "{<val>=<ee efwdfb >;}",
         "expect": "{<P1003052>=<ee efwdfb >;}"
      }
   ],
   "P1003058": [
      {
         "action": "write",
         "path": [
            "P1003059"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1003059>=~;}"
      },
      {
         "action": "write",
         "path": [
            "P1003059"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1003059>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1003059"
         ],
         "vehicle": "[(2):<0>=<pop>;<1>=[(0):];]",
         "expect": "{<P1003059>=[(0):];}"
      }
   ],
   "P1003065": [
      {
         "action": "write",
         "path": [
            "P1003066"
         ],
         "vehicle": "{<val>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}",
         "expect": "{<P1003066>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}"
      },
      {
         "action": "array",
         "path": [
            "P1003066"
         ],
         "vehicle": "[(2):<0>=<pop>;<1>=[(0):];]",
         "expect": "{<P1003066>=[(0):];}"
      }
   ],
   "P1003072": [
      {
         "action": "write",
         "path": [
            "P1003073"
         ],
         "vehicle": "{<val>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}",
         "expect": "{<P1003073>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}"
      },
      {
         "action": "array",
         "path": [
            "P1003073"
         ],
         "vehicle": "[(2):<0>=<reverse>;<1>=[(0):];]",
         "expect": "{<P1003073>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}"
      }
   ],
   "P1003079": [
      {
         "action": "write",
         "path": [
            "P1003080"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1003080>=[(0):];}"
      }
   ],
   "P1003082": [
      {
         "action": "write",
         "path": [
            "P1003083"
         ],
         "vehicle": "{<val>=@;}",
         "expect": "{<P1003083>=@;}"
      },
      {
         "action": "write",
         "path": [
            "P1003083"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1003083>=[(0):];}"
      }
   ],
   "P1003089": [
      {
         "action": "write",
         "path": [
            "P1003090"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1003090>=~;}"
      }
   ],
   "P1003094": [
      {
         "action": "write",
         "path": [
            "P1003095"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1003095>={};}"
      }
   ],
   "P1003100": [
      {
         "action": "write",
         "path": [
            "P1003101"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1003101>=[(0):];}"
      },
      {
         "action": "write",
         "path": [
            "P1003101"
         ],
         "vehicle": "{<val>=(0);}",
         "expect": "{<P1003101>=(0);}"
      }
   ],
   "P1003102": [
      {
         "action": "write",
         "path": [
            "P1003103"
         ],
         "vehicle": "{<val>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}",
         "expect": "{<P1003103>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}"
      },
      {
         "action": "write",
         "path": [
            "P1003103"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1003103>=[(0):];}"
      },
      {
         "action": "write",
         "path": [
            "P1003103"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1003103>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1003104"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1003103>={};<P1003104>=[(0):];}"
      }
   ],
   "P1003111": [
      {
         "action": "write",
         "path": [
            "P1003112"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1003112>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      },
      {
         "action": "array",
         "path": [
            "P1003112"
         ],
         "vehicle": "[(2):<0>=<write>;<1>=[(2):<0>=(20);<1>=<abcdefg>;];]",
         "expect": "{<P1003112>=[(21):<0>=(2);<1>=!;<20>=<abcdefg>;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      },
      {
         "action": "array",
         "path": [
            "P1003112"
         ],
         "vehicle": "[(2):<0>=<splice>;<1>=[(5):<0>=(0);<1>=(0);<2>=(1);<3>=(2);<4>=(3);];]",
         "expect": "{<P1003112>=[(24):<0>=(1);<1>=(2);<23>=<abcdefg>;<2>=(3);<3>=(2);<4>=!;<5>=<blah>;<6>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<7>={<a>=<asdf>;<b>=@;};];}"
      }
   ],
   "P1003119": [
      {
         "action": "write",
         "path": [
            "P1003120"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1003120>=[(0):];}"
      }
   ],
   "P1003124": [
      {
         "action": "write",
         "path": [
            "P1003125"
         ],
         "vehicle": "{<val>={<n>={<n>={<n>={<the>=<who>;};};};};}",
         "expect": "{<P1003125>={<n>={<n>={<n>={<the>=<who>;};};};};}"
      }
   ],
   "P1003130": [
      {
         "action": "write",
         "path": [
            "P1003131"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1003131>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1003131"
         ],
         "vehicle": "[(2):<0>=<splice>;<1>=[(2):<0>=(0);<1>=(1000);];]",
         "expect": "{<P1003131>=[(0):];}"
      }
   ],
   "P1003134": [
      {
         "action": "write",
         "path": [
            "P1003135"
         ],
         "vehicle": "{<val>=(0);}",
         "expect": "{<P1003135>=(0);}"
      }
   ],
   "P1003141": [
      {
         "action": "write",
         "path": [
            "P1003142"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1003142"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1003142>=[(0):];}"
      }
   ],
   "P1003144": [
      {
         "action": "write",
         "path": [
            "P1003145"
         ],
         "vehicle": "{<val>=(1);}",
         "expect": "{<P1003145>=(1);}"
      }
   ],
   "P1003149": [
      {
         "action": "write",
         "path": [
            "P1003150"
         ],
         "vehicle": "{<val>=< o3r83rg>;}",
         "expect": "{<P1003150>=< o3r83rg>;}"
      },
      {
         "action": "write",
         "path": [
            "P1003150"
         ],
         "vehicle": "{<val>=(4);}",
         "expect": "{<P1003150>=(4);}"
      }
   ],
   "P1003153": [
      {
         "action": "write",
         "path": [
            "P1003154"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1003154>=[(0):];}"
      }
   ],
   "P1003157": [
      {
         "action": "write",
         "path": [
            "P1003158"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1003163": [
      {
         "action": "write",
         "path": [
            "P1003164"
         ],
         "vehicle": "{<val>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}",
         "expect": "{<P1003164>=[(1):<0>=[(1):<0>=[(1):<0>=[(1):<0>=[(3):<0>=(1);<1>=(2);<2>=(3);];];];];];}"
      }
   ],
   "P1003171": [
      {
         "action": "write",
         "path": [
            "P1003172"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1003172>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      },
      {
         "action": "write",
         "path": [
            "P1003172"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1003172"
         ],
         "vehicle": "{<val>=<ohjwfv>;}",
         "expect": "{<P1003172>=<ohjwfv>;}"
      },
      {
         "action": "write",
         "path": [
            "P1003172"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      }
   ],
   "P1003177": [
      {
         "action": "write",
         "path": [
            "P1003178"
         ],
         "vehicle": "{<val>=!;}",
         "expect": "{<P1003178>=!;}"
      }
   ],
   "P1003181": [
      {
         "action": "write",
         "path": [
            "P1003182"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1003182>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      },
      {
         "action": "array",
         "path": [
            "P1003182"
         ],
         "vehicle": "[(2):<0>=<sort>;<1>=[(0):];]",
         "expect": "{<P1003182>=[(5):<0>=(2);<1>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<2>={<a>=<asdf>;<b>=@;};<3>=<blah>;<4>=!;];}"
      },
      {
         "action": "write",
         "path": [
            "P1003182"
         ],
         "vehicle": "{<val>=~;}",
         "expect": "{<P1003182>=~;}"
      }
   ],
   "P1003185": [
      {
         "action": "write",
         "path": [
            "P1003186"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1003186>=[(0):];}"
      },
      {
         "action": "array",
         "path": [
            "P1003186"
         ],
         "vehicle": "[(2):<0>=<unshift>;<1>=[(0):];]",
         "expect": "{<P1003186>=[(0):];}"
      }
   ],
   "P1003191": [
      {
         "action": "write",
         "path": [
            "P1003192"
         ],
         "vehicle": "{<val>=(7340.1);}",
         "expect": "{<P1003192>=(7340.1);}"
      }
   ],
   "P1003196": [
      {
         "action": "write",
         "path": [
            "P1003197"
         ],
         "vehicle": "{<val>={<a>=[(0):];<b>=[(0):];};}",
         "expect": "{<P1003197>={<a>=[(0):];<b>=[(0):];};}"
      },
      {
         "action": "write",
         "path": [
            "P1003197"
         ],
         "vehicle": "{<val>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}",
         "expect": "{<P1003197>={<b>=[(0):];<c>=[(1):<0>={<x>=(2);<y>=@;};];};}"
      },
      {
         "action": "write",
         "path": [
            "P1003197"
         ],
         "vehicle": "{<val>=(1);}",
         "expect": "{<P1003197>=(1);}"
      },
      {
         "action": "write",
         "path": [
            "P1003198"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1003197>=(1);<P1003198>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      },
      {
         "action": "array",
         "path": [
            "P1003198"
         ],
         "vehicle": "[(2):<0>=<shift>;<1>=[(0):];]",
         "expect": "{<P1003197>=(1);<P1003198>=[(4):<0>=<quick>;<1>=<brown>;<2>=<fox>;<3>=<>;];}"
      },
      {
         "action": "write",
         "path": [
            "P1003198"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1003197>=(1);<P1003198>=[(0):];}"
      },
      {
         "action": "write",
         "path": [
            "P1003199"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1003197>=(1);<P1003198>=[(0):];<P1003199>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1003199"
         ],
         "vehicle": "{<val>=<foo>;}",
         "expect": "{<P1003197>=(1);<P1003198>=[(0):];<P1003199>=<foo>;}"
      }
   ],
   "P1003207": [
      {
         "action": "write",
         "path": [
            "P1003208"
         ],
         "vehicle": "{<val>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}",
         "expect": "{<P1003208>=[(4):<0>=(2);<1>=(3);<2>=(4);<3>=(5);];}"
      },
      {
         "action": "write",
         "path": [
            "P1003208"
         ],
         "vehicle": "{<val>=[(0):];}",
         "expect": "{<P1003208>=[(0):];}"
      }
   ],
   "P1003214": [
      {
         "action": "write",
         "path": [
            "P1003215"
         ],
         "vehicle": "{<val>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}",
         "expect": "{<P1003215>={<arr>=[(1):<0>={<another>=[(1):<0>={<foo>=(4);};];};];<ridiculously long and unsociable key>=@;};}"
      },
      {
         "action": "write",
         "path": [
            "P1003215"
         ],
         "vehicle": "{<val>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}",
         "expect": "{<P1003215>=[(5):<0>=(2);<1>=!;<2>=<blah>;<3>=[(3):<0>=(3);<1>=@;<2>=<ecky>;];<4>={<a>=<asdf>;<b>=@;};];}"
      }
   ],
   "P1003217": [
      {
         "action": "write",
         "path": [
            "P1003218"
         ],
         "vehicle": "{<val>=<23232323>;}",
         "expect": "{<P1003218>=<23232323>;}"
      }
   ],
   "P1003222": [
      {
         "action": "write",
         "path": [
            "P1003223"
         ],
         "vehicle": "{<val>=<foo>;}",
         "expect": "{<P1003223>=<foo>;}"
      },
      {
         "action": "write",
         "path": [
            "P1003223"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1003223>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      },
      {
         "action": "array",
         "path": [
            "P1003223"
         ],
         "vehicle": "[(2):<0>=<pop>;<1>=[(0):];]",
         "expect": "{<P1003223>=[(4):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;];}"
      },
      {
         "action": "array",
         "path": [
            "P1003223"
         ],
         "vehicle": "[(2):<0>=<splice>;<1>=[(2):<0>=(0);<1>=(1000);];]",
         "expect": "{<P1003223>=[(0):];}"
      }
   ],
   "P1003227": [
      {
         "action": "write",
         "path": [
            "P1003228"
         ],
         "vehicle": "{<val>=_;}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1003228"
         ],
         "vehicle": "{<val>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}",
         "expect": "{<P1003228>=[(5):<0>=<the>;<1>=<quick>;<2>=<brown>;<3>=<fox>;<4>=<>;];}"
      },
      {
         "action": "write",
         "path": [
            "P1003228"
         ],
         "vehicle": "{<val>={};}",
         "expect": "{<P1003228>={};}"
      },
      {
         "action": "write",
         "path": [
            "P1003228"
         ],
         "vehicle": "{<val>=<ohjwfv>;}",
         "expect": "{<P1003228>=<ohjwfv>;}"
      }
   ]
}
