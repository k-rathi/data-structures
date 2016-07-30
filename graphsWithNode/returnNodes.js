// this line lets you access the file system. You'll learn more about it later in the course
var _ = require('../lib/underscore/underscore.js');
var g = require('../sprint-two/src/graph.js');
var fs = require('fs');
console.log(require.main);
var graph = new g.Graph();
graph.addNode();
// read the `adjacency-list` file in this directory (you might have named the file differently) and split it on new lines into an array
var fileLines = fs.readFileSync('./adjacencyList.txt').toString().split('\n');

// you may have to do this 0 or more times, to remove blank lines from fileLines
fileLines.pop();
var edgeContainer = [];
fileLines.forEach(function(line) {
  edgeContainer.push(line);
  // here you have access to each line of the adjacency list
});
var tempContainer = [];
for (var i = 0; i < edgeContainer.length; i++) {
  tempContainer.push(JSON.parse(edgeContainer[i]));
}
edgeContainer = tempContainer;
edgeContainer = _.uniq(_.flatten(edgeContainer));
console.log(edgeContainer.length);