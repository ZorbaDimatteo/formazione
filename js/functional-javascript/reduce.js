module.exports = function countWords(inputWords) {
    let outputWords = inputWords.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
    return outputWords;
}