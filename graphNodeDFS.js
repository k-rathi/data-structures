

// Instantiate a new graph
(function() {
  var Node = function(value) {
    var node = {};
    node.value = value;
    node.listOfConnectedNodes = [];
    node.hasVisited = false;
    return node;
  };

  exports.Node = Node;
  
  var Graph = function() {
    this.nodeList = [];
    this.edgeMatrix = [[0]];
  };
  exports.Graph = Graph;
    // Add a node to the graph, passing in the node's value.
  Graph.prototype.addNode = function(value) {
    var node = new Node(value);
    this.nodeList.push(node);
  };
  
  // Return a boolean value indicating if the value passed to contains is represented in the graph.
  Graph.prototype.contains = function(node) {
    for(var i = 0;  i < this.nodeList; i++) {}
    if (this.nodeList.indexOf(node) > -1) {
      return true;
    } else {
      return false;
    }
  };

  // Removes a node from the graph.
  Graph.prototype.removeNode = function(value) {
    for(var i = 0; i < this.nodeList.length; i++) {
      if(this.nodeList[i].value === value) {
        return this.nodeList.splice(i, 1);
      }
    }
  };

  // Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
  Graph.prototype.hasEdge = function(fromNode, toNode) {
    for (var i = 0; i < this.nodeList.length; i++) {
      var node = this.nodeList[i];
      if(fromNode === node.value) {
        if(node.edgeList.indexOf(toNode) > -1){
          return true;
        }
      }
    }
    return false;
  };

  // Connects two nodes in a graph by adding an edge between them.
  Graph.prototype.addEdge = function(fromNode, toNode) {
    for(var i = 0; i < nodeList.length; i++) {
      if(nodeList[i].value === fromNode) {
        nodeList[i].edgeList.push(toNode);
      } else if (nodeList[i].value === toNode) {
        nodeList[i].edgeList.push(fromNode);
      }
    }
  };

  // Remove an edge between any two specified (by value) nodes.
  Graph.prototype.removeEdge = function(fromNode, toNode) {
    for (var i = 0; i < this.nodeList.length; i++ ) {
      if(nodeList[i].value === fromNode) {
        if (this.edgeList.indexOf(toNode) > -1) {
          this.edgeList.splice(this.edgeList.indexOf(toNode), 1);
        }
      } else if (nodeList[i].value === toNode) {
        if (this.edgeList.indexOf(forNode) > -1) {
          this.edgeList.splice(this.edgeList.indexOf(forNode), 1);
        }
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


