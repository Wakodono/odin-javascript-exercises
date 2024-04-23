const sumAll = function(start, end) {
    let sum = 0;

    const max = Math.max()
    const min = Math.min()

    for (i = end; i >= start; i--) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
