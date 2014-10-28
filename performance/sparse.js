
var ay = [1,2,3,4,5,6]
delete ay[0];
ay.sort();
//Now we have length 6 but a non-existent entry at the end
ay[1]=undefined;
ay[2]=null;
delete ay[3];
ay.foo = 'bar';
//Now we have [2,undefined, null, nothing at all, 6, nothing at all]

function authentic(a) {
  return (
    a.length === 6 &&
    a[0] === 2 &&
    a[1] === undefined &&
    a[2] === null &&
    a[3] === undefined &&
    a[4] === 6 &&
    a[5] === undefined &&
    a.foo === 'bar' );
}


