var BinarySearchTree = function(value) {
  var binaryTreeInstance = Object.create(binaryMethods);
  binaryTreeInstance.value = value;
  binaryTreeInstance.left = null;
  binaryTreeInstance.right = null;
  return binaryTreeInstance;
};   

var binaryMethods = {};

binaryMethods.insert = function(value) {
  var binaryTree = new BinarySearchTree(value);
  if ( (this.left) === null && binaryTree.value < this.value) {
    this.left = binaryTree;
  } else if ((this.right) === null && binaryTree.value > this.value) {
    this.right = binaryTree;
  } else if ((this.left) !== null && binaryTree.value < this.value) {
    this.left.insert(value);
  } else if ((this.right) !== null && binaryTree.value > this.value) {
    this.right.insert(value);
  }
};
binaryMethods.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (value < this.value && (this.left)) {
    return this.left.contains(value);
  } else if (value > this.value && (this.right)) {
    return this.right.contains(value);
  } 
  return false;
};
binaryMethods.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  } if (this.right) {
    this.right.depthFirstLog(cb);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
