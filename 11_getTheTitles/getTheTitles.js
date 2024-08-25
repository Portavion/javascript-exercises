const getTheTitles = function(array) {
    let titleArray = [];
    array.forEach ( book => titleArray.push(book.title));
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
