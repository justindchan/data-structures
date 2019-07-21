

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);


};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // this._storage.get/.set/.each to interact with the limted array storage

  // create tuple array []
  // create bucket array []
  var tuple = [k, v];
  var bucket = [];

  // get whatever is in storage at the index
  // and see if anything is there
  if (this._storage.get(index) === undefined) {
    // set storage at the index, to an empty array called bucket
    this._storage.set(index, []);
  //if the key is the same overwrite the value with the new value
  } else {
    bucket = this._storage.get(index);
  }
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
    }
  }
  bucket.push(tuple);
  // push tuple inside the bucket array
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  // loop through the bucket to get just the vale which will be at tuple[1]
  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  } 
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.pop(bucket[i]);
    }
  } 
  
};

var hash = new HashTable(); 

/*
 * Complexity: What is the time complexity of the above functions?
 */


