/**
 * Stack (LIFO)
 */
class Stack {
    constructor() {
        this.stack = [];
    }

    push(element) {
        this.stack.unshift(element);
    }

    pop() {
        this.stack.shift();
    }

    isEmpty() {
        return !this.stack.length;
    }

    size() {
        return this.stack.length
    }
}

module.exports = Stack;