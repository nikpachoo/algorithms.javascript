/**
 * Queue (FIFO)
 */
class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.push(item);
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return !this.queue.length;
    }

    size() {
        return this.queue.length;
    }
}

module.exports = Queue;