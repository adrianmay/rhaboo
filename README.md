Rhaboo
======

What is it?
-----------

This library gives a JS programmer persistence whilst staying close to the JS object model. In other words, it makes ordinary JS objects (includng deeply nested ones) persist as if by magic.

The usual approach to this problem is to strigify and parse the entire object, but that gives lousy performance on large datasets. For instance, if you had an array of 999 diary entries and the user added a 1000th, then the entire history would have to be parsed and re-stringified. Rhaboo is more cunning than that.

It's highly portable because it only relies on HTML5's localStorage.

Persistence code runs in a background thread so the user interface remains snappy even when a lot of data changes are occuring.

