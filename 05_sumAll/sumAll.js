const sumAll = function(start, end) {
    let sum = 0;

    const max = Math.max(start, end);
    const min = Math.min(start, end);

    for (i = max; i >= min; i--) {
        if (i < 0) return 'ERROR';
        // if ()
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
