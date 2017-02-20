const Queue = require('../collection/queue');
const dfp = require('./dfp');

/**
 * Breadth First Paths
 */
class bfp {
    constructor(G, source) {
        this.marked = new Array(G.V());
        this.edgeTo = new Array(G.V());
        this.s = source;
        this.bfp(G, source);
    }

    bfp(G, s) {
        const queue = new Queue();
        this.marked[s] = true;
        queue.enqueue(s);

        while (!queue.isEmpty()) {
            let v = queue.dequeue();

            for(let w of G.adjacencyFor(v)) {
                if (!this.marked[w]) {
                    this.edgeTo[w] = v;
                    this.marked[w] = true;
                    queue.enqueue(w);
                }
            }
        }
    }

    hasPathTo(v) {
        return this.marked[v];
    }

    pathTo(v) {
        return dfp.prototype.pathTo.apply(this, [v])
    }
}

module.exports = bfp;