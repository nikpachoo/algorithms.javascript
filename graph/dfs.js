/**
 * Deep First Search
 */
class dfs {
    constructor(G, source) {
        this.marked = new Array(G.V());
        this.count = 0;

        this.dfs(G, source);
    }

    dfs(G, v) {
        this.marked[v] = true;
        this.count++;

        for(let w of G.adjacencyFor(v)) {
            if (!this.isMarked(w)) {
                this.dfs(G, w);
            }
        }
    }

    isMarked(v) {
        return this.marked[v];
    }
}

module.exports = dfs;