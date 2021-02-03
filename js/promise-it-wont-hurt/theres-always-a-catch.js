function alwaysThrows(error) {
    console.log(error.message);
}

function iterate(num) {
    console.log(num);
    return num + 1;
}

Promise.resolve(iterate(1)).then(function (result) {
    while (result < 10){
        result = iterate(result);
    }
}).then(null, function (result) {
    if (result === 6)
        alwaysThrows(new Error('OH NOES'));
});