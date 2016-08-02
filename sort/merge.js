const baseSort = require('./baseSort');

module.exports = function sort(a, less) {
    'use strict';

    less = less || baseSort.less;

    let N = a.length;
    let aux = new Array(N);

    _sort(a, aux, 0, N - 1, less);
};

function _sort(a, aux, lo, hi, less) {
    'use strict';

    if (lo >= hi) {
        return;
    }

    let mid = lo + Math.floor((hi - lo) / 2);

    _sort(a, aux, lo, mid, less);
    _sort(a, aux, mid + 1, hi, less);
    _merge(a, aux, lo, mid, hi, less);
}

function _merge(a, aux, lo, mid, hi, less) {
    'use strict';

    let i = lo,
        j = mid + 1;

    for (let k = lo; k <= hi; k++) {
        aux[k] = a[k];
    }

    for (let k = lo; k <= hi; k++) {
        if (i > mid) a[k] = aux[j++];
        else if (j > hi) a[k] = aux[i++];
        else if (less(aux[j], aux[i])) a[k] = aux[j++];
        else a[k] = aux[i++];
    }
}