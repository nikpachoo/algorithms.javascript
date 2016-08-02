(() => {
    "use strict";

    const fs = require('fs');
    let a = [];

    for (let i = 0; i < 100000; i++) {
        a.push(randomInteger(1, 1000000));
    }

    var file = fs.createWriteStream('randomNumber.txt');

    file.on('error', function(err) { console.log(err)});


    a.forEach(function(v) {
        file.write(v + '\n');
    });

    file.end();

    function randomInteger(min, max) {
        var rand = min + Math.random() * (max - min);
        rand = Math.round(rand);
        return rand;
    }
})();