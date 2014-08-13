Rhaboo
======

*This is still very alpha: don't use it yet*

*Website at http://adrianmay.github.io/rhaboo*

*Tests/examples at http://adrianmay.github.io/rhaboo/tests*

What is it?
-----------

This library gives a JS programmer persistence whilst staying close to the JS object model. In other words, it makes ordinary JS objects (includng deeply nested ones) persist as if by magic.

The usual approach to this problem is to stringify and parse the entire object, but that gives lousy performance on large datasets. For instance, if you had an array of 999 diary entries and the user added a 1000th, then the entire history would have to be parsed and re-stringified. Rhaboo is more cunning than that.

It's highly portable because it only relies on HTML5's localStorage.

Persistence code runs in a background thread so the user interface remains snappy even when a lot of data changes are occuring. Browsers nevertheless resist closing the window until the persistence code has completed.

Installation
------------

Install with 

```
   npm install rhaboo
```

and point your browser at: 

```
file://<wherever it is>/node_modules/rhaboo/tests/index.html
```

to check that it installed ok. Include the library in your HTML file:

```
   <script src="node_modules/rhaboo/rhaboo.min.js"></script>
```
or you can just grab rhaboo.min.js and put it wherever you like.

Usage
-----

Make a persistent object like this:

```
   var mystore = new Rhaboo.Persistent("Some unique name");
```
(If you forget the "new", expect Armageddon.)

The library immediately attempts to restore this object from localStorage. If it remains empty then this must be the first time your program was run on this machine, so you detect that fact and populate your store. On subsequent runs the contents of mystore will be as you left them.

You can read from it exactly like any other object, but to modify it, instead of writing:
 
```
   mystore.foo = 123; 
```
or equivalently: 
```
   mystore["foo"] = 123;
```

you should write:

```
   mystore.write("foo", 123);
```

It's an ugly substitution but at least it's one-to-one so it doesn't affect your overall design.

You use that same write function for inserting, modifying and deleting (by passing `undefined`) the properties in your store.

You can also pass a complex object to `write()`:

```
   mystore.write("foo", {   
     pinky: [],   
     perky: true,   
     porky: [   
       "The",   
       3,   
       "Musketeers",   
       {}   
     ]   
   } );
```

All the standard array modifying functions work persistently:

```
   mystore.foo.pinky.push("bar");  
   mystore.foo.pinky.reverse();
```

You can also take an exsting object and make it persistent:

```
   var mystore = { 1: "man", went: [2, "mow"] };  
   mystore._rhaboo_restore("Some unique name");
```

but this is discouraged because it begs the question of whether initialised entries should override stored ones or vice versa. The answer is the latter, but the question can be avoided altogether by using the Rhaboo constructor instead.

Browserification
----------------

If you use node.js modules or browserify, you can treat src/arr.js as the module which delivers all of rhaboo. In src/unbrowserify.js you can see how the module.exports from arr.js is assigned to something called Rhaboo at global scope. This is to hand rhaboo's facilities to people who can't write "require" cos they're in a browser and don't use browserify. A similar trick is done to the src/enq.js module to make a non-modularised version at ./enq.js.


