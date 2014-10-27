#!/bin/bash
(
cat <<HERE
<html>
<style>
th { padding-left:15px; padding-right:15px; } td { padding-left:15px; padding-right:15px; text-align:center; } td.l { text-align:left; }
</style>
<body><table>
<tr><th rowspan=2>Filename<th colspan=3>Result on 2GHz Core i7<th rowspan=2>Units</tr>
<tr><th>Firefox 31.2<th>Chrome 38.0<th>IE 11</tr>
HERE

for F in `ls -1 *.html` 
do 
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
done
echo "</table>"
R=`grep ResultFootnote *.html | sed 's/^.*://'`
echo "<pre>"
echo $R
echo "</pre>"
echo "</body></html>" 
) > index.htm
