const Graph = require('./graph');
const fs = require('fs');

const graphText = fs.readFileSync('data/tinyG.txt', 'utf8');

var graph = new Graph(null, graphText);

graph.toString();