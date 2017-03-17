class IndexMinPQ {
    /**
     * Indexed priority queue
     * binary heap implementation
     */
    constructor(comparator) {
        /**
         * the number of elements
         * @private
         * @type {number}
         */
        this.N = 0;

        /**
         * binary heap
         * @private
         * @type {Array}
         */
        this.pq = [];

        /**
         * reverse of pq
         * qp[pq[i]] = pq[qp[i]] = i
         * @private
         * @type {Array}
         */
        this.qp = [];
        /**
         * Elements indexed by ID
         * @private
         * @type {Array}
         */
        this.keys = [];

        this.comparator = comparator;
    }

    /**
     * @public
     * @return {boolean}
     */
    isEmpty() {
        return this.N == 0;
    }

    /**
     * @public
     * @return {number}
     */
    size() {
        return this.N;
    }

    /**
     * @public
     * @param id {number} unique integer index
     * @param item {*}
     */
    insert(id, item) {
        if (this.contains(id)) {
            throw new Error("index is already in the priority queue");
        }

        this.N++;
        this.qp[id] = this.N;
        this.pq[this.N] = id;
        this.keys[id] = item;
        this.swim(this.N);
    }

    /**
     * @public
     * @param id {number} unique integer index
     * @param item
     */
    change(id, item) {
        this.keys[id] = item;
        this.swim(this.qp[id]);
        this.sink(this.qp[id]);
    }

    /**
     * Is this index (k) linked with some element?
     * @public
     * @param id {number} unique integer index
     * @return {boolean}
     */
    contains(id) {
        return typeof this.qp[id] === "number";
    }

    /**
     * @public
     * @param id {number} unique integer index
     */
    remove(id) {
        this.exch(id, this.N--);
        this.swim(this.qp[id]);
        this.sink(this.qp[id]);
        this.keys.splice(this.pq[this.N + 1]);
        this.qp.splice(this.pq[this.N + 1]);
    }

    /**
     * @public
     * @return {*}
     */
    min() {
        return this.keys[this.pq[1]];
    }

    /**
     * @public
     */
    minIndex() {
        return this.pq[1];
    }

    /**
     * @public
     */
    delMin() {
        let indexOfMin = this.pq[1];
        this.exch(1, this.N--);
        this.sink(1);
        this.qp[indexOfMin] = undefined;
        this.keys[this.pq[this.N + 1]] = undefined;
        this.pq[this.N + 1] = undefined;

        return indexOfMin;
    }

    /**
     * @private
     * @param i {number}
     * @param j {number}
     */
    exch(i, j) {
        let swap = this.pq[i];
        this.pq[i] = this.pq[j];
        this.pq[j] = swap;
        this.qp[this.pq[i]] = i;
        this.qp[this.pq[j]] = j;
    }

    /**
     * @private
     * @param i {number}
     * @param j {number}
     */
    greater(i, j) {
        let itemOne = this.keys[this.pq[i]];
        let itemTwo = this.keys[this.pq[j]];

        if (typeof this.comparator === "function") {
            return this.comparator.apply(itemOne, [itemTwo]) > 0;
        } else if (typeof itemOne.compareTo === "function") {
            return itemOne.compareTo(itemTwo) > 0;
        } else {
            throw Error('For compare elements needs comparator or implement "compareTo" method');
        }
    }

    /**
     * @private
     * @param k {number}
     */
    swim(k) {
        while (k > 1 && this.greater(Math.floor(k/2), k)) {
            let parentIndex = Math.floor(k/2);
            this.exch(parentIndex, k);
            k = parentIndex;
        }
    }

    /**
     * @private
     * @param k {number}
     */
    sink(k) {
        while (2*k <= this.N) {
            let j = 2*k;

            if (j < this.N && this.greater(j, j+1)) j++;

            if (!this.greater(k, j)) break;

            this.exch(k, j);
            k = j;
        }
    }

    toString() {
        for (let i = 1; i < this.pq.length; i++) {
            let parent = Math.floor(i / 2);
            console.log(i, this.keys[this.pq[i]], parent);
        }
    }
}

module.exports = IndexMinPQ;