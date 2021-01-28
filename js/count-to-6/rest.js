module.exports = function average(...args){
    // let total = 0;
    // args.forEach(x => total += x);
    let total = args.reduce((x, y) => x + y);
    return total/args.length;
}