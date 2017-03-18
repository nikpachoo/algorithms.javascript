const assert = require('assert');

const PrimMST = require('../../graph/primMST');
const EdgeWeightedGraph = require('../../graph/edgeWeightedGraph');
const Edge = require('../../graph/edge');

const data = [
    [4, 5, 0.35],
    [4, 7, 0.37],
    [5, 7, 0.28],
    [0, 7, 0.16],
    [1, 5, 0.32],
    [0, 4, 0.38],
    [2, 3, 0.17],
    [1, 7, 0.19],
    [0, 2, 0.26],
    [1, 2, 0.36],
    [1, 3, 0.29],
    [2, 7, 0.34],
    [6, 2, 0.40],
    [3, 6, 0.52],
    [6, 0, 0.58],
    [6, 4, 0.93]
];

describe('prim MST', function() {
    let weightedGraph = new EdgeWeightedGraph(8);

    for (let row of data) {
        weightedGraph.addEdge(new Edge(...row));
    }

    let mst = new PrimMST(weightedGraph);

    it('weight should be equal', function() {
        assert.equal(+mst.weight().toFixed(2), 1.81);
    });
});