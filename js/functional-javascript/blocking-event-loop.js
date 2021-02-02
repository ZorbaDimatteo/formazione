function repeat(operation, num) {
    // modify this so it can be interrupted
    if (num <= 0) return;
    setTimeout(operation(), 2 * 1000);
    return repeat(operation, --num);
}
  
module.exports = repeat;