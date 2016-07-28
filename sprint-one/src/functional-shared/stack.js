var Stack = function() {
  var newStack = {};
  newStack.len = 0;
  newStack.storage = {};
  _.extend(newStack, stackMethods);
  return newStack;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {};

stackMethods.size = function() {
  return ( this.len < 0 ) ? 0 : this.len;
};

stackMethods.push = function(value) {
  this.storage[this.len] = value;
  this.len++;
};

stackMethods.pop = function() {
  var temp = this.storage[this.len - 1];
  this.len--;
  delete this.storage[this.len];
  return temp;
};
