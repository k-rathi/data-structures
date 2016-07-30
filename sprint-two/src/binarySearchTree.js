var BinarySearchTree = function(value, parent) {
  var binaryTreeInstance = Object.create(binaryMethods);
  binaryTreeInstance.value = value;
  binaryTreeInstance.left = null;
  binaryTreeInstance.right = null;
  // binaryTreeInstance.color = colorAssign();
  binaryTreeInstance.parent = parent;

  //var max = 2 * minimumDistance;

  return binaryTreeInstance;
};   

var binaryMethods = {};

binaryMethods.insert = function(value) {
  var binaryTree = new BinarySearchTree(value, this);
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
binaryMethods.colorAssign = function() {
  var currentColor = "black";

  var wrapper = function() {
    this.color = currentColor;
    if (currentColor === "black") {
      currentColor = "red";
    } else {
      currentColor = 'black';
    }  
    if ((this.right) && (this.left)) {
      this.right.colorAssign();
      this.left.colorAssign();
    } else if (this.left) {
      this.left.colorAssign();
    } else if (this.right) {
      this.right.colorAssign();
    }
  };
};
/*
 * Complexity: What is the time complexity of the above functions?
 */


// function colorAssign (closure):
  // set closure variable var currentColor to black
    //Assign the main node to currentColor
    // Switch currentColor
   // Check to see if instance.right exists
      // run colorAssign on instance.right
      // if instance.left exists (as well)
        // then also run colorAssign on instance.left
   //else if instance.right does not exist and instance.left does exist
      // run colorAssign on instance.left


