"use strict";

const SymbolTable = require('./symbolTable');

module.exports = class BinarySearchTree extends SymbolTable {
    constructor(compareTo) {
        super();
        this.root = null;

        if (compareTo) {
            this.compaireTo = compareTo;
        }
    }

    size() {
        return this.sizeOf(this.root);
    }

    sizeOf(x) {
        if (x === null) return 0;
        else return x.N;
    }

    get(key) {
        return this.getFor(key, this.root);
    }

    getFor(key, node) {
        if (node === null) return null;

        if (node.key < key) {
            return this.getFor(key, node.right);
        } else if (node.key > key) {
            return this.getFor(key, node.left);
        } else {
            return node.val;
        }
    }

    put(key, val) {
        this.root = this.putFor(this.root, key, val);
    }

    putFor(node, key, val) {
        if (node === null) {
            return new Node(key, val, 1);
        }

        let compare = this.compaireTo(key, node.key);

        if (compare > 0) {
            node.right = this.putFor(node.right, key, val);
        } else if (compare < 0) {
            node.left = this.putFor(node.left, key, val);
        } else {
            node.val = val;
        }

        node.N = this.sizeOf(node.left) + this.sizeOf(node.right) + 1;

        return node;
    }

    keysOf(lo, hi) {
        let queue = [];

        this.keysOfTree(this.root, queue, lo, hi);

        return queue;
    }

    keysOfTree(x, queue, lo, hi) {
        if (x === null) return;

        let cmplo = this.compaireTo(lo, x.key);
        let cmphi = this.compaireTo(hi, x.key);

        if (cmplo < 0) this.keysOfTree(x.left, queue, lo, hi);
        if (cmplo <= 0 && cmphi >= 0) queue.push(x.key);
        if (cmphi > 0) this.keysOfTree(x.right, queue, lo, hi);
    }

    min() {
        if (this.root === null) return null;

        return this.minOf(this.root).key;
    }

    minOf(node) {
        if (node.left === null) return node;

        return this.minOf(node.left);
    }

    max() {
        if (this.root === null) return null;

        return this.maxOf(this.root).key;
    }

    maxOf(node) {
        if (node.right === null) return node;

        return this.maxOf(node.right);
    }

    view() {
        var treeView = this.viewLevel([this.root]);

        console.log(treeView);
    }

    viewLevel(nodes) {
        let children = [];
        let treeView = '';

        if (!nodes.length) return '';

        for (const node of nodes) {
            if (node === null) continue;
            treeView += this.viewNode(node);
            children.push(node.left);
            children.push(node.right);
        }

        treeView += '\n';

        return treeView + this.viewLevel(children);
    }

    viewNode(node) {
        let width = node.N;

        let border = '-'.repeat(Math.max(width / 2, 1));

        return border + node.key + border;
    }
};

class Node {
    constructor(key, val, N) {
        this.key = key;
        this.val = val;
        this.N = N;
        this.left = null;
        this.right = null;
    }
}