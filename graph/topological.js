const DirectedCircle = require('./directedCircle');
const DepthFirstOrder = require('./dfo');

class Topological {
    constructor(G) {
        this.topologicalOrder = null;
        let circleFinder = new DirectedCircle(G);

        if (!circleFinder.hasCircle()) {
            let ordered = new DepthFirstOrder(G);
            this.topologicalOrder = ordered.reversePost();
        }
    }

    /**
     * is directed acyclic graph
     * @public
     */
    isDAG() {
        return this.topologicalOrder !== null;
    }

    /**
     * @public
     */
    order() {
        return this.topologicalOrder;
    }
}