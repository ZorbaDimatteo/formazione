'use strict';
first().then(function (result) {
    return second(result).then(function (finalResult) {
        return console.log(finalResult);
    });
});

// soluzione data dall'esercizio
    
/* var firstPromise = first();
    
var secondPromise = firstPromise.then(function (val) {
  return second(val);
});

secondPromise.then(console.log); */

// come alternativa si poteva fare:
// first().then(second).then(console.log);