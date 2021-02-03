function alwaysThrows() {
    throw new Error('\"OH NOES\"');
}

function iterate(num) {
    console.log(num);
    return num++;
}

Promise.resolve(iterate(i))
.then(function (i) {
    let i = 1;
    while (i < 10){
        iterate(i);
    }
}).catch(function(i) {
    if (i === 5) console.log(alwaysThrows());
});