const reverseString = function(originalString) {
    let stringLength = originalString.length;
    let reverseString = '';
    for (let i = stringLength; i >= 0; i--) {
        reverseString += originalString.charAt(i);
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
