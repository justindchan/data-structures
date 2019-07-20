var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create new node (that we're gonna assign to a variable)
    var newNode = Node(value);
    // if the list is empty, point head and tail to the new node
    // if not empty, point the list.next to the new node
    // and assign list.tail to list .tail. next 
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var removed = list.head.value;
    list.head = list.head.next;
    return removed;
    // move the list.head pointer to point to the next node after the first node instead.
  };

  list.contains = function(target) {
    // traversal - is achieved through assigning .next
    // check if target = current node  
    // while current node does not equal the target && not at the end of the list, traverse the linked list.
    var currentNode = list.head;
    console.log(currentNode === list.head)
    while (currentNode.value !== target && currentNode !== list.tail) {
      currentNode = currentNode.next;      
    } 
    if (currentNode.value === target) {
      return true;
    } else {
      return false;
    }

  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
