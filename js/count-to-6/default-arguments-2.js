module.exports = function makeImportant(string, exclamNum = string.length){
    const exclam = '!'; 
    return string + exclam.repeat(exclamNum);
}