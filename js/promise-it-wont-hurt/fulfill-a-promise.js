var promise = new Promise(function (fulfill, reject) {
    // Your solution here
    // fulfill(setTimeout(console.log, 3 * 100, 'FULFILLED!'));
    setTimeout(function () {
        fulfill('FULFILLED!');
    }, 300);
});
  
// Your solution here
// promise.then();
promise.then(console.log);