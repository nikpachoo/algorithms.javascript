const Queue = require('../collection/queue');
const Stack = require('../collection/stack');

/**
 * Depth first order
 */
class dfo {
    constructor(G) {
        this.preOrder = new Queue();
        this.postOrder = new Queue();
        this.reversePostOrder = new Stack();

        this.marked = [];

        for (let v = 0; v < G.verticesCount(); v++) {
            if (!this.marked[v]) {
                this.dfs(G, v);
            }
        }
    }

    pre() {
        return this.preOrder;
    }

    post() {
        return this.postOrder;
    }

    reversePost() {
        return this.reversePostOrder;
    }

    dfs(G, v) {
        this.marked[v] = true;
        this.preOrder.enqueue(v);

        for (let w of G.adjacencyFor(v)) {
            if (!this.marked[w]) {
                this.dfs(G, w);
            }
        }

        this.postOrder.enqueue(v);
        this.reversePostOrder(v);
    }
}