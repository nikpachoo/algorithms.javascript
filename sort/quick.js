const baseSort = require('./baseSort');

module.exports = function sort(a, less) {
    'use strict';

    less = less || baseSort.less;

    shuffleArray(a);

    quickSort(a, 0, a.length - 1, less);
};

function quickSort(a, lo, hi, less) {
    'use strict';

    if (hi <= lo) return;

    let j = partition(a, lo, hi, less);

    quickSort(a, lo, j - 1, less);
    quickSort(a, j + 1, hi, less);
}

function partition(a, lo, hi, less) {
    'use strict';

    let i = lo;
    let j = hi + 1;
    let v = a[lo];

    while (true) {
        while (less(a[++i], v)) if (i === hi) break;
        while (less(v, a[--j])) if (j === lo) break;

        if (i >= j) break;

        baseSort.exch(a, i, j);
    }

    baseSort.exch(a, lo, j);

    return j;
}

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    'use strict';

    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}