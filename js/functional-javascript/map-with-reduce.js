module.exports = function arrayMap(arr, fn) {
    let outputA = arr.reduce(element => fn(element));
    return outputA;
}