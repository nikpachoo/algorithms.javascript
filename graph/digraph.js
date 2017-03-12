const Graph = require('./graph');

/**
 * Directed graph
 */
class Digraph extends Graph {
    /**
     * @extends Graph.addEdge
     */
    addEdge(v, w) {
        this.adj[v].add(w);

        this.edgesCount++;
    }

    reverse() {
        let reversed = new Digraph();

        for (let v = 0; v < this.verticesCount; v++) {
            for (let w of this.adj(v)) {
                reversed.addEdge(w, v);
            }
        }

        return reversed;
    }
}