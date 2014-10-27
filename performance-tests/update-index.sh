#!/bin/bash
(
echo "<html><body><table border=2>" 
echo "<tr><th rowspan=2>Filename<th colspan=3>Result<th rowspan=2>Units</tr>" 
echo "<tr><th>Firefox<th>Chrome<th>IE</tr>" 
for F in `ls -1 *.html` 
do 
  echo "<tr>" 
  echo "<td><a href='$F'>$F</a></td>" 
  R=`grep ResultFirefox $F | sed 's/^.*://'`; echo "<td>$R</td>" 
  R=`grep ResultChrome $F | sed 's/^.*://'`; echo "<td>$R</td>" 
  R=`grep ResultIE $F | sed 's/^.*://'`; echo "<td>$R</td>" 
  R=`grep ResultUnits $F | sed 's/^.*://'`; echo "<td>$R</td>" 
  echo "</tr>" 
done
echo "</table></body></html>" 
) > index.htm
