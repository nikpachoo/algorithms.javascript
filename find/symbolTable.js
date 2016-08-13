"use strict";

module.exports = class SymbolTable {
    /**
     * put pair key-value in table
     * remove key of table if value equal null
     * @param key
     * @param val
     */
    put(key, val) {}

    /**
     * return value for key
     * @param key
     */
    get(key) {}

    /**
     * remove key and related value from table
     * @param key
     */
    remove(key) {}

    /**
     * is there value relative with key
     * @param key
     */
    contains(key) {
        return !!this.get(key);
    }

    /**
     * table is empty?
     */
    isEmpty() {}

    /**
     * quantity pairs key-value
     */
    size() {
        return this.sizeOf(this.min(), this.max());
    }

    /**
     * the lowest key of table
     */
    min() {}

    /**
     * the biggest key of table
     */
    max() {}

    /**
     * the biggest key, which lower or equal a key
     * @param key
     */
    floor(key) {}

    /**
     * the lowest key, which bigger or equal a key
     * @param key
     */
    ceiling(key) {}

    /**
     * the number of keys, less a key
     * @param key
     */
    rank(key) {}

    /**
     * key with rank k
     * @param k
     */
    select(k) {}

    /**
     * remove the lowest key
     */
    removeMin() {
        this.remove(this.min());
    }

    /**
     * remove biggest key
     */
    removeMax() {
        this.remove(this.max());
    }

    /**
     * number keys of interval lo-hi
     */
    sizeOf(lo, hi) {
        if (hi.compareTo(lo) < 0)
            return 0;
        else if (this.contains(hi))
            return this.rank(hi) - this.rank(lo) + 1;
        else
            return this.rank(hi) - this.rank(lo);
    }

    /**
     * all keys from table in order
     */
    keys() {
        return this.keysOf(this.min(), this.max());
    }

    /**
     * keys from interval lo-hi in order
     * @param lo
     * @param hi
     */
    keysOf(lo, hi) {}
};