const assert = require('assert');

const DirectedEdge = require('../../graph/directedEdge');
const EdgeWeightedDigraph = require('../../graph/edgeWeightedDigraph');
const DijkstraSP = require('../../graph/dijkstraSP');

const data = [
    [4, 5, 0.35],
    [5, 4, 0.35],
    [4, 7, 0.37],
    [5, 7, 0.28],
    [7, 5, 0.28],
    [5, 1, 0.32],
    [0, 4, 0.38],
    [0, 2, 0.26],
    [7, 3, 0.39],
    [1, 3, 0.29],
    [2, 7, 0.34],
    [6, 2, 0.40],
    [3, 6, 0.52],
    [6, 0, 0.58],
    [6, 4, 0.93]
];

describe('Dijkstra short path', function() {
    let edgeWeightedDigraph = new EdgeWeightedDigraph(8);

    for (let row of data) {
        edgeWeightedDigraph.addEdge(new DirectedEdge(...row));
    }

    let shortPath = new DijkstraSP(edgeWeightedDigraph, 0);

    it('path to vertex "6" exist', function() {
        assert.equal(shortPath.hasPathTo(6), true);
    });

    it('path to vertex "6" is shortest', function() {
        assert.equal(+shortPath.distTo(6).toFixed(2), 1.51);
    });
});