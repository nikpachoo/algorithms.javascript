(() => {
    'use strict';

    var fs = require('fs');

    const insertionSort = require('./../insertion');

    const selectionSort = require('./../selection');

    const shellSort = require('./../shell');

    const mergeSort = require('./../merge');

    let original = fs.readFileSync('randomNumber.txt').toString().split("\n");

    original.pop();

    for(let i = 0; i < original.length; i++) {
        original[i] = +original[i];
    }

    testSort('insertion sort', insertionSort);

    testSort('selection sort', selectionSort);

    testSort('shell sort', shellSort);

    testSort('merge sort', mergeSort);

    testSort('system sort');

    function testSort(name, sort) {
        let a = original.slice(0);
        console.log('------------\nstart ' + name + ' with array length ' + a.length);

        console.time(name);

        sort ? sort(a) : a.sort(function(v, w) {
            return v - w;
        });

        console.timeEnd(name);

        console.log('finish ' + name + '. Is sorted: ' + isSorted(a));
    }

    function isSorted(a) {
        let N = a.length;

        for (let i = 1; i < N; i++) {
            if (a[i] < a[i - 1]) {
                console.warn('a[i] equal ' + a[i] + ' less then a[i - 1] equal ' + a[i - 1] + ' where i = ' + i);
                return false
            }
        }

        return true;
    }
})();