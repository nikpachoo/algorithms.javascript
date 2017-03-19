class DirectedEdge {
    constructor(v, w, weight) {
        this.v = v;
        this.w = w;
        this.edgeWeight = weight;
    }

    weight() {
        return this.edgeWeight;
    }

    from() {
        return this.v;
    }

    to() {
        return this.w;
    }
}

module.exports = DirectedEdge;