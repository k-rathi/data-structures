var Stack = function() {
  this.len = 0;
  this.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.size = function() {
  return (this.len > -1) ? this.len : 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.len] = value;
  this.len++;
};

Stack.prototype.pop = function() {
  var temp = this.storage[this.len - 1];
  this.len--;
  delete this.storage[this.len];
  return temp;
};


