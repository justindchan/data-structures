var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0
  var queueCounter = 1
  // Implement the methods below

  someInstance.enqueue = function(value) {
    counter ++;
    storage[counter] = value;

  };

  someInstance.dequeue = function() {
    // where we remove the least recently (oldest) added key
    //to remove, reference the first numeric key
    var dequeued = storage[queueCounter];
    delete storage[queueCounter];
    queueCounter ++;
    return dequeued;
  };

  someInstance.size = function() {
    var queueCount = 0;
    for (let key in storage) {
      if (key) {
        queueCount++
      }
    }
    return queueCount;
  };
  return someInstance;
};
