const Bag = require('./../collection/bag');

class EdgeWeightedGraph {
    constructor(V) {
        this.verticesCount = V;
        this.edgesCount = 0;
        this.adj = [];

        for (let v = 0; v < this.verticesCount; v++) {
            this.adj[v] = new Bag();
        }
    }

    /**
     * Count of vertices
     * @return Number
     */
    V() {
        return this.verticesCount;
    }

    /**
     * Count of edges
     * @return Number
     */
    E() {
        return this.edgesCount;
    }


    addEdge(e) {
        let v = e.either();
        let w = e.other(v);

        this.adj[v].add(e);
        this.adj[w].add(e);
        this.edgesCount++;
    }

    adjacencyFor(v) {
        return this.adj[v];
    }

    edges() {
        let edges = new Bag();

        for (let v = 0; v < this.verticesCount; v++) {
            for (let e of this.adj[v]) {
                if (e.other(v) > v) {
                    edges.add(e);
                }
            }
        }

        return edges;
    }
}

module.exports = EdgeWeightedGraph;