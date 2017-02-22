"use strict";

const SymbolTable = require('./symbolTable');

module.exports = class BinarySearchST extends SymbolTable {
    constructor(compareTo) {
        super();
        
        this.keysArr = [];
        this.vals = [];
        this.N = 0;

        if (compareTo) {
            this.compaireTo = compareTo;
        }
    }
    
    size() {
        return this.N;
    }

    keysOf(lo, hi) {
        return this.keysArr.slice(lo, hi);
    }
    
    get(key) {
        if (this.isEmpty()) return null;
        var i = this.rank(key);
        
        if (i < this.N && this.keysArr[i] && this.compaireTo(this.keysArr[i], key) === 0) return this.vals[i];
        else return null;
    }

    isEmpty() {
        return !this.N;
    }
    
    put(key, val) {
        var i = this.rank(key);

        if (i < this.N && this.keysArr[i] && this.compaireTo(this.keysArr[i], key) === 0) {
            this.vals[i] = val;
            return;
        }
        
        for (let j = this.N; j > i; j--) {
            this.keysArr[j] = this.keysArr[j - 1];
            this.vals[j] = this.vals[j - 1];
        }

        this.keysArr[i] = key;
        this.vals[i] = val;

        this.N++;
    }
    
    rank(key) {
        var lo = 0;
        var hi = this.N - 1;

        while (lo <= hi) {
            let med = (hi - lo) / 2 + lo;
            let compareResult = this.compaireTo(key, this.keysArr[med]);

            if (compareResult < 0) hi = med - 1;
            else if (compareResult > 0) lo = med + 1;
            else return med;
        }

        return lo;
    }
};