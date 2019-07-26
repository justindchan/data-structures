var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
  this.queueCounter = 1;
};

Queue.prototype.enqueue = function (value) {
  this.counter++;
  this.storage[this.counter] = value;
};

Queue.prototype.dequeue = function () {
  var dequeued = this.storage[this.queueCounter];
  delete this.storage[this.queueCounter];
  this.queueCounter ++;
  return dequeued;
};

Queue.prototype.size = function () {
  var queueCount = 0;
  for (let key in this.storage) {
    if (key) {
      queueCount++
    }
  }
  return queueCount;
};
 var dmv = new Queue();