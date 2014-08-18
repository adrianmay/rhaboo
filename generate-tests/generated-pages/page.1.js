var page = 1;
var persistents = {
   "P1000001": [
      {
         "expect": "{\"P1000002\":1}"
      },
      {
         "action": "write",
         "path": [
            "P1000003"
         ],
         "vehicle": "{\"val\":[]}",
         "expect": "{\"P1000002\":1,\"P1000003\":[]}"
      },
      {
         "action": "write",
         "path": [
            "P1000003"
         ],
         "vehicle": "{\"val\":[2,false,\"blah\",[3,true,\"ecky\"],{\"a\":\"asdf\",\"b\":true}]}",
         "expect": "{\"P1000002\":1,\"P1000003\":[2,false,\"blah\",[3,true,\"ecky\"],{\"a\":\"asdf\",\"b\":true}]}"
      }
   ],
   "P1000022": [
      {
         "expect": "{\"P1000023\":{\"ridiculously long and unsociable key\":true,\"arr\":[{\"another\":[{\"foo\":4}]}]}}"
      },
      {
         "action": "write",
         "path": [
            "P1000023"
         ],
         "vehicle": "{\"val\":null}",
         "expect": "{\"P1000023\":null}"
      }
   ],
   "P1000038": [
      {
         "expect": "{\"P1000039\":[null]}"
      }
   ],
   "P1000058": [
      {
         "expect": "{\"P1000059\":[],\"P1000060\":{\"n\":{\"n\":{\"n\":{\"the\":\"who\"}}}}}"
      },
      {
         "action": "write",
         "path": [
            "P1000060"
         ],
         "vehicle": "{\"val\":[]}",
         "expect": "{\"P1000059\":[],\"P1000060\":[]}"
      }
   ],
   "P1000076": [
      {
         "expect": "{\"P1000077\":[2,3,4,5],\"P1000078\":{}}"
      },
      {
         "action": "write",
         "path": [
            "P1000078"
         ],
         "vehicle": "{\"val\":[]}",
         "expect": "{\"P1000077\":[2,3,4,5],\"P1000078\":[]}"
      }
   ],
   "P1000093": [
      {
         "expect": "{\"P1000094\":{\"foo\":2,\"bar\":[\"the\",3,\"little\",true]}}"
      },
      {
         "action": "write",
         "path": [
            "P1000094"
         ],
         "vehicle": "{\"val\":[]}",
         "expect": "{\"P1000094\":[]}"
      },
      {
         "action": "write",
         "path": [
            "P1000094"
         ],
         "vehicle": "{\"val\":\"je e\"}",
         "expect": "{\"P1000094\":\"je e\"}"
      },
      {
         "action": "write",
         "path": [
            "P1000094"
         ],
         "vehicle": "{\"val\":[]}",
         "expect": "{\"P1000094\":[]}"
      }
   ],
   "P1000118": [
      {
         "expect": "{\"P1000119\":[]}"
      }
   ],
   "P1000125": [
      {
         "expect": "{\"P1000126\":[]}"
      },
      {
         "action": "write",
         "path": [
            "P1000126"
         ],
         "vehicle": "{\"val\":\"    \"}",
         "expect": "{\"P1000126\":\"    \"}"
      },
      {
         "action": "write",
         "path": [
            "P1000126"
         ],
         "vehicle": "{\"val\":{}}",
         "expect": "{\"P1000126\":{}}"
      }
   ],
   "P1000144": [
      {
         "expect": "{\"P1000145\":[]}"
      }
   ],
   "P1000158": [
      {
         "expect": "{\"P1000159\":null}"
      },
      {
         "action": "write",
         "path": [
            "P1000159"
         ],
         "vehicle": "{\"val\":{}}",
         "expect": "{\"P1000159\":{}}"
      },
      {
         "action": "write",
         "path": [
            "P1000159"
         ],
         "vehicle": "{}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1000159"
         ],
         "vehicle": "{\"val\":{\"n\":{\"n\":{\"n\":{\"the\":\"who\"}}}}}",
         "expect": "{\"P1000159\":{\"n\":{\"n\":{\"n\":{\"the\":\"who\"}}}}}"
      }
   ],
   "P1000180": [
      {
         "expect": "{\"P1000181\":[[[[[1,2,3]]]]]}"
      },
      {
         "action": "write",
         "path": [
            "P1000182"
         ],
         "vehicle": "{\"val\":4}",
         "expect": "{\"P1000181\":[[[[[1,2,3]]]]],\"P1000182\":4}"
      },
      {
         "action": "write",
         "path": [
            "P1000182"
         ],
         "vehicle": "{\"val\":0}",
         "expect": "{\"P1000181\":[[[[[1,2,3]]]]],\"P1000182\":0}"
      }
   ],
   "P1000200": [
      {
         "expect": "{\"P1000201\":[\"the\",\"quick\",\"brown\",\"fox\",\"\",\"foo\",{\"1\":\"man\",\"went\":[2,\"mow\"]}]}"
      }
   ],
   "P1000217": [
      {
         "expect": "{\"P1000218\":1.04}"
      },
      {
         "action": "write",
         "path": [
            "P1000218"
         ],
         "vehicle": "{\"val\":{\"n\":{\"n\":{\"n\":{\"the\":\"who\"}}}}}",
         "expect": "{\"P1000218\":{\"n\":{\"n\":{\"n\":{\"the\":\"who\"}}}}}"
      }
   ],
   "P1000238": [
      {
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1000239"
         ],
         "vehicle": "{\"val\":{\"foo\":2,\"bar\":[\"the\",3,\"little\",true]}}",
         "expect": "{\"P1000239\":{\"foo\":2,\"bar\":[\"the\",3,\"little\",true]}}"
      },
      {
         "action": "write",
         "path": [
            "P1000239"
         ],
         "vehicle": "{\"val\":[2,3,4,5]}",
         "expect": "{\"P1000239\":[2,3,4,5]}"
      },
      {
         "action": "write",
         "path": [
            "P1000240"
         ],
         "vehicle": "{\"val\":[\"the\",\"quick\",\"brown\",\"fox\",\"\"]}",
         "expect": "{\"P1000239\":[2,3,4,5],\"P1000240\":[\"the\",\"quick\",\"brown\",\"fox\",\"\"]}"
      }
   ],
   "P1000265": [
      {
         "expect": "{\"P1000266\":{\"n\":{\"n\":{\"n\":{\"the\":\"who\"}}}}}"
      },
      {
         "action": "write",
         "path": [
            "P1000266"
         ],
         "vehicle": "{\"val\":[2,3,4,5]}",
         "expect": "{\"P1000266\":[2,3,4,5]}"
      }
   ],
   "P1000279": [
      {
         "expect": "{\"P1000280\":null}"
      },
      {
         "action": "write",
         "path": [
            "P1000280"
         ],
         "vehicle": "{\"val\":-75.64}",
         "expect": "{\"P1000280\":-75.64}"
      }
   ],
   "P1000302": [
      {
         "expect": "{\"P1000303\":[]}"
      }
   ],
   "P1000324": [
      {
         "expect": "{\"P1000325\":{}}"
      },
      {
         "action": "write",
         "path": [
            "P1000325"
         ],
         "vehicle": "{}",
         "expect": "{}"
      }
   ],
   "P1000348": [
      {
         "expect": "{\"P1000349\":[\"the\",\"quick\",\"brown\",\"fox\",\"\"]}"
      }
   ],
   "P1000367": [
      {
         "expect": "{\"P1000368\":[\"quick\",\"brown\",\"fox\",\"\"]}"
      }
   ],
   "P1000388": [
      {
         "expect": "{\"P1000389\":[[[[[1,2,3]]]]]}"
      },
      {
         "action": "write",
         "path": [
            "P1000390"
         ],
         "vehicle": "{\"val\":123}",
         "expect": "{\"P1000389\":[[[[[1,2,3]]]]],\"P1000390\":123}"
      }
   ],
   "P1000411": [
      {
         "expect": "{\"P1000412\":[]}"
      },
      {
         "action": "write",
         "path": [
            "P1000412"
         ],
         "vehicle": "{\"val\":[[[[[1,2,3]]]]]}",
         "expect": "{\"P1000412\":[[[[[1,2,3]]]]]}"
      }
   ],
   "P1000432": [
      {
         "expect": "{\"P1000433\":\"5t5t5t\"}"
      },
      {
         "action": "write",
         "path": [
            "P1000434"
         ],
         "vehicle": "{\"val\":{}}",
         "expect": "{\"P1000433\":\"5t5t5t\",\"P1000434\":{}}"
      }
   ],
   "P1000457": [
      {
         "expect": "{\"P1000458\":[2,false,\"blah\",[3,true,\"ecky\"],{\"a\":\"asdf\",\"b\":true}]}"
      },
      {
         "action": "write",
         "path": [
            "P1000458"
         ],
         "vehicle": "{\"val\":null}",
         "expect": "{\"P1000458\":null}"
      }
   ],
   "P1000477": [
      {
         "expect": "{\"P1000478\":{}}"
      },
      {
         "action": "write",
         "path": [
            "P1000478"
         ],
         "vehicle": "{\"val\":{}}",
         "expect": "{\"P1000478\":{}}"
      },
      {
         "action": "write",
         "path": [
            "P1000478"
         ],
         "vehicle": "{}",
         "expect": "{}"
      }
   ],
   "P1000504": [
      {
         "expect": "{\"P1000505\":[]}"
      }
   ],
   "P1000519": [
      {
         "expect": "{\"P1000520\":[[[[[1,2,3]]]]]}"
      }
   ],
   "P1000533": [
      {
         "expect": "{\"P1000534\":[null]}"
      }
   ],
   "P1000542": [
      {
         "expect": "{\"P1000543\":{\"a\":[],\"b\":[]}}"
      },
      {
         "action": "write",
         "path": [
            "P1000543"
         ],
         "vehicle": "{\"val\":\"5t5t5t\"}",
         "expect": "{\"P1000543\":\"5t5t5t\"}"
      },
      {
         "action": "write",
         "path": [
            "P1000543"
         ],
         "vehicle": "{\"val\":{}}",
         "expect": "{\"P1000543\":{}}"
      }
   ],
   "P1000564": [
      {
         "expect": "{\"P1000565\":{}}"
      },
      {
         "action": "write",
         "path": [
            "P1000565"
         ],
         "vehicle": "{\"val\":[]}",
         "expect": "{\"P1000565\":[]}"
      },
      {
         "action": "write",
         "path": [
            "P1000565"
         ],
         "vehicle": "{\"val\":[]}",
         "expect": "{\"P1000565\":[]}"
      },
      {
         "action": "write",
         "path": [
            "P1000566"
         ],
         "vehicle": "{\"val\":123}",
         "expect": "{\"P1000565\":[],\"P1000566\":123}"
      }
   ],
   "P1000579": [
      {
         "expect": "{\"P1000580\":null}"
      },
      {
         "action": "write",
         "path": [
            "P1000581"
         ],
         "vehicle": "{\"val\":123}",
         "expect": "{\"P1000580\":null,\"P1000581\":123}"
      }
   ],
   "P1000609": [
      {
         "expect": "{\"P1000610\":null}"
      },
      {
         "action": "write",
         "path": [
            "P1000611"
         ],
         "vehicle": "{\"val\":{\"ridiculously long and unsociable key\":true,\"arr\":[{\"another\":[{\"foo\":4}]}]}}",
         "expect": "{\"P1000610\":null,\"P1000611\":{\"ridiculously long and unsociable key\":true,\"arr\":[{\"another\":[{\"foo\":4}]}]}}"
      },
      {
         "action": "write",
         "path": [
            "P1000611"
         ],
         "vehicle": "{\"val\":0}",
         "expect": "{\"P1000610\":null,\"P1000611\":0}"
      },
      {
         "action": "write",
         "path": [
            "P1000611"
         ],
         "vehicle": "{\"val\":{}}",
         "expect": "{\"P1000610\":null,\"P1000611\":{}}"
      }
   ],
   "P1000635": [
      {
         "expect": "{\"P1000636\":[]}"
      },
      {
         "action": "write",
         "path": [
            "P1000636"
         ],
         "vehicle": "{\"val\":-84}",
         "expect": "{\"P1000636\":-84}"
      },
      {
         "action": "write",
         "path": [
            "P1000636"
         ],
         "vehicle": "{\"val\":{\"ridiculously long and unsociable key\":true,\"arr\":[{\"another\":[{\"foo\":4}]}]}}",
         "expect": "{\"P1000636\":{\"ridiculously long and unsociable key\":true,\"arr\":[{\"another\":[{\"foo\":4}]}]}}"
      },
      {
         "action": "write",
         "path": [
            "P1000636",
            "P1000637"
         ],
         "vehicle": "{}",
         "expect": "{\"P1000636\":{\"ridiculously long and unsociable key\":true,\"arr\":[{\"another\":[{\"foo\":4}]}]}}"
      }
   ],
   "P1000639": [
      {
         "expect": "{\"P1000640\":[2,false,\"blah\",[3,true,\"ecky\"],{\"a\":\"asdf\",\"b\":true},1,2,3,4,5]}"
      }
   ],
   "P1000641": [
      {
         "expect": "{\"P1000642\":null}"
      },
      {
         "action": "write",
         "path": [
            "P1000642"
         ],
         "vehicle": "{\"val\":[2,3,4,5]}",
         "expect": "{\"P1000642\":[2,3,4,5]}"
      }
   ],
   "P1000668": [
      {
         "expect": "{\"P1000669\":false}"
      },
      {
         "action": "write",
         "path": [
            "P1000669"
         ],
         "vehicle": "{\"val\":{}}",
         "expect": "{\"P1000669\":{}}"
      }
   ],
   "P1000675": [
      {
         "expect": "{\"P1000676\":123}"
      },
      {
         "action": "write",
         "path": [
            "P1000676"
         ],
         "vehicle": "{\"val\":1}",
         "expect": "{\"P1000676\":1}"
      }
   ],
   "P1000700": [
      {
         "expect": "{\"P1000701\":[[[[[1,2,3]]]]]}"
      },
      {
         "action": "write",
         "path": [
            "P1000701"
         ],
         "vehicle": "{\"val\":[]}",
         "expect": "{\"P1000701\":[]}"
      }
   ],
   "P1000712": [
      {
         "expect": "{\"P1000713\":{}}"
      },
      {
         "action": "write",
         "path": [
            "P1000713"
         ],
         "vehicle": "{\"val\":43}",
         "expect": "{\"P1000713\":43}"
      }
   ],
   "P1000736": [
      {
         "expect": "{\"P1000737\":\"foo\",\"P1000738\":{}}"
      },
      {
         "action": "write",
         "path": [
            "P1000738"
         ],
         "vehicle": "{\"val\":[2,3,4,5]}",
         "expect": "{\"P1000737\":\"foo\",\"P1000738\":[2,3,4,5]}"
      },
      {
         "action": "write",
         "path": [
            "P1000738"
         ],
         "vehicle": "{\"val\":{\"ridiculously long and unsociable key\":true,\"arr\":[{\"another\":[{\"foo\":4}]}]}}",
         "expect": "{\"P1000737\":\"foo\",\"P1000738\":{\"ridiculously long and unsociable key\":true,\"arr\":[{\"another\":[{\"foo\":4}]}]}}"
      }
   ],
   "P1000747": [
      {
         "expect": "{\"P1000748\":{}}"
      },
      {
         "action": "write",
         "path": [
            "P1000748"
         ],
         "vehicle": "{\"val\":null}",
         "expect": "{\"P1000748\":null}"
      },
      {
         "action": "write",
         "path": [
            "P1000748"
         ],
         "vehicle": "{\"val\":[]}",
         "expect": "{\"P1000748\":[]}"
      }
   ],
   "P1000766": [
      {
         "expect": "{\"P1000767\":null}"
      },
      {
         "action": "write",
         "path": [
            "P1000767"
         ],
         "vehicle": "{\"val\":-75.64}",
         "expect": "{\"P1000767\":-75.64}"
      },
      {
         "action": "write",
         "path": [
            "P1000767"
         ],
         "vehicle": "{\"val\":true}",
         "expect": "{\"P1000767\":true}"
      }
   ],
   "P1000783": [
      {
         "expect": "{\"P1000784\":[\"the\",\"quick\",\"brown\",\"fox\",\"\"]}"
      }
   ],
   "P1000786": [
      {
         "expect": "{\"P1000787\":65535}"
      },
      {
         "action": "write",
         "path": [
            "P1000787"
         ],
         "vehicle": "{\"val\":{\"n\":{\"n\":{\"n\":{\"the\":\"who\"}}}}}",
         "expect": "{\"P1000787\":{\"n\":{\"n\":{\"n\":{\"the\":\"who\"}}}}}"
      },
      {
         "action": "write",
         "path": [
            "P1000787"
         ],
         "vehicle": "{\"val\":[[[[[1,2,3]]]]]}",
         "expect": "{\"P1000787\":[[[[[1,2,3]]]]]}"
      },
      {
         "action": "write",
         "path": [
            "P1000787"
         ],
         "vehicle": "{\"val\":{\"ridiculously long and unsociable key\":true,\"arr\":[{\"another\":[{\"foo\":4}]}]}}",
         "expect": "{\"P1000787\":{\"ridiculously long and unsociable key\":true,\"arr\":[{\"another\":[{\"foo\":4}]}]}}"
      }
   ],
   "P1000790": [
      {
         "expect": "{\"P1000791\":7340.1}"
      },
      {
         "action": "write",
         "path": [
            "P1000791"
         ],
         "vehicle": "{\"val\":[2,3,4,5]}",
         "expect": "{\"P1000791\":[2,3,4,5]}"
      },
      {
         "action": "write",
         "path": [
            "P1000791"
         ],
         "vehicle": "{\"val\":-84}",
         "expect": "{\"P1000791\":-84}"
      },
      {
         "action": "write",
         "path": [
            "P1000791"
         ],
         "vehicle": "{}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1000791"
         ],
         "vehicle": "{\"val\":[]}",
         "expect": "{\"P1000791\":[]}"
      }
   ],
   "P1000809": [
      {
         "expect": "{\"P1000810\":[\"the\",\"quick\",\"brown\",\"fox\"]}"
      }
   ],
   "P1000830": [
      {
         "expect": "{\"P1000831\":[\"the\",\"quick\",\"brown\",\"fox\",\"\"]}"
      }
   ],
   "P1000848": [
      {
         "expect": "{\"P1000849\":[1,\"bar\",[]]}"
      }
   ],
   "P1000869": [
      {
         "expect": "{\"P1000870\":[\"the\",\"quick\",\"brown\",\"fox\",\"\"]}"
      },
      {
         "action": "write",
         "path": [
            "P1000870"
         ],
         "vehicle": "{\"val\":{}}",
         "expect": "{\"P1000870\":{}}"
      },
      {
         "action": "write",
         "path": [
            "P1000870"
         ],
         "vehicle": "{\"val\":{\"n\":{\"n\":{\"n\":{\"the\":\"who\"}}}}}",
         "expect": "{\"P1000870\":{\"n\":{\"n\":{\"n\":{\"the\":\"who\"}}}}}"
      },
      {
         "action": "write",
         "path": [
            "P1000871"
         ],
         "vehicle": "{}",
         "expect": "{\"P1000870\":{\"n\":{\"n\":{\"n\":{\"the\":\"who\"}}}}}"
      },
      {
         "action": "write",
         "path": [
            "P1000871"
         ],
         "vehicle": "{\"val\":null}",
         "expect": "{\"P1000870\":{\"n\":{\"n\":{\"n\":{\"the\":\"who\"}}}},\"P1000871\":null}"
      },
      {
         "action": "write",
         "path": [
            "P1000871"
         ],
         "vehicle": "{\"val\":[]}",
         "expect": "{\"P1000870\":{\"n\":{\"n\":{\"n\":{\"the\":\"who\"}}}},\"P1000871\":[]}"
      },
      {
         "action": "write",
         "path": [
            "P1000872"
         ],
         "vehicle": "{\"val\":{\"ridiculously long and unsociable key\":true,\"arr\":[{\"another\":[{\"foo\":4}]}]}}",
         "expect": "{\"P1000870\":{\"n\":{\"n\":{\"n\":{\"the\":\"who\"}}}},\"P1000871\":[],\"P1000872\":{\"ridiculously long and unsociable key\":true,\"arr\":[{\"another\":[{\"foo\":4}]}]}}"
      }
   ],
   "P1000877": [
      {
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1000878"
         ],
         "vehicle": "{\"val\":{}}",
         "expect": "{\"P1000878\":{}}"
      }
   ],
   "P1000892": [
      {
         "expect": "{\"P1000893\":{}}"
      },
      {
         "action": "write",
         "path": [
            "P1000893"
         ],
         "vehicle": "{\"val\":844758}",
         "expect": "{\"P1000893\":844758}"
      },
      {
         "action": "write",
         "path": [
            "P1000893"
         ],
         "vehicle": "{\"val\":null}",
         "expect": "{\"P1000893\":null}"
      },
      {
         "action": "write",
         "path": [
            "P1000894"
         ],
         "vehicle": "{\"val\":false}",
         "expect": "{\"P1000893\":null,\"P1000894\":false}"
      },
      {
         "action": "write",
         "path": [
            "P1000894"
         ],
         "vehicle": "{\"val\":{\"foo\":2,\"bar\":[\"the\",3,\"little\",true]}}",
         "expect": "{\"P1000893\":null,\"P1000894\":{\"foo\":2,\"bar\":[\"the\",3,\"little\",true]}}"
      }
   ],
   "P1000913": [
      {
         "expect": "{\"P1000914\":[2,3,4,5]}"
      }
   ],
   "P1000919": [
      {
         "expect": "{\"P1000920\":[1,2,3]}"
      }
   ],
   "P1000938": [
      {
         "expect": "{\"P1000939\":[]}"
      }
   ],
   "P1000957": [
      {
         "expect": "{\"P1000958\":null}"
      },
      {
         "action": "write",
         "path": [
            "P1000958"
         ],
         "vehicle": "{\"val\":{\"a\":[],\"b\":[]}}",
         "expect": "{\"P1000958\":{\"a\":[],\"b\":[]}}"
      }
   ],
   "P1000964": [
      {
         "expect": "{\"P1000965\":{\"foo\":2,\"bar\":[\"the\",3,\"little\",true]}}"
      },
      {
         "action": "write",
         "path": [
            "P1000965",
            "P1000967"
         ],
         "vehicle": "{\"val\":null}",
         "expect": "{\"P1000965\":{\"foo\":2,\"bar\":[\"the\",3,\"little\",true],\"P1000967\":null}}"
      }
   ],
   "P1000981": [
      {
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1000983"
         ],
         "vehicle": "{\"val\":[2,false,\"blah\",[3,true,\"ecky\"],{\"a\":\"asdf\",\"b\":true}]}",
         "expect": "{\"P1000983\":[2,false,\"blah\",[3,true,\"ecky\"],{\"a\":\"asdf\",\"b\":true}]}"
      }
   ],
   "P1001001": [
      {
         "expect": "{\"P1001002\":{}}"
      },
      {
         "action": "write",
         "path": [
            "P1001002"
         ],
         "vehicle": "{}",
         "expect": "{}"
      }
   ],
   "P1001017": [
      {
         "expect": "{\"P1001018\":0}"
      },
      {
         "action": "write",
         "path": [
            "P1001018"
         ],
         "vehicle": "{\"val\":null}",
         "expect": "{\"P1001018\":null}"
      },
      {
         "action": "write",
         "path": [
            "P1001018"
         ],
         "vehicle": "{\"val\":[2,3,4,5]}",
         "expect": "{\"P1001018\":[2,3,4,5]}"
      }
   ],
   "P1001043": [
      {
         "expect": "{\"P1001044\":[10,20,30]}"
      }
   ],
   "P1001065": [
      {
         "expect": "{\"P1001066\":{\"foo\":2,\"bar\":[\"the\",3,\"little\",true]}}"
      },
      {
         "action": "write",
         "path": [
            "P1001066"
         ],
         "vehicle": "{\"val\":[]}",
         "expect": "{\"P1001066\":[]}"
      }
   ],
   "P1001088": [
      {
         "expect": "{\"P1001089\":{}}"
      },
      {
         "action": "write",
         "path": [
            "P1001089"
         ],
         "vehicle": "{\"val\":[]}",
         "expect": "{\"P1001089\":[]}"
      }
   ],
   "P1001110": [
      {
         "expect": "{\"P1001111\":null}"
      },
      {
         "action": "write",
         "path": [
            "P1001111"
         ],
         "vehicle": "{\"val\":[]}",
         "expect": "{\"P1001111\":[]}"
      }
   ],
   "P1001133": [
      {
         "expect": "{\"P1001134\":[]}"
      }
   ],
   "P1001154": [
      {
         "expect": "{\"P1001155\":{\"ridiculously long and unsociable key\":true,\"arr\":[{\"another\":[{\"foo\":4}]}]}}"
      },
      {
         "action": "write",
         "path": [
            "P1001155"
         ],
         "vehicle": "{\"val\":{\"foo\":2,\"bar\":[\"the\",3,\"little\",true]}}",
         "expect": "{\"P1001155\":{\"foo\":2,\"bar\":[\"the\",3,\"little\",true]}}"
      }
   ],
   "P1001180": [
      {
         "expect": "{\"P1001181\":[]}"
      },
      {
         "action": "write",
         "path": [
            "P1001181"
         ],
         "vehicle": "{\"val\":null}",
         "expect": "{\"P1001181\":null}"
      }
   ],
   "P1001198": [
      {
         "expect": "{\"P1001199\":[]}"
      }
   ],
   "P1001215": [
      {
         "expect": "{\"P1001216\":[2,false,\"blah\",[3,true,\"ecky\"],{\"a\":\"asdf\",\"b\":true}]}"
      },
      {
         "action": "write",
         "path": [
            "P1001217"
         ],
         "vehicle": "{\"val\":null}",
         "expect": "{\"P1001216\":[2,false,\"blah\",[3,true,\"ecky\"],{\"a\":\"asdf\",\"b\":true}],\"P1001217\":null}"
      }
   ],
   "P1001230": [
      {
         "expect": "{\"P1001231\":{}}"
      },
      {
         "action": "write",
         "path": [
            "P1001231"
         ],
         "vehicle": "{\"val\":null}",
         "expect": "{\"P1001231\":null}"
      }
   ],
   "P1001252": [
      {
         "expect": "{\"P1001253\":{}}"
      },
      {
         "action": "write",
         "path": [
            "P1001253"
         ],
         "vehicle": "{\"val\":{}}",
         "expect": "{\"P1001253\":{}}"
      },
      {
         "action": "write",
         "path": [
            "P1001254"
         ],
         "vehicle": "{}",
         "expect": "{\"P1001253\":{}}"
      }
   ],
   "P1001264": [
      {
         "expect": "{\"P1001265\":[\"the\",\"quick\",\"brown\",\"fox\",\"\"],\"P1001266\":[]}"
      }
   ],
   "P1001287": [
      {
         "expect": "{\"P1001288\":[1,2,3,2,3,4,5]}"
      },
      {
         "action": "write",
         "path": [
            "P1001289"
         ],
         "vehicle": "{\"val\":{}}",
         "expect": "{\"P1001288\":[1,2,3,2,3,4,5],\"P1001289\":{}}"
      },
      {
         "action": "write",
         "path": [
            "P1001289"
         ],
         "vehicle": "{}",
         "expect": "{\"P1001288\":[1,2,3,2,3,4,5]}"
      },
      {
         "action": "write",
         "path": [
            "P1001289"
         ],
         "vehicle": "{\"val\":[]}",
         "expect": "{\"P1001288\":[1,2,3,2,3,4,5],\"P1001289\":[]}"
      }
   ],
   "P1001310": [
      {
         "expect": "{\"P1001311\":{\"n\":{\"n\":{\"n\":{\"the\":\"who\"}}}}}"
      },
      {
         "action": "write",
         "path": [
            "P1001311"
         ],
         "vehicle": "{}",
         "expect": "{}"
      }
   ],
   "P1001328": [
      {
         "expect": "{\"P1001329\":true}"
      },
      {
         "action": "write",
         "path": [
            "P1001329"
         ],
         "vehicle": "{\"val\":\" o3r83rg\"}",
         "expect": "{\"P1001329\":\" o3r83rg\"}"
      },
      {
         "action": "write",
         "path": [
            "P1001329"
         ],
         "vehicle": "{\"val\":[\"the\",\"quick\",\"brown\",\"fox\",\"\"]}",
         "expect": "{\"P1001329\":[\"the\",\"quick\",\"brown\",\"fox\",\"\"]}"
      },
      {
         "action": "write",
         "path": [
            "P1001330"
         ],
         "vehicle": "{\"val\":43}",
         "expect": "{\"P1001329\":[\"the\",\"quick\",\"brown\",\"fox\",\"\"],\"P1001330\":43}"
      }
   ],
   "P1001351": [
      {
         "expect": "{\"P1001352\":-84}"
      },
      {
         "action": "write",
         "path": [
            "P1001352"
         ],
         "vehicle": "{\"val\":[]}",
         "expect": "{\"P1001352\":[]}"
      }
   ],
   "P1001359": [
      {
         "expect": "{\"P1001360\":[\"the\",\"quick\",\"brown\",\"fox\",\"\"]}"
      }
   ],
   "P1001380": [
      {
         "expect": "{\"P1001381\":null}"
      },
      {
         "action": "write",
         "path": [
            "P1001381"
         ],
         "vehicle": "{\"val\":\" o3r83rg\"}",
         "expect": "{\"P1001381\":\" o3r83rg\"}"
      }
   ],
   "P1001402": [
      {
         "expect": "{\"P1001403\":7340.1}"
      },
      {
         "action": "write",
         "path": [
            "P1001403"
         ],
         "vehicle": "{\"val\":[[[[[1,2,3]]]]]}",
         "expect": "{\"P1001403\":[[[[[1,2,3]]]]]}"
      },
      {
         "action": "write",
         "path": [
            "P1001403"
         ],
         "vehicle": "{\"val\":[]}",
         "expect": "{\"P1001403\":[]}"
      }
   ],
   "P1001425": [
      {
         "expect": "{\"P1001426\":7340.1}"
      },
      {
         "action": "write",
         "path": [
            "P1001426"
         ],
         "vehicle": "{\"val\":{}}",
         "expect": "{\"P1001426\":{}}"
      }
   ],
   "P1001452": [
      {
         "expect": "{\"P1001453\":{}}"
      },
      {
         "action": "write",
         "path": [
            "P1001453"
         ],
         "vehicle": "{\"val\":4}",
         "expect": "{\"P1001453\":4}"
      }
   ],
   "P1001468": [
      {
         "expect": "{\"P1001469\":{}}"
      },
      {
         "action": "write",
         "path": [
            "P1001469"
         ],
         "vehicle": "{}",
         "expect": "{}"
      }
   ],
   "P1001487": [
      {
         "expect": "{\"P1001488\":[]}"
      }
   ],
   "P1001508": [
      {
         "expect": "{\"P1001509\":{\"n\":{\"n\":{\"n\":{\"the\":\"who\"}}},\"P1001511\":[]}}"
      },
      {
         "action": "write",
         "path": [
            "P1001509",
            "P1001511"
         ],
         "vehicle": "{}",
         "expect": "{\"P1001509\":{\"n\":{\"n\":{\"n\":{\"the\":\"who\"}}}}}"
      }
   ],
   "P1001521": [
      {
         "expect": "{\"P1001522\":null}"
      },
      {
         "action": "write",
         "path": [
            "P1001522"
         ],
         "vehicle": "{\"val\":false}",
         "expect": "{\"P1001522\":false}"
      },
      {
         "action": "write",
         "path": [
            "P1001522"
         ],
         "vehicle": "{\"val\":[\"the\",\"quick\",\"brown\",\"fox\",\"\"]}",
         "expect": "{\"P1001522\":[\"the\",\"quick\",\"brown\",\"fox\",\"\"]}"
      }
   ],
   "P1001544": [
      {
         "expect": "{\"P1001545\":{}}"
      },
      {
         "action": "write",
         "path": [
            "P1001545"
         ],
         "vehicle": "{}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1001545"
         ],
         "vehicle": "{\"val\":43}",
         "expect": "{\"P1001545\":43}"
      }
   ],
   "P1001552": [
      {
         "expect": "{\"P1001553\":[]}"
      },
      {
         "action": "write",
         "path": [
            "P1001553"
         ],
         "vehicle": "{\"val\":-2}",
         "expect": "{\"P1001553\":-2}"
      }
   ],
   "P1001573": [
      {
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1001574"
         ],
         "vehicle": "{}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1001574"
         ],
         "vehicle": "{\"val\":844758}",
         "expect": "{\"P1001574\":844758}"
      },
      {
         "action": "write",
         "path": [
            "P1001575"
         ],
         "vehicle": "{\"val\":{\"c\":[{\"x\":2,\"y\":true}],\"b\":[]}}",
         "expect": "{\"P1001574\":844758,\"P1001575\":{\"c\":[{\"x\":2,\"y\":true}],\"b\":[]}}"
      }
   ],
   "P1001581": [
      {
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1001582"
         ],
         "vehicle": "{\"val\":null}",
         "expect": "{\"P1001582\":null}"
      },
      {
         "action": "write",
         "path": [
            "P1001583"
         ],
         "vehicle": "{\"val\":[]}",
         "expect": "{\"P1001582\":null,\"P1001583\":[]}"
      }
   ],
   "P1001599": [
      {
         "expect": "{\"P1001600\":{\"ridiculously long and unsociable key\":true,\"arr\":[{\"another\":[{\"foo\":4}]}]}}"
      },
      {
         "action": "write",
         "path": [
            "P1001600"
         ],
         "vehicle": "{}",
         "expect": "{}"
      }
   ],
   "P1001619": [
      {
         "expect": "{\"P1001620\":{\"P1001622\":844758}}"
      },
      {
         "action": "write",
         "path": [
            "P1001620",
            "P1001622"
         ],
         "vehicle": "{\"val\":[\"the\",\"quick\",\"brown\",\"fox\",\"\"]}",
         "expect": "{\"P1001620\":{\"P1001622\":[\"the\",\"quick\",\"brown\",\"fox\",\"\"]}}"
      }
   ],
   "P1001633": [
      {
         "expect": "{\"P1001634\":null}"
      },
      {
         "action": "write",
         "path": [
            "P1001634"
         ],
         "vehicle": "{\"val\":[2,3,4,5]}",
         "expect": "{\"P1001634\":[2,3,4,5]}"
      }
   ],
   "P1001651": [
      {
         "expect": "{\"P1001652\":[\"quick\",\"brown\",\"fox\",\"\"]}"
      }
   ],
   "P1001665": [
      {
         "expect": "{\"P1001666\":null}"
      },
      {
         "action": "write",
         "path": [
            "P1001666"
         ],
         "vehicle": "{}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1001667"
         ],
         "vehicle": "{\"val\":[]}",
         "expect": "{\"P1001667\":[]}"
      }
   ],
   "P1001690": [
      {
         "expect": "{\"P1001691\":[]}"
      }
   ],
   "P1001692": [
      {
         "expect": "{\"P1001693\":[\"\",\"fox\",\"brown\",\"quick\",\"the\"]}"
      },
      {
         "action": "write",
         "path": [
            "P1001694"
         ],
         "vehicle": "{\"val\":false}",
         "expect": "{\"P1001693\":[\"\",\"fox\",\"brown\",\"quick\",\"the\"],\"P1001694\":false}"
      }
   ],
   "P1001697": [
      {
         "expect": "{\"P1001698\":{\"a\":[],\"b\":[]}}"
      },
      {
         "action": "write",
         "path": [
            "P1001698"
         ],
         "vehicle": "{\"val\":\"    \"}",
         "expect": "{\"P1001698\":\"    \"}"
      },
      {
         "action": "write",
         "path": [
            "P1001698"
         ],
         "vehicle": "{\"val\":-75.64}",
         "expect": "{\"P1001698\":-75.64}"
      }
   ],
   "P1001724": [
      {
         "expect": "{\"P1001725\":{\"foo\":2,\"bar\":[\"the\",3,\"little\",true]}}"
      },
      {
         "action": "write",
         "path": [
            "P1001725"
         ],
         "vehicle": "{\"val\":false}",
         "expect": "{\"P1001725\":false}"
      },
      {
         "action": "write",
         "path": [
            "P1001725"
         ],
         "vehicle": "{\"val\":null}",
         "expect": "{\"P1001725\":null}"
      },
      {
         "action": "write",
         "path": [
            "P1001726"
         ],
         "vehicle": "{\"val\":{}}",
         "expect": "{\"P1001725\":null,\"P1001726\":{}}"
      }
   ],
   "P1001741": [
      {
         "expect": "{\"P1001742\":[]}"
      }
   ],
   "P1001765": [
      {
         "expect": "{\"P1001766\":null}"
      },
      {
         "action": "write",
         "path": [
            "P1001766"
         ],
         "vehicle": "{\"val\":[\"the\",\"quick\",\"brown\",\"fox\",\"\"]}",
         "expect": "{\"P1001766\":[\"the\",\"quick\",\"brown\",\"fox\",\"\"]}"
      }
   ],
   "P1001784": [
      {
         "expect": "{\"P1001785\":\" o3r83rg\"}"
      },
      {
         "action": "write",
         "path": [
            "P1001785"
         ],
         "vehicle": "{\"val\":[2,false,\"blah\",[3,true,\"ecky\"],{\"a\":\"asdf\",\"b\":true}]}",
         "expect": "{\"P1001785\":[2,false,\"blah\",[3,true,\"ecky\"],{\"a\":\"asdf\",\"b\":true}]}"
      },
      {
         "action": "write",
         "path": [
            "P1001785"
         ],
         "vehicle": "{}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1001785"
         ],
         "vehicle": "{\"val\":7340.1}",
         "expect": "{\"P1001785\":7340.1}"
      }
   ],
   "P1001803": [
      {
         "expect": "{\"P1001804\":{\"a\":[],\"b\":[]}}"
      },
      {
         "action": "write",
         "path": [
            "P1001804"
         ],
         "vehicle": "{\"val\":{\"c\":[{\"x\":2,\"y\":true}],\"b\":[]}}",
         "expect": "{\"P1001804\":{\"c\":[{\"x\":2,\"y\":true}],\"b\":[]}}"
      },
      {
         "action": "write",
         "path": [
            "P1001804"
         ],
         "vehicle": "{\"val\":true}",
         "expect": "{\"P1001804\":true}"
      }
   ],
   "P1001824": [
      {
         "expect": "{\"P1001825\":{\"ridiculously long and unsociable key\":true,\"arr\":[{\"another\":[{\"foo\":4}]}]}}"
      },
      {
         "action": "write",
         "path": [
            "P1001825"
         ],
         "vehicle": "{}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1001825"
         ],
         "vehicle": "{\"val\":null}",
         "expect": "{\"P1001825\":null}"
      }
   ],
   "P1001841": [
      {
         "expect": "{\"P1001843\":[10,20,30]}"
      },
      {
         "action": "write",
         "path": [
            "P1001844"
         ],
         "vehicle": "{\"val\":{}}",
         "expect": "{\"P1001843\":[10,20,30],\"P1001844\":{}}"
      }
   ],
   "P1001870": [
      {
         "expect": "{\"P1001871\":-75.64}"
      },
      {
         "action": "write",
         "path": [
            "P1001871"
         ],
         "vehicle": "{\"val\":{\"c\":[{\"x\":2,\"y\":true}],\"b\":[]}}",
         "expect": "{\"P1001871\":{\"c\":[{\"x\":2,\"y\":true}],\"b\":[]}}"
      }
   ],
   "P1001890": [
      {
         "expect": "{\"P1001891\":null}"
      },
      {
         "action": "write",
         "path": [
            "P1001891"
         ],
         "vehicle": "{\"val\":null}",
         "expect": "{\"P1001891\":null}"
      }
   ],
   "P1001894": [
      {
         "expect": "{\"P1001895\":[]}"
      },
      {
         "action": "write",
         "path": [
            "P1001896"
         ],
         "vehicle": "{\"val\":{\"a\":[],\"b\":[]}}",
         "expect": "{\"P1001895\":[],\"P1001896\":{\"a\":[],\"b\":[]}}"
      }
   ],
   "P1001917": [
      {
         "expect": "{\"P1001918\":null}"
      },
      {
         "action": "write",
         "path": [
            "P1001918"
         ],
         "vehicle": "{}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1001918"
         ],
         "vehicle": "{\"val\":{\"n\":{\"n\":{\"n\":{\"the\":\"who\"}}}}}",
         "expect": "{\"P1001918\":{\"n\":{\"n\":{\"n\":{\"the\":\"who\"}}}}}"
      },
      {
         "action": "write",
         "path": [
            "P1001918"
         ],
         "vehicle": "{\"val\":844758}",
         "expect": "{\"P1001918\":844758}"
      },
      {
         "action": "write",
         "path": [
            "P1001918"
         ],
         "vehicle": "{\"val\":\"je e\"}",
         "expect": "{\"P1001918\":\"je e\"}"
      }
   ],
   "P1001944": [
      {
         "expect": "{\"P1001945\":[]}"
      },
      {
         "action": "write",
         "path": [
            "P1001945"
         ],
         "vehicle": "{\"val\":844758}",
         "expect": "{\"P1001945\":844758}"
      }
   ],
   "P1001963": [
      {
         "expect": "{\"P1001964\":{\"n\":{\"n\":{\"n\":{\"the\":\"who\"}}}},\"P1001965\":\"23232323\"}"
      },
      {
         "action": "write",
         "path": [
            "P1001965"
         ],
         "vehicle": "{\"val\":-84}",
         "expect": "{\"P1001964\":{\"n\":{\"n\":{\"n\":{\"the\":\"who\"}}}},\"P1001965\":-84}"
      },
      {
         "action": "write",
         "path": [
            "P1001965"
         ],
         "vehicle": "{\"val\":null}",
         "expect": "{\"P1001964\":{\"n\":{\"n\":{\"n\":{\"the\":\"who\"}}}},\"P1001965\":null}"
      },
      {
         "action": "write",
         "path": [
            "P1001965"
         ],
         "vehicle": "{\"val\":[[[[[1,2,3]]]]]}",
         "expect": "{\"P1001964\":{\"n\":{\"n\":{\"n\":{\"the\":\"who\"}}}},\"P1001965\":[[[[[1,2,3]]]]]}"
      }
   ],
   "P1001976": [
      {
         "expect": "{\"P1001977\":[]}"
      },
      {
         "action": "write",
         "path": [
            "P1001977"
         ],
         "vehicle": "{\"val\":\"je e\"}",
         "expect": "{\"P1001977\":\"je e\"}"
      }
   ],
   "P1001997": [
      {
         "expect": "{\"P1001998\":{\"c\":[{\"x\":2,\"y\":true}],\"b\":[]}}"
      },
      {
         "action": "write",
         "path": [
            "P1001998"
         ],
         "vehicle": "{}",
         "expect": "{}"
      }
   ],
   "P1002020": [
      {
         "expect": "{\"P1002021\":\"23232323\"}"
      },
      {
         "action": "write",
         "path": [
            "P1002021"
         ],
         "vehicle": "{\"val\":null}",
         "expect": "{\"P1002021\":null}"
      }
   ],
   "P1002038": [
      {
         "expect": "{\"P1002039\":{}}"
      },
      {
         "action": "write",
         "path": [
            "P1002039"
         ],
         "vehicle": "{}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1002039"
         ],
         "vehicle": "{\"val\":{}}",
         "expect": "{\"P1002039\":{}}"
      }
   ],
   "P1002041": [
      {
         "expect": "{\"P1002042\":844758}"
      },
      {
         "action": "write",
         "path": [
            "P1002042"
         ],
         "vehicle": "{\"val\":{\"c\":[{\"x\":2,\"y\":true}],\"b\":[]}}",
         "expect": "{\"P1002042\":{\"c\":[{\"x\":2,\"y\":true}],\"b\":[]}}"
      },
      {
         "action": "write",
         "path": [
            "P1002042"
         ],
         "vehicle": "{\"val\":[2,false,\"blah\",[3,true,\"ecky\"],{\"a\":\"asdf\",\"b\":true}]}",
         "expect": "{\"P1002042\":[2,false,\"blah\",[3,true,\"ecky\"],{\"a\":\"asdf\",\"b\":true}]}"
      }
   ],
   "P1002059": [
      {
         "expect": "{\"P1002060\":{\"foo\":2,\"bar\":[\"the\",3,\"little\",true],\"P1002062\":[1,2,3]}}"
      },
      {
         "action": "write",
         "path": [
            "P1002060",
            "P1002062"
         ],
         "vehicle": "{\"val\":[2,false,\"blah\",[3,true,\"ecky\"],{\"a\":\"asdf\",\"b\":true}]}",
         "expect": "{\"P1002060\":{\"foo\":2,\"bar\":[\"the\",3,\"little\",true],\"P1002062\":[2,false,\"blah\",[3,true,\"ecky\"],{\"a\":\"asdf\",\"b\":true}]}}"
      }
   ],
   "P1002084": [
      {
         "expect": "{\"P1002085\":[]}"
      },
      {
         "action": "write",
         "path": [
            "P1002085"
         ],
         "vehicle": "{\"val\":{}}",
         "expect": "{\"P1002085\":{}}"
      },
      {
         "action": "write",
         "path": [
            "P1002085"
         ],
         "vehicle": "{\"val\":{}}",
         "expect": "{\"P1002085\":{}}"
      },
      {
         "action": "write",
         "path": [
            "P1002085",
            "P1002087"
         ],
         "vehicle": "{\"val\":0}",
         "expect": "{\"P1002085\":{\"P1002087\":0}}"
      }
   ],
   "P1002104": [
      {
         "expect": "{\"P1002105\":null}"
      },
      {
         "action": "write",
         "path": [
            "P1002105"
         ],
         "vehicle": "{\"val\":1}",
         "expect": "{\"P1002105\":1}"
      }
   ],
   "P1002126": [
      {
         "expect": "{\"P1002127\":-84}"
      },
      {
         "action": "write",
         "path": [
            "P1002127"
         ],
         "vehicle": "{\"val\":\"23232323\"}",
         "expect": "{\"P1002127\":\"23232323\"}"
      }
   ],
   "P1002145": [
      {
         "expect": "{\"P1002146\":\" o3r83rg\"}"
      },
      {
         "action": "write",
         "path": [
            "P1002146"
         ],
         "vehicle": "{\"val\":[2,false,\"blah\",[3,true,\"ecky\"],{\"a\":\"asdf\",\"b\":true}]}",
         "expect": "{\"P1002146\":[2,false,\"blah\",[3,true,\"ecky\"],{\"a\":\"asdf\",\"b\":true}]}"
      }
   ],
   "P1002172": [
      {
         "expect": "{\"P1002173\":[]}"
      }
   ],
   "P1002192": [
      {
         "expect": "{\"P1002193\":[]}"
      }
   ],
   "P1002212": [
      {
         "expect": "{\"P1002213\":{}}"
      },
      {
         "action": "write",
         "path": [
            "P1002213"
         ],
         "vehicle": "{\"val\":{\"c\":[{\"x\":2,\"y\":true}],\"b\":[]}}",
         "expect": "{\"P1002213\":{\"c\":[{\"x\":2,\"y\":true}],\"b\":[]}}"
      },
      {
         "action": "write",
         "path": [
            "P1002213"
         ],
         "vehicle": "{\"val\":[2,false,\"blah\",[3,true,\"ecky\"],{\"a\":\"asdf\",\"b\":true}]}",
         "expect": "{\"P1002213\":[2,false,\"blah\",[3,true,\"ecky\"],{\"a\":\"asdf\",\"b\":true}]}"
      }
   ],
   "P1002232": [
      {
         "expect": "{\"P1002233\":null}"
      },
      {
         "action": "write",
         "path": [
            "P1002233"
         ],
         "vehicle": "{\"val\":{\"n\":{\"n\":{\"n\":{\"the\":\"who\"}}}}}",
         "expect": "{\"P1002233\":{\"n\":{\"n\":{\"n\":{\"the\":\"who\"}}}}}"
      },
      {
         "action": "write",
         "path": [
            "P1002233",
            "P1002234"
         ],
         "vehicle": "{}",
         "expect": "{\"P1002233\":{\"n\":{\"n\":{\"n\":{\"the\":\"who\"}}}}}"
      },
      {
         "action": "write",
         "path": [
            "P1002233",
            "P1002234"
         ],
         "vehicle": "{\"val\":[2,false,\"blah\",[3,true,\"ecky\"],{\"a\":\"asdf\",\"b\":true}]}",
         "expect": "{\"P1002233\":{\"n\":{\"n\":{\"n\":{\"the\":\"who\"}}},\"P1002234\":[2,false,\"blah\",[3,true,\"ecky\"],{\"a\":\"asdf\",\"b\":true}]}}"
      }
   ],
   "P1002249": [
      {
         "expect": "{\"P1002250\":[]}"
      },
      {
         "action": "write",
         "path": [
            "P1002251"
         ],
         "vehicle": "{\"val\":\"foo\"}",
         "expect": "{\"P1002250\":[],\"P1002251\":\"foo\"}"
      },
      {
         "action": "write",
         "path": [
            "P1002251"
         ],
         "vehicle": "{\"val\":{\"n\":{\"n\":{\"n\":{\"the\":\"who\"}}}}}",
         "expect": "{\"P1002250\":[],\"P1002251\":{\"n\":{\"n\":{\"n\":{\"the\":\"who\"}}}}}"
      }
   ],
   "P1002268": [
      {
         "expect": "{\"P1002269\":{}}"
      },
      {
         "action": "write",
         "path": [
            "P1002269"
         ],
         "vehicle": "{\"val\":-2}",
         "expect": "{\"P1002269\":-2}"
      },
      {
         "action": "write",
         "path": [
            "P1002269"
         ],
         "vehicle": "{}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1002270"
         ],
         "vehicle": "{\"val\":\"ng9u13htgjonn kjwfvojwv woef\\nefbkjnbwrv w efb\"}",
         "expect": "{\"P1002270\":\"ng9u13htgjonn kjwfvojwv woef\\nefbkjnbwrv w efb\"}"
      }
   ],
   "P1002287": [
      {
         "expect": "{\"P1002288\":false}"
      },
      {
         "action": "write",
         "path": [
            "P1002288"
         ],
         "vehicle": "{\"val\":true}",
         "expect": "{\"P1002288\":true}"
      },
      {
         "action": "write",
         "path": [
            "P1002288"
         ],
         "vehicle": "{\"val\":{\"a\":[],\"b\":[]}}",
         "expect": "{\"P1002288\":{\"a\":[],\"b\":[]}}"
      },
      {
         "action": "write",
         "path": [
            "P1002288"
         ],
         "vehicle": "{\"val\":\" o3r83rg\"}",
         "expect": "{\"P1002288\":\" o3r83rg\"}"
      }
   ],
   "P1002308": [
      {
         "expect": "{\"P1002309\":true}"
      },
      {
         "action": "write",
         "path": [
            "P1002309"
         ],
         "vehicle": "{\"val\":{}}",
         "expect": "{\"P1002309\":{}}"
      }
   ],
   "P1002332": [
      {
         "expect": "{\"P1002333\":1}"
      },
      {
         "action": "write",
         "path": [
            "P1002333"
         ],
         "vehicle": "{\"val\":\"5t5t5t\"}",
         "expect": "{\"P1002333\":\"5t5t5t\"}"
      },
      {
         "action": "write",
         "path": [
            "P1002333"
         ],
         "vehicle": "{\"val\":[[[[[1,2,3]]]]]}",
         "expect": "{\"P1002333\":[[[[[1,2,3]]]]]}"
      }
   ],
   "P1002356": [
      {
         "expect": "{\"P1002357\":{\"ridiculously long and unsociable key\":true,\"arr\":[{\"another\":[{\"foo\":4}]}]}}"
      },
      {
         "action": "write",
         "path": [
            "P1002357"
         ],
         "vehicle": "{\"val\":\"    \"}",
         "expect": "{\"P1002357\":\"    \"}"
      }
   ],
   "P1002378": [
      {
         "expect": "{\"P1002379\":[2,3,4,5]}"
      }
   ],
   "P1002402": [
      {
         "expect": "{\"P1002403\":{}}"
      },
      {
         "action": "write",
         "path": [
            "P1002403"
         ],
         "vehicle": "{\"val\":{\"n\":{\"n\":{\"n\":{\"the\":\"who\"}}}}}",
         "expect": "{\"P1002403\":{\"n\":{\"n\":{\"n\":{\"the\":\"who\"}}}}}"
      },
      {
         "action": "write",
         "path": [
            "P1002403"
         ],
         "vehicle": "{\"val\":{}}",
         "expect": "{\"P1002403\":{}}"
      },
      {
         "action": "write",
         "path": [
            "P1002404"
         ],
         "vehicle": "{}",
         "expect": "{\"P1002403\":{}}"
      },
      {
         "action": "write",
         "path": [
            "P1002404"
         ],
         "vehicle": "{\"val\":null}",
         "expect": "{\"P1002403\":{},\"P1002404\":null}"
      }
   ],
   "P1002422": [
      {
         "expect": "{\"P1002423\":true}"
      },
      {
         "action": "write",
         "path": [
            "P1002423"
         ],
         "vehicle": "{\"val\":-84}",
         "expect": "{\"P1002423\":-84}"
      },
      {
         "action": "write",
         "path": [
            "P1002423"
         ],
         "vehicle": "{}",
         "expect": "{}"
      }
   ],
   "P1002439": [
      {
         "expect": "{\"P1002440\":[2,false,\"blah\",[3,true,\"ecky\"],{\"a\":\"asdf\",\"b\":true}]}"
      },
      {
         "action": "write",
         "path": [
            "P1002440"
         ],
         "vehicle": "{}",
         "expect": "{}"
      },
      {
         "action": "write",
         "path": [
            "P1002440"
         ],
         "vehicle": "{\"val\":43}",
         "expect": "{\"P1002440\":43}"
      },
      {
         "action": "write",
         "path": [
            "P1002441"
         ],
         "vehicle": "{\"val\":{}}",
         "expect": "{\"P1002440\":43,\"P1002441\":{}}"
      }
   ],
   "P1002457": [
      {
         "expect": "{\"P1002458\":[2,false,\"blah\",[3,true,\"ecky\"],{\"a\":\"asdf\",\"b\":true}]}"
      }
   ],
   "P1002461": [
      {
         "expect": "{\"P1002462\":[\"the\",\"quick\",\"brown\",\"fox\",\"\"]}"
      },
      {
         "action": "write",
         "path": [
            "P1002462"
         ],
         "vehicle": "{}",
         "expect": "{}"
      }
   ],
   "P1002484": [
      {
         "expect": "{\"P1002485\":{\"c\":[{\"x\":2,\"y\":true}],\"b\":[]}}"
      },
      {
         "action": "write",
         "path": [
            "P1002485",
            "P1002487"
         ],
         "vehicle": "{\"val\":[2,false,\"blah\",[3,true,\"ecky\"],{\"a\":\"asdf\",\"b\":true}]}",
         "expect": "{\"P1002485\":{\"c\":[{\"x\":2,\"y\":true}],\"b\":[],\"P1002487\":[2,false,\"blah\",[3,true,\"ecky\"],{\"a\":\"asdf\",\"b\":true}]}}"
      }
   ],
   "P1002498": [
      {
         "expect": "{\"P1002499\":[3,4,5]}"
      }
   ],
   "P1002518": [
      {
         "expect": "{\"P1002519\":[]}"
      }
   ],
   "P1002538": [
      {
         "expect": "{\"P1002539\":[2,3,4,5]}"
      },
      {
         "action": "write",
         "path": [
            "P1002539"
         ],
         "vehicle": "{\"val\":null}",
         "expect": "{\"P1002539\":null}"
      },
      {
         "action": "write",
         "path": [
            "P1002539"
         ],
         "vehicle": "{\"val\":[]}",
         "expect": "{\"P1002539\":[]}"
      }
   ],
   "P1002549": [
      {
         "expect": "{\"P1002550\":[]}"
      },
      {
         "action": "write",
         "path": [
            "P1002550"
         ],
         "vehicle": "{\"val\":{}}",
         "expect": "{\"P1002550\":{}}"
      }
   ],
   "P1002577": [
      {
         "expect": "{\"P1002578\":1.04}"
      },
      {
         "action": "write",
         "path": [
            "P1002578"
         ],
         "vehicle": "{\"val\":-75.64}",
         "expect": "{\"P1002578\":-75.64}"
      }
   ]
}
