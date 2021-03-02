let isCoolNumber = require(process.argv[2]);
let assert = require('assert');
// MIA SOLUZIONE (anche troppo elaborata)
// assert.strictEqual(isCoolNumber(42), true, 'Should be true');
// SOLUZIONE ESERCIZIO
assert(isCoolNumber(42));