const DepthFirstOrder = require('./dfo');

/**
 * Find strong components for DAG
 */
class Kosaraju {
    /**
     * @param G {Digraph}
     */
    constructor(G) {
        this.marked = [];
        this.ids = [];
        this.componentCount = 0;

        let order = new DepthFirstOrder(G.reverse());

        for (let s of order.reversePost()) {
            if (!this.marked[s]) {
                this.componentCount++;
                this.dfs(G, s);
            }
        }
    }

    /**
     * @public
     * @param v
     * @param w
     * @return {boolean}
     */
    stronglyConnected(v, w) {
        return this.ids[v] === this.ids[w];
    }

    /**
     * @public
     * @return {number}
     */
    count() {
        return this.componentCount;
    }

    /**
     * @public
     * @param v
     * @return {*}
     */
    id(v) {
        return this.ids[v];
    }

    dfs(G, v) {
        this.marked[v] = true;
        this.ids[v] = this.componentCount;

        for (let w of G.adjacencyFor(v)) {
            if (!this.marked[w]) {
                this.dfs(G, w);
            }
        }
    }
}