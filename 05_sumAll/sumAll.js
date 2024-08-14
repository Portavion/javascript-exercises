const sumAll = function(start, end) {
    let sum = 0;
    if (start > end) {
        sum = end;
        end = start;
        start = sum;
        sum = 0;
    }

    if (start < 0 || end < 0){
        return 'ERROR';
    }

    if ((start % 1) != 0 || (end % 1) != 0){
        return 'ERROR';
    }

    if (typeof(start) != 'number' || typeof(end) != 'number'){
        return 'ERROR';
    }

    for ( i = start; i<= end; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
