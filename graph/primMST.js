const IndexMinPQ = require('../collection/indexMinPQ');
const Bag = require('../collection/bag');

class PrimMST {
    /**
     * Prim`s algorithm
     * finds minimal spanning tree for a weighted undirected graph
     * This is a greedy algorithm
     * @param G {EdgeWeightedGraph}
     */
    constructor(G) {
        this.edgeTo = [];
        this.distTo = [];
        this.marked = [];

        for (let v = 0; v < G.V(); v++) {
            this.distTo[v] = Infinity;
        }

        this.pq = new IndexMinPQ(function(that) {
            if (this < that) return -1;
            else if (this > that) return 1;
            else return 0;
        });

        this.distTo[0] = 0;
        this.pq.insert(0, 0);

        while (!this.pq.isEmpty()) {
            this.visit(G, this.pq.delMin());
        }
    }

    /**
     * @public
     */
    edges() {
        let mst = new Bag();

        for (let v = 1; v < this.edgeTo.length; v++) {
            mst.add(this.edgeTo[v]);
        }

        return mst;
    }

    /**
     * @public
     */
    weight() {
        let total = 0;

        for (let e of this.edges()) {
            total += e.weight();
        }

        return total;
    }

    /**
     * @private
     * @param G
     * @param v
     */
    visit(G, v) {
        this.marked[v] = true;

        for (let e of G.adjacencyFor(v)) {
            let w = e.other(v);

            if (this.marked[w]) continue;

            if (e.weight() < this.distTo[w]) {
                this.edgeTo[w] = e;
                this.distTo[w] = e.weight();

                if (this.pq.contains(w)) {
                    this.pq.change(w, this.distTo[w]);
                } else {
                    this.pq.insert(w, this.distTo[w]);
                }
            }
        }
    }
}

module.exports = PrimMST;