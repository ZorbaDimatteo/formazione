function alwaysThrows(error) {
    throw new Error('OH NOES')
}

function iterate(num) {
    console.log(num);
    return num + 1;
}

Promise.resolve(iterate(1))
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows) // si blocca qui con l'errore
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch((error) => console.log(error.message))