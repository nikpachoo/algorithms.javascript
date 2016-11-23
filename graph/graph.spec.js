"use strict";

const Graph = require('./graph');

const graphText = `9
9
0 1
0 2
0 3
0 7
0 8
2 3
4 8
4 5
6 7`;

var graph = new Graph(null, graphText);

graph.toString();