const Stack = require('../collection/stack');

/**
 * Deep First Paths
 */
class dfp {
    constructor(G, source) {
        this.marked = new Array(G.V());
        this.count = 0;
        this.edgeTo = [G.V()];
        this.s = source;

        this.dfp(G, source);
    }

    dfp(G, v) {
        this.marked[v] = true;
        this.count++;

        for(w of G.adj()) {
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