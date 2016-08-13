"use strict";

const SymbolTable = require('./symbolTable');

module.exports = class SequentialSearchST extends SymbolTable {
    constructor() {
        super();
        this.first = null;
    }

    put(key, val) {
        for (let x = this.first; !!x; x = x.next) {
            // x.equal(key)
            if (x.key === key) {
                x.val = val;
                return;
            }
        }

        this.first = new Node(key, val, this.first);
    }

    get(key) {
        for (let x = this.first; !!x; x = x.next) {
            if (x.key === key) {
                return x.val;
            }
        }

        return null;
    }

    keys() {
        let keys = [];

        for (let x = this.first; !!x; x = x.next) {
            keys.push(x.key);
        }

        return keys;
    }
};

class Node {
    constructor(key, val, next) {
        this.key = key;
        this.val = val;
        this.next = next;
    }
}