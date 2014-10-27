
var arraysize = 1000;
var reps = 5000;

var pigs=[
  "The quick brown fox jumps over the lazy dog. ",
  [1,[1,2,3,4,5,6],2,[1,2,3,4,5,6],3,[1,2,3,4,5,6],4,[1,2,3,4,5,6],5,[1,2,3,4,5,6],6],
  { foo: 'bar', 
    'hickory dickory': [true, false, 2, "blah"],
    23: { doobey: { foo: 'bar', 
      'hickory dickory': [true, false, 2, "blah"],
      23: { }
    } }
  },
];
var npigs = pigs.length;
