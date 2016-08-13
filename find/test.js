"use strict";

const SequentialSearchST = require('./sequentialSearchST');

const fs = require('fs');

const minlen = 12;
let st = new SequentialSearchST();

let textData = fs.readFileSync('./find/tale.txt').toString().split(" ");

for (let i = 0; i < textData.length; i++) {
    let word = textData[i];

    if (word.length < minlen) continue;
    if (!st.contains(word)) {st.put(word, 1);}
    else st.put(word, st.get(word) + 1);
}

let max = '';

st.put(max, 0);
let keys = st.keys();

for (let i = 0; i < keys.length; i++) {
    let word = keys[i];
    if (st.get(word) > st.get(max)) max = word;
}

console.log(max + ' ' + st.get(max));
