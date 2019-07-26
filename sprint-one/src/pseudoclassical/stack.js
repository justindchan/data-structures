var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;

};


Stack.prototype.push = function (value) {
  this.counter ++;
  this.storage[this.counter] = value;
};
  
Stack.prototype.pop = function () {
  var popped = this.storage[this.counter];
  delete this.storage[this.counter];
  this.counter --; 
  return popped;
};
  
Stack.prototype.size = function () {
  var keyCount = 0
  for (let key in this.storage) {
    if (key) {
      keyCount ++
    }
  }
  return keyCount;
};

var buffet = new Stack()