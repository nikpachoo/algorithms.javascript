const baseSort = require('./baseSort');

module.exports = function sort(a, less) {
    'use strict';

    less = less || baseSort.less;

    let N = a.length;
    let h = 1;

    while (h < N / 3) {
        h = 3 * h + 1;
    }

    while (h >= 1) {
        for (let i = h; i < N; i++) {
            for (let j = i; j >= h && less(a[j], a[j - h]); j -= h) {
                baseSort.exch(a, j - h, j);
            }
        }

        h = Math.floor(h / 3);
    }
};