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
// var someInstance = {};

//   // Use an object with numeric keys to store values
//   var storage = {};
//   var len = 0; 
//   // Implement the methods below
//   someInstance.push = function(value) {
//     storage[len] = value;
//     len++;
//   };

//   someInstance.pop = function() {
//     var temp = storage[len - 1];
//     delete storage.len;
//     len--;
//     return temp;
//   };

//   someInstance.size = function() {
//     if (len < 0) {
//       return 0;
//     }
//     return len;
//   };

//   return someInstance;