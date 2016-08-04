const baseSort = require('./baseSort');
const merge = require('./merge').merge;

module.exports = function sort(a, less) {
    'use strict';

    less = less || baseSort.less;

    _sort(a, less);
};

function _sort(a, less) {
    'use strict';

    let N = a.length;
    let aux = new Array(N);

    for (let sz = 1; sz < N; sz += sz) {
        for (let lo = 0; lo <= N - sz; lo += sz * 2) {
            merge(a, aux, lo, lo + sz - 1, Math.min(lo + sz * 2 - 1, N - 1), less);
        }
    }
}
