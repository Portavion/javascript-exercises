const palindromes = function (word) {
    let nopunctWord = (word.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '')).toLowerCase();
    nospaceWord = nopunctWord.replace(/\s/g, '');
    let array = nospaceWord.split('');

    let reversedArray = array.toReversed();
    console.log(array);
    console.log(reversedArray);

    if (reversedArray.toString() == array.toString()){
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
