const Stack = require('../collection/stack');

/**
 * Deep First Paths
 */
class dfp {
    constructor(G, source) {
        this.marked = new Array(G.V());
        this.count = 0;
        this.edgeTo = [];
        this.s = source;

        this.dfp(G, source);
    }

    dfp(G, v) {
        this.marked[v] = true;
        this.count++;

        for(let w of G.adjacencyFor(v)) {
            if (!this.marked[v]) {
                this.edgeTo[w] = v;
                this.dfp(G, w);
            }
        }
    }

    hasPathTo(v) {
        return this.marked[v];
    }

    pathTo(v) {
        if (!this.hasPathTo(v)) return null;

        let path = new Stack();

        for (let x = v; x != this.s; x = this.edgeTo[x]) {
            path.push(x);
        }

        path.push(this.s);

        return path;
    }
}

module.exports = dfp;