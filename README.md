Rhaboo
======

<img src="logo.png" width="150px;"/>

Website at http://rhaboo.org

Please star the repo if you use it - Thx.
 
Thanks to <a href='https://github.com/brasofilo'>brasofilo</a> for the logo. 

What is it?
-----------

This library gives a JS programmer persistence whilst staying close to the JS object model. In other words, it makes ordinary JS objects (including deeply nested ones) persist as if by magic. The underlying storage is either localStorage or sessionStorage, as you choose.

The usual approach to this problem is to stringify and parse the entire object, but that gives lousy performance on large datasets. For instance, if you had an array of 999 diary entries and the user added a 1000th, then the entire history would have to be parsed and re-stringified. Rhaboo is more cunning than that.

Another problem with stringify/parse is that they innacurately recreate objects, especially arrays. For instance, properties of arrays with non-numeric names are ignored and all sparse positions are filled with null. This library recreates objects and arrays more precisely.

It's highly portable because it only relies on HTML5's localStorage. So you can use it on these browsers: http://caniuse.com/#feat=namevalue-storage

Persistence code is deferred with setTimeout so the user interface remains snappy even when a lot of data changes are occuring. 

When Rhaboo is unable to succesfully write to localStorage or sessionStorage, it will fallback to using [MemoryStorage](http://download.github.io/memorystorage/), memory-backed storage that implements the [Web Storage API](http://www.w3.org/TR/webstorage/), making it a drop-in replacement for `localStorage` and `sessionStorage` in environments where these are not available. One scenario in which localStorage is not available on modern browsers is Safari's Private Browsing mode, which caps localStorage at a quota of 0 bytes, making it effectively unusable. But Rhaboo is capable of dealing with this, making it a very robust way of working with Web Storage. Stored data won't survive page reloads, but it would be destroyed when the Private Browsing mode ends anyway. MemoryStorage is included in the Rhaboo distribution, so no need for extra libraries on the page.

Quick Installation
------------------

1. Download <a class='download plain' href="https://raw.githubusercontent.com/adrianmay/rhaboo/master/rhaboo.min.js" download>rhaboo.min.js</a> and include it with a script tag.

2. Install with 

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

Installation for building or generating tests
---------------------------------------------

First grunt should be instaled globally, e.g. with "sudo npm install -g grunt-cli"

Clone the rhaboo repo and then in its directory do:

```
   npm install grunt-contrib-uglify grunt-contrib-copy grunt-browserify seedrandom ajon parunpar memorystorage
   grunt    # be patient with this
   firefox generate-tests/generated-pages/page.0.html
```

(If grunt just exits immediately without output, you may have mistakenly installed a debian package called node. 
You need to uninstall that and do <a href='https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager#debian-and-ubuntu-based-linux-distributions'>this</a> instead. 
If you installed grunt while that package was installed, you can hack the #! of `which grunt` to say nodejs instead of node.)

Usage
-----

Make a persistent object like this:

```
   var mystore = Rhaboo.persistent("Some unique name"); //localStorage
   //or
   var mystore = Rhaboo.perishable("Some unique name"); //sessionStorage
```
(Honestly, 'new' is not desired here.)

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
   mystore.writeStore("foo", 123);  //Right!!!
```

It's an ugly substitution but at least it's one-to-one so it doesn't affect your overall design.

You use that same write function for inserting new properties and modifying existing ones.  

Deletion of properties calls for another substitution. Instead of:

```
   delete mystore.foo;  //Wrong!!!
```

you should write:

```
   mystore.erase("foo");  //Right!!!
```

(Contrary to popular belief, setting a property to undefined is not the same as deleting it.) For arrays, splice should be used. 

You can also pass a complex object to `write`:

```
   mystore.writeStore("foo", {   
     pinky: [],   
     perky: true,   
     porky: [   
       "The",   
       3,   
       "Musketeers",   
       new Date(),
       {}   
     ]   
   } );
```

and apply `write` to its nested objects:

```
   mystore.foo.porky.writeStore(1, 4);
```

All the standard array modifying functions work persistently:

```
   mystore.foo.pinky.push("bar");  
   mystore.foo.pinky.reverse();
```

There's no function to delete everything in a persistent, but that could be made simple by keeping everything in a single property of the persistent:

```
   mystore.writeStore('killable', { 
      game: 'tiddlywinks', 
      player: { name: 'zorro', gender: 'm', hiscore: 10 
   } );
   mystore.erase('killable');
```

You may have multiple root persistents, i.e. calls to Rhaboo.persistent/perishable - there's no performance penalty for this. You may have multiple persistent references to the same persistent object or sub-object within a given persistent or perishable, but please don't put references to perishable objects inside persistent ones or vice versa (there's no check for this - it will just go bonkers.) You may put non-numerically named properties into arrays or set object or array entries to null, undefined or non-existent. The persisted objects will behave just like those im memory. Regex- and function-valued properties are not supported.

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

If you use node.js modules or browserify, you can treat src/arr.js as the module which delivers all of rhaboo. In src/unbrowserify.js (which is what browserify renders into ./rhaboo.max.js) you can see how the module.exports from arr.js is assigned to something called Rhaboo at global scope. This is to hand rhaboo's facilities to people who can't write "require" cos they're in a browser and don't use browserify. 

Variants
--------

'Sand' and 'rocks' are two different strategies for optimising the internal storage format. Both are subject to ongoing experiments. You can include e.g. 'rhaboo.rocks.min.js' if you have a special preference, but for the time being, 'rhaboo.min.js' provides something that works.




