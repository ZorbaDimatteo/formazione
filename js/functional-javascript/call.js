module.exports = function duckCount(...args) {
    let count = args.reduce((a, v) => (v.hasOwnProperty('quack') ? a + 1 : a), 0);
    return count
}