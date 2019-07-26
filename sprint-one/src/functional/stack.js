var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    // where we add the given value to storage
    // to add the value, must first make a key to store it at.
    // keys are numeric, must initialize a counter that counts after each value is stored
    // create key, then set storage[key] to value
    // will add new values to the top of the stack, First In, First Out
    //     
    counter ++;
    storage[counter] = value;
  };

  someInstance.pop = function() {
    // where we remove the most recently added key : value (top of the stack)
    // to remove, reference the last numeric key 
    var popped = storage[counter];
    delete storage[counter];
    counter --; 
    return popped;
  };

  someInstance.size = function() {
    // count number of keys in storage
    // for loop 
    var keyCount = 0
    for (let key in storage) {
      if (key) {
        keyCount ++
      }
    }
    return keyCount;
  };
  return someInstance;
};
