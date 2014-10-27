#!/bin/bash

echo "<html><body>" > index.htm
for F in `ls -1 *.html` 
do 
  echo "<a href='$F'>$F</a><br/>" >> index.htm
done
echo "</body></html>" >> index.htm
