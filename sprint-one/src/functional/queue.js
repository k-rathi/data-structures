var Queue = function() {
  var someInstance = {};
  var len = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[len] = value;
    len ++;

  };

  someInstance.dequeue = function() {
    var temp = storage[0];
    for (var i = 0; i < len - 1; i++) {
      storage[i] = storage[i + 1];
    }
    len --;
    return temp;
  };

  someInstance.size = function() {
    return (len < 0) ? 0 : len;
  };

  return someInstance;
};
