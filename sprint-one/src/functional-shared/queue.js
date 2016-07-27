var Queue = function() {
  var newQueue = {};
  newQueue.len = 0;
  newQueue.storage = {};
  _.extend(newQueue, queueMethods);
  return newQueue;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

queueMethods = {};

queueMethods.size = function() {
    return this.len;
};


// var someInstance = {};
//   var len = 0;
//   // Use an object with numeric keys to store values
//   var storage = {};

//   // Implement the methods below

//   someInstance.enqueue = function(value) {
//     storage[len] = value;
//     len ++;

//   };

//   someInstance.dequeue = function() {
//     var temp = storage[0];
//     for (var i = 0; i < len - 1; i++) {
//       storage[i] = storage[i + 1];
//     }
//     len --;
//     return temp;
//   };

//   someInstance.size = function() {
//     return (len < 0) ? 0 : len;
//   };

//   return someInstance;