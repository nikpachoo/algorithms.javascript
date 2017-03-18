class Edge {
    constructor(v, w, weight) {
        this.v = v;
        this.w = w;
        this.edgeWeight = weight;
    }

    weight() {
        return this.edgeWeight;
    }

    either() {
        return this.v;
    }

    other(vertex) {
        return vertex === this.v ? this.w : this.v;
    }

    compareTo(that) {
        if (this.weight() < that.weight()) return -1;
        else if (this.weight() > that.weight()) return 1;
        else return 0;
    }
}

module.exports = Edge;