var Queue = function() {
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.len = 0;

  return newQueue;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};

queueMethods.size = function() {
  return (this.len > -1) ? this.len : 0;
};

queueMethods.enqueue = function(value) {
  this.storage[this.len] = value;
  this.len++;
};

queueMethods.dequeue = function() {
  var temp = this.storage[0];
  for (var i = 0; i < this.len - 1; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  this.len--;
  return temp;
};