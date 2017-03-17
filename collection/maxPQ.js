class MaxPQ {
    /**
     *  binary heap
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
     * @param v
     */
    insert(v) {
        this.pq[++this.N] = v;
        this.swim(this.N);
    }

    /**
     * @public
     * @return {*}
     */
    delMax() {
        let max = this.pq[1];
        this.exch(1, this.N--);
        this.pq[this.N + 1] = null;
        this.sink(1);

        return max;
    }

    /**
     * @private
     */
    less(i, j) {
        if (typeof this.comparator === "function") {
            return this.comparator.apply(this.pq[i], [this.pq[j]]) < 0;
        } else if (typeof itemOne.compareTo === "function") {
            return this.pq[i].compareTo(this.pq[j]) < 0;
        } else {
            throw Error('For compare elements needs comparator or implement "compareTo" method');
        }
    }

    /**
     * @private
     * @param i {number}
     * @param j {number}
     */
    exch(i, j) {
        [this.pq[j], this.pq[i]] = [this.pq[i], this.pq[j]];
    }

    /**
     * @private
     * @param k {number}
     */
    swim(k) {
        while (k > 1 && this.less(Math.floor(k/2), k)) {
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

            if (j < this.N && this.less(j, j+1)) j++;

            if (!this.less(k, j)) break;

            this.exch(k, j);
            k = j;
        }
    }
}

module.exports = MaxPQ;