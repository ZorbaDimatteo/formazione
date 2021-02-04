function all(firstPromise, secondPromise) {
    let counter = 0;
    let firstResult = firstPromise.then(function(){return true});
    // console.log(counter);
    let secondResult = secondPromise.then(function(){return true});
    // console.log(counter);
    return Promise.resolve([firstResult, secondResult]);
}

all(getPromise1(), getPromise2())
    .then(console.log);