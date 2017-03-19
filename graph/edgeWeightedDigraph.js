const Bag = require('./../collection/bag');

class EdgeWeightedDigraph {
    /**
     * 
     * @param {number} verticesCount
     */
    constructor(verticesCount) {
        this.verticesCount = verticesCount;
        this.edgesCount = 0;
        this.adj = [];

        for (let vertex = 0; vertex < this.verticesCount; vertex++) {
            this.adj[vertex] = new Bag();
        }
    }

    /**
     * Count of vertices
     * @return {number}
     */
    V() {
        return this.verticesCount;
    }

    /**
     * Count of edges
     * @return {number}
     */
    E() {
        return this.edgesCount;
    }

    /**
     * @public
     * @param {DirectedEdge} edge 
     */
    addEdge(edge) {
        this.adj[edge.from()].add(edge);
        this.edgesCount++;
    }

    adjacencyFor(vertex) {
        return this.adj[vertex];
    }

    edges() {
        let edges = new Bag();

        for (let vertex = 0; vertex < this.verticesCount; vertex++) {
            for (let edge of this.adj[vertex]) {
                edges.add(edge);
            }
        }

        return edges;
    }
}

module.exports = EdgeWeightedDigraph;