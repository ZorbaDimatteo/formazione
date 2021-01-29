let inputs = process.argv.slice(2);
// const reducer = (accumulator, currentChar) => accumulator + currentChar;
// let result = inputs.map(x => x.charAt(0)).reduce(reducer);
let result = inputs.map(x => x.charAt(0)).reduce(accumulator, currentC => accumulator + currentC);
console.log(`[${inputs}] becomes "${result}"`);