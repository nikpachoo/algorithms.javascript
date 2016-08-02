const baseSort = require('./baseSort');

module.exports = function sort(a, less) {
    'use strict';

    less = less || baseSort.less;

    let N = a.length;

    for (let i = 0; i < N; i++) {
        let min = i;

        for (let j = i + 1; j < N; j++) {
            if (less(a[j], a[min])) {
                min = j;
            }
        }

        baseSort.exch(a, i, min);
    }
};