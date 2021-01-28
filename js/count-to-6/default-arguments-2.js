module.exports = function makeImportant(string, exclamNum = string.length){
    let exclam = '!';
    exclam = exclam.repeat(exclamNum)
    string = string + exclam;
    console.log(string);
}

// non capisco