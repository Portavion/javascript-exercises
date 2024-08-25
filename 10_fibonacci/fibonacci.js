const fibonacci = function(element) {
    intElement = parseInt(element);
    let first = 0;
    let second = 0;
    let third = 1;

    if (intElement === 0) {
        return 0;
    }
    else if (intElement < 0){
        return 'OOPS';
    }
    for (let i = 2; i<=intElement;i++){
        first = second;
        second = third;
        third = first + second;
    }
    return third;
};

// Do not edit below this line
module.exports = fibonacci;
