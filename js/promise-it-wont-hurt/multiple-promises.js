'use strict';
function all(firstPromise, secondPromise) {
    let result = [];
    return new Promise((resolve, reject) => {
        return firstPromise
        .then((value)=> {
            result.push(value);
            return secondPromise;
        }).then((value) => {
            result.push(value);
            resolve(result);
        })
    })
}

all(getPromise1(), getPromise2()).then(console.log);