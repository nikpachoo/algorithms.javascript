const BFS = require('./bfp');
const Graph = require('./graph');
const fs = require('fs');

const graphText = fs.readFileSync('data/tinyCG.txt', 'utf8');

const graph = new Graph(null, graphText);

const bfs = new BFS(graph, 0);

const path = bfs.pathTo(5);

console.log(path);