#!/bin/bash
(
cat <<HERE
<html>
<style>
th { padding-left:15px; padding-right:15px; } td { padding-left:15px; padding-right:15px; text-align:center; } td.l { text-align:left; }
</style>
<body>
<h1>Performance of persistence mechanisms</h1>
<table>
<tr><th rowspan=2>Link to Test<th colspan=3>Result on 2GHz Core i7<th rowspan=2>Units</tr>
<tr><th>Firefox 31.2<th>Chrome 38.0<th>IE 11</tr>
HERE

function line {
  F=$1
  FS=${F%.*}
  echo "<tr>" 
  echo "<td class='l'><a href='$F'>$FS</a></td>" 
  R=`grep ResultOverride $F | sed 's/^.*://'` 
  if [[ $R ]]
  then
    echo "<td colspan=4>$R</td>" 
  else
    R=`grep ResultFirefox $F | sed 's/^.*://'`; echo "<td>$R</td>" 
    R=`grep ResultChrome $F | sed 's/^.*://'`; echo "<td>$R</td>" 
    R=`grep ResultIE $F | sed 's/^.*://'`; echo "<td>$R</td>" 
    R=`grep ResultUnits $F | sed 's/^.*://'`; echo "<td>$R</td>" 
  fi
  echo "</tr>" 
}

for F in `ls -1 m*.html`; do line $F; done
for F in `ls -1 a*.html`; do line $F; done
for F in `ls -1 o*.html`; do line $F; done
for F in `ls -1 c*.html`; do line $F; done
for F in `ls -1 p*.html`; do line $F; done

echo "</table>"
R=`grep ResultFootnote *.html | sed 's/^.*://' | sed 's/$/\<br\/\>/'`
echo "<pre>"
echo $R
echo "</pre>"
cat <<HERE
<h3>General</h3>
<p>The timings are subjectively observed means over several attempts.
<p>The conditions usually favour disk and memory caches being populated
<p>Each test is run on rhaboo, on localForage using its chosen driver and on localForage forced to use localStorage
<h3>Many integers tests</h3>
<p>Here we have 10 integers independently stored in the medium and we consecutively overwrite them. For localForage these are 10 different keys. For rhaboo, a root persistent is always an object and cannot be a mere integer, so we use 10 properties in a single persistent.
<p>The results indicate that IndexedDB is spectacularly inefficient when asked to store lots of little things. It is, however, a lot more efficient when asked to store larger objects. Rhaboo beats everything in this scenario.
<h3>Array tests</h3>
<p>Here we have an array of 1000 integers which we first create and then stepwise overwrite. 
<p>We see that rhaboo is slower at creating the array but faster at making small updates to it. Both statements become more true with increasing array length. This is the expected result because rhaboo splits large objects over several localStorage entries without the benefit of native code. Stringifying is native and therefore fast, but wasteful if a large object is re-stringified for the sake of a small change.
<h3>Object tests</h3>
<p>In this case we have an array of 1000 references to one of three medium-sized objects. We initialise them without timing and then measure the time taken to overwrite them 1000 times with references to another of the same three objects.
<p>Rhaboo wins because each of the three objects is stored only once. The other mechanisms don't notice that there are only three of them and store them 1000 times over. Rhaboo has already stored the three objects during initialisation and merely needs to update references to them during the timed run. This resembles the behaviour of JS objects in memory.
<h3>Circular tests</h3>
<p>Here we see that rhaboo and IndexedDB can deal with structures where child properties reference their containing ancestors, a simple example of which is defined in circular.js and used in this test. JSON.stringify detects such cases and explicitly chickens out, but we can only see the evidence in the console log because localForage fails to reject the promise correctly.




HERE
echo "</body></html>" 
) > index.htm
