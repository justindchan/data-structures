var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.counter = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.counter ++;
  this.storage[this.counter] = value;
};
  
stackMethods.pop = function () {
  var popped = this.storage[this.counter];
  delete this.storage[this.counter];
  this.counter --; 
  return popped;
};
  
stackMethods.size = function () {
  var keyCount = 0
  for (let key in this.storage) {
    if (key) {
      keyCount ++
    }
  }
  return keyCount;
};