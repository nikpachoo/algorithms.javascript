export default class Bag {
    constructor() {
        this.items = [];
    }

    add(item) {
        this.items.push(item);
    }

    size() {
        return this.items.length;
    }

    [Symbol.iterator]() {
        let step = 0;
        let size = this.size();
        let items = this.items;
        return {
            next() {
                if (step < size) {
                    return {
                        value: items[step++],
                        done: false
                    };
                } else {
                    return {
                        value: undefined,
                        done: true
                    }
                }
            }
        }
    }
}