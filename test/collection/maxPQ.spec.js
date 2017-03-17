const assert = require('assert');

const MaxPQ = require('./../../collection/maxPQ');

const stream = ['K', 'C', 'O', 'R', 'Z', 'E', 'G', 'P'];

describe('IndexMinPQ', function() {
    let maxQueue = new MaxPQ(String.prototype.localeCompare);
    let ordered = [];

    for (let i = 0; i < stream.length; i++) {
        maxQueue.insert(stream[i]);
    }

    while (!maxQueue.isEmpty()) {
        let max = maxQueue.delMax();
        ordered.push(max);
    }
    it('should be equal', function() {
        assert.deepEqual(ordered, stream.sort(function(a, b) {
            return b.localeCompare(a);
        }));
    });
});

