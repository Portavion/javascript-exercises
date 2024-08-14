const removeFromArray = function(originalArray, removalValue1, removalValue2='', removalValue3='', removalValue4='') {
    //let newArray = originalArray.splice(removalPosition+1, 1);
    //originalArray.splice(removalPosition-1, 1);

    for (let i = 0; i <= originalArray.length ; i++) {
        if (originalArray[i] === removalValue1) {
            originalArray.splice(i, 1);
            i--;
        }
    }

    if (removalValue2 != '') {
        for (let i = 0; i <= originalArray.length ; i++) {
            if (originalArray[i] === removalValue2) {
                originalArray.splice(i, 1);
                i--;
            }
        }
    }

    if (removalValue3 != '') {
        for (let i = 0; i <= originalArray.length ; i++) {
            if (originalArray[i] === removalValue3) {
                originalArray.splice(i, 1);
                i--;
            }
        }
    }

    if (removalValue4 != '') {
        for (let i = 0; i <= originalArray.length ; i++) {
            if (originalArray[i] === removalValue4) {
                originalArray.splice(i, 1);
                i--;
            }
        }
    }

    return originalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
