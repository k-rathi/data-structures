

// Instantiate a new graph
(function() {
 
  var Graph = function() {
    this.nodeList = [];
    this.edgeList = [];
  };
  exports.Graph = Graph;
  // Add a node to the graph, passing in the node's value.
  Graph.prototype.addNode = function(node) {
    this.nodeList.push(node);
  };

  // Return a boolean value indicating if the value passed to contains is represented in the graph.
  Graph.prototype.contains = function(node) {
    if (this.nodeList.indexOf(node) > -1) {
      return true;
    } else {
      return false;
    }
  };

  // Removes a node from the graph.
  Graph.prototype.removeNode = function(node) {
    var index = this.nodeList.indexOf(node);
    this.nodeList.splice(index, 1);
    for (var i = 0; i < this.edgeList.length; i++) {
      var edge = this.edgeList[i];
      if (edge.node1 === node || edge.node2 === node) {
        this.edgeList.splice(i, 1);
      }
    }
  };

  // Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
  Graph.prototype.hasEdge = function(fromNode, toNode) {
    for (var i = 0; i < this.edgeList.length; i++) {
      var edge = this.edgeList[i];
      if (( edge.node1 === fromNode && edge.node2 === toNode ) || (edge.node2 === fromNode && edge.node1 === toNode )) {
        return true;
      }
    }
    return false;
  };

  // Connects two nodes in a graph by adding an edge between them.
  Graph.prototype.addEdge = function(fromNode, toNode) {
    var newEdge = {};
    newEdge.node1 = fromNode;
    newEdge.node2 = toNode;
    this.edgeList.push(newEdge);
  };

  // Remove an edge between any two specified (by value) nodes.
  Graph.prototype.removeEdge = function(fromNode, toNode) {
    for (var i = 0; i < this.edgeList.length; i++ ) {
      var edge = this.edgeList[i];
      if (( edge.node1 === fromNode && edge.node2 === toNode ) || (edge.node2 === fromNode && edge.node1 === toNode )) {
        this.edgeList.splice(i, 1);
      }
    }
  };

  // Pass in a callback which will be executed on each node of the graph.
  Graph.prototype.forEachNode = function(cb) {
    for (var i = 0; i < this.nodeList.length; i++) {
      cb(this.nodeList[i]);
    }
  };
})();
/*
 * Complexity: What is the time complexity of the above functions?
 */


