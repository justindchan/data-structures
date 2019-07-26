var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.counter = 0;
  someInstance.queueCounter = 1;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.counter++;
  this.storage[this.counter] = value;
};

queueMethods.dequeue = function () {
  var dequeued = this.storage[this.queueCounter];
  delete this.storage[this.queueCounter];
  this.queueCounter ++;
  return dequeued;
};

queueMethods.size = function () {
  var queueCount = 0;
  for (let key in this.storage) {
    if (key) {
      queueCount++
    }
  }
  return queueCount;
};
