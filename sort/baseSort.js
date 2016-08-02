module.exports.less = function(v, w) {
    return v < w;
};

module.exports.exch = function(a, i, j) {
    var t = a[i];
    a[i] = a[j];
    a[j] = t;
};