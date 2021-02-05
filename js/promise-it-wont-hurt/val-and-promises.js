function attachTitle(string) {
    return 'DR. ' + string;
}

/* let promise = new Promise(function (fulfill) {
    fulfill('MANHATTAN');
});

return promise.then(attachTitle).then(console.log); */

Promise.resolve('MANHATTAN')
    .then(attachTitle)
    .then(console.log);