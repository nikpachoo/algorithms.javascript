const baseSort = require('./baseSort');

module.exports = function sort(a, less) {
    'use strict';

    less = less || baseSort.less;

    let N = a.length;

    for (let i = 1; i < N; i++) {
        for (let j = i; j > 0 && less(a[j], a[j - 1]); j--) {
            baseSort.exch(a, j, j - 1);
        }
    }
};
