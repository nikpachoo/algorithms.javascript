const assert = require('assert');

const IndexMinPQ = require('./../../collection/indexMinPQ');

const stream = ['K', 'C', 'O', 'R', 'Z', 'E', 'G', 'P'];

describe('IndexMinPQ', function() {
    let minQueue = new IndexMinPQ(String.prototype.localeCompare);
    let ordered = [];

    for (let i = 0; i < stream.length; i++) {
        minQueue.insert(i, stream[i]);
    }

    while (!minQueue.isEmpty()) {
        let min = minQueue.min();
        ordered.push(min);
        minQueue.delMin();
    }

    it('should be equal', function() {
        assert.deepEqual(ordered, stream.sort());
    });
});