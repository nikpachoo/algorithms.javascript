const fs = require('fs');
const SymbolGraph = require('./symbolGraph');

const symbolGraphText = fs.readFileSync('data/routes.txt', 'utf8');
const separator = ' ';

const symbolGraphLines = symbolGraphText.trim().split(/\n/);

const sg = new SymbolGraph(symbolGraphLines, separator);
const graph = sg.getGraph();

const sources = ['ORD'];

for (let source of sources) {
    for (let w of graph.adjacencyFor(sg.index(source))) {
        console.log(sg.name(w));
    }
}