

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._expandLimit = this._limit * (3 / 4);
};

HashTable.prototype.expand = function() {
  var counter = 0;
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] !== undefined) {
      counter++;
    }
  } 
  return counter;
};

HashTable.prototype.newHash = function(storage, newLimit) {
  var newHash = new HashTable();
  newHash.limit = newLimit;
  newHash._storage = LimitedArray(newLimit);
  newHash._expandLimit = newHash._limit * (3 / 4);
  for (var i = 0; i < storage.length; i++) {
    for (key in storage[i]) {
      newHash.insert(key, storage[i][key]);
    }
  }
  this._storage = newHash._storage;
  this.limit = newHash.limit;
  this._expandLimit = newHash._expandLimit;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    var obj = {};
    obj[k] = v;
    this._storage.set(index, obj);
    if ((this.expand + 1) > this._expandLimit) {
      this.newHash(this._storage, this._expandLimit);
    }
  } else {
    this._storage.get(index)[k] = v;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) !== undefined) {
    return this._storage.get(index)[k];
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);  
  delete this._storage.get(index)[k];
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


