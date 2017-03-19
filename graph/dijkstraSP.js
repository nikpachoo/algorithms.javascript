const IndexMinPQ = require('../collection/indexMinPQ');
const Stack = require('../collection/stack');

class DijkstraSP {
    /**
     * Dijkstra`s algorithm finds the shortest paths between nodes in a graph
     * @param {EdgeWeightedDigraph} graph 
     * @param {int} source 
     */
    constructor(graph, source) {
        this.prev = [];
        this.dist = [];

        for (let i = 0; i < graph.V(); i++) {
            this.dist[i] = Infinity;
        }

        this.prev[source] = null;
        this.dist[source] = 0;

        this.priopityQueue = new IndexMinPQ(function(number) {
            return this - number;
        });

        this.priopityQueue.insert(0, 0);

        while (!this.priopityQueue.isEmpty()) {
            this.relax(graph, this.priopityQueue.delMin());
        }
    }

    /**
     * Distance from source to vertex
     * @public
     * @param {number} vertex 
     */
    distTo(vertex) {
        return this.dist[vertex];
    }

    /**
     * Has graph directed path from source to vertex?
     * @public
     * @param {number} vertex 
     */
    hasPathTo(vertex) {
        return this.dist[vertex] < Infinity;
    }

    /**
     * Path from source to vertex
     * @public
     * @param {DirectedEdge} vertex 
     */
    pathTo(vertex) {
        if (!this.hasPathTo(vertex)) {
            return null;
        }

        let path = new Stack();

        for (let edge = this.prev[vertex]; edge !== null; edge = this.prev[edge.from()]) {
            path.push(edge);
        }

        return path;
    }

    /**
     * Iterate over each adjacency vertex of current vertex
     * and update distance to this vertex if it less that existed.
     * @private
     * @param {EdgeWeightedDigraph} graph 
     * @param {number} vertex 
     */
    relax(graph, vertex) {
        for (let edge of graph.adjacencyFor(vertex)) {
            let neighbor = edge.to();
            let weight = this.dist[vertex] + edge.weight();
            if (this.dist[neighbor] > weight) {
                this.dist[neighbor] = weight;
                this.prev[neighbor] = edge;

                if (this.priopityQueue.contains(neighbor)) {
                    this.priopityQueue.change(neighbor, weight);
                } else {
                    this.priopityQueue.insert(neighbor, weight);
                }
            }
        }
    }
}

module.exports = DijkstraSP;