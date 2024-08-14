const repeatString = function(inputString, times) {
    let repeatedString = '';
    if (times < 0){
        return "ERROR";
    }
    else {
        for(let i = 1; i<=times; i++) {
            repeatedString += inputString;
        }
        return repeatedString;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
