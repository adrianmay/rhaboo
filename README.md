Rhaboo
======

<img src="logo.png" width="150px;"/>

Website at http://rhaboo.org

What is it?
-----------

This library gives a JS programmer persistence whilst staying close to the JS object model. In other words, it makes ordinary JS objects (including deeply nested ones) persist as if by magic.

The usual approach to this problem is to stringify and parse the entire object, but that gives lousy performance on large datasets. For instance, if you had an array of 999 diary entries and the user added a 1000th, then the entire history would have to be parsed and re-stringified. Rhaboo is more cunning than that.

Another problem with stringify/parse is that they innacurately recreate objects, especially arrays. For instance, properties of arrays with non-numeric names are ignored and all sparse positions are filled with null. This library recreates objects and arrays more precisely.

It's highly portable because it only relies on HTML5's localStorage.

Persistence code runs in a background thread so the user interface remains snappy even when a lot of data changes are occuring. 

Quick Installation
------------------

Install with 

```
   npm install rhaboo
```

and point your browser at: 

```
   file://<wherever you npm-installed it>/node_modules/rhaboo/generate-tests/generated-pages/page.0.html
```

to check that it installed ok. Include the library in your HTML file:

```
   <script src="node_modules/rhaboo/rhaboo.min.js"></script>
```
or you can just grab rhaboo.min.js and put it wherever you like.

Installation for building or generating tests
---------------------------------------------

Using npm to download the devDependencies seems to pull the entire npm database, so I prefer:

```
   npm install grunt rhaboo
   cd node_modules/rhaboo
   npm install q grunt-contrib-uglify grunt-browserify seedrandom ajon
   grunt    # be patient with this
   firefox generate-tests/generated-pages/page.0.html
```

Usage
-----

Make a persistent object like this:

```
   var mystore = new Rhaboo.Persistent("Some unique name");
```
(If you forget the "new", expect Armageddon.)

The library immediately attempts to restore this object from localStorage. If it remains empty then this must be the first time your program was run on this machine, so you detect that fact and populate your store. On subsequent runs the contents of mystore will be as you left them.

You can read from it exactly like any other object:

```
   console.log(mystore.foo); 
```
but to modify it, instead of writing:
 
```
   mystore.foo = 123;  //Wrong!!!
```
or equivalently: 

```
   mystore["foo"] = 123;  //Wrong!!!
```
you should write:

```
   mystore.write("foo", 123);  //Right!!!
```

It's an ugly substitution but at least it's one-to-one so it doesn't affect your overall design.

You use that same write function for inserting new properties and modifying existing ones.  

Deletion of properties calls for another substitution. Instead of:

```
   delete mystore.foo;  //Wrong!!!
```

you should write:

```
   mystore.kill("foo");  //Right!!!
```

(Contrary to popular belief, setting a property to undefined is not the same as deleting it.) For arrays, splice should be used. 

You can also pass a complex object to `write`:

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

and apply `write` to its nested objects:

```
   mystore.foo.porky.write(1, 4);
```

All the standard array modifying functions work persistently:

```
   mystore.foo.pinky.push("bar");  
   mystore.foo.pinky.reverse();
```

There's no function to delete everything in a persistent, but that could be made simple by keeping everything in a single property of the persistent:

```
   mystore.write('killable', { 
      game: 'tiddlywinks', 
      player: { name: 'zorro', gender: 'm', hiscore: 10 
   } );
   mystore.write('killable', {} /* or undefined */ );
```

You may put non-numerically named properties into arrays or set object or array entries to null, undefined or non-existent. The persisted objects will behave just like those im memory. Regex- and function-valued properties are not supported.

You may have multiple persistent objects but that slows down the restore because each persistent has to examine every entry in localStorage, some of which are about other persistents. Best performance is obtained when everything is in a single persistent and localStorage is not used in any other way.

Rhaboo adds a property called `_rhaboo` to each object it makes persistent, but this won't show up in standard iterations of the form:

```
   for ( var key in object ) {
      if ( object.hasOwnProperty(key) ) {
         var val = object[key];
         ...
      }
   }
```

because Object.prototype.hasOwnProperty has been replaced with one that returns false for `_rhaboo`.

Browserification
----------------

If you use node.js modules or browserify, you can treat src/arr.js as the module which delivers all of rhaboo. In src/unbrowserify.js (which is what browserify renders into ./rhaboo.max.js) you can see how the module.exports from arr.js is assigned to something called Rhaboo at global scope. This is to hand rhaboo's facilities to people who can't write "require" cos they're in a browser and don't use browserify. A similar trick is done to the src/enq.js module to make a non-modularised version at ./enq.js.





