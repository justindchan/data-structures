class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.counter = 0;
  	this.queueCounter = 1;
  };

  enqueue (value) {
    this.counter++;
    this.storage[this.counter] = value;
  };

  dequeue () {
    var dequeued = this.storage[this.queueCounter];
    delete this.storage[this.queueCounter];
    this.queueCounter ++;
    return dequeued;
  };

  size () {
    var queueCount = 0;
    for (let key in this.storage) {
      if (key) {
        queueCount++
      }
    }
    return queueCount;
  };
};
var dmv = new Queue();