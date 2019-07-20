var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // if item is not present in set,
  var found = this.contains(item);
  if (found === false) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  var found = false;
  for (let i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      return true;
    } 
  }
  return found;
};

setPrototype.remove = function(item) {
  for (let i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      this._storage.splice(i, 1);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
