module.exports = function repeat(operation, num) {
    if (num <= 0){
        return operation;
    }

    return repeat(operation, num - 1);
    /* for (let i = 0; i < num; i++){
        operation;
    }*/
}