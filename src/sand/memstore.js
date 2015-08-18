// Copyright 2015 by Stijn de Witt and Adrian May. Some rights reserved.
"use strict"

/**
 * Creates a new MemoryStorage object implementing the 
 * <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API">Web Storage API</a> 
 * using memory.
 * 
 * <p>If no arguments are given, the created memory storage object will read from and write to
 * the <code>global</code> memory storage. If a string argument is given, the new storage object
 * will read from and write to it's own segment of memory. Any data written to such a memory
 * storage object will only show up in other memory storage objects that have been created with
 * the same (meaning <code>===</code>) id. This data will not show up in the <code>global</code>
 * memory space. As such it is recommended to always construct a memory storage object with a
 * unique string id as argument.</p> 
 * 
 * @param id Optional string argument used to isolate this memory storage object from others.
 */
function MemoryStorage(id) {
	this.id = id || 'global';
	if (!storage[this.id]) {storage[this.id] = {};}
	this.keys = Object.keys(storage[this.id]);
	this.length = this.keys.length;
}

MemoryStorage.prototype.getItem = function MemoryStorage_getItem(key) {
	return storage[this.id][key];
};

MemoryStorage.prototype.setItem = function MemoryStorage_setItem(key, val) {
	if (! (key in storage[this.id])) {
		this.keys.push(key);
		this.length++;
	}
	storage[this.id][key] = val;
};

MemoryStorage.prototype.removeItem = function MemoryStorage_removeItem(key) {
	if (key in storage[this.id]) {
		this.keys.splice(this.keys.indexOf(key), 1);
		this.length--;
		delete storage[this.id][key];
	}
};
MemoryStorage.prototype.key = function MemoryStorage_key(idx) {
	return idx >= 0 && idx < this.keys.length ? this.keys[idx] : null;
};

MemoryStorage.prototype.clear = function MemoryStorage_clear() {
	for (var i=0; i<this.length; i++) {
		delete storage[this.id][this.keys[i]];
	}
	this.keys.splice(0, this.length);
	this.length = 0;
};

// Used to store all data
var storage = {};

module.exports = MemoryStorage;