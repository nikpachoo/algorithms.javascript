const Stack = require('../collection/stack');

class DirectedCircle {
    /**
     * Find a circle in orgraph
     * @param G {Digraph}
     */
    constructor(G) {
        this.marked = [];
        this.edgeTo = [];
        this.onStack = [];
        this.circleEdges = null;

        for (let v = 0; v < G.verticesCount(); v++) {
            if (!this.marked[v]) {
                this.dfs(G, v);
            }
        }
    }

    /**
     * @public
     */
    hasCircle() {
        return this.circleEdges !== null;
    }

    /**
     * @public
     */
    circle() {
        return this.circleEdges;
    }

    dfs(G, v) {
        this.onStack[v] = true;
        this.marked[v] = true;

        for (let w of G.adjacencyFor(v)) {
            if (this.hasCircle()) {
                return
            } else if (!this.marked[w]) {
                this.edgeTo[w] = v;
                this.dfs(G, w);
            } else if (this.onStack[w]) {
                this.circleEdges = new Stack();

                for (let x = v; x !== w; x = this.edgeTo[x]) {
                    this.circleEdges.push(x);
                }

                this.circleEdges.push(w);
                this.circleEdges.push(v);
            }
        }

        this.onStack[v] = false;
    }
}