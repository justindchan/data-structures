var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  // i: target ; o: boolean
  var bool = false;
  // current children to loop through = this.children
  var current = this.children;
  // create helper function to recurse over
  var finder = function (current) {
    // loop through current children
    for (let i = 0; i < current.length; i++) {
      // assign current children's children to current node
      var node = current[i];
      if (node.value === target) {
        bool = true;
      }
      finder(node.children);
    }
  };
  finder(current);
  return bool;
  //base case
    // if tree.value === target
    // bool = true
  
  // recursive case
    // is newTree.children.length !== 0?
    // if yes, recurse newTree.children
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
