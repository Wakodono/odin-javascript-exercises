const sumAll = function(start, end) {
    if (typeof start !== 'number' || typeof end !== 'number') return 'ERROR'
    let sum = 0;

    const max = Math.max(start, end);
    const min = Math.min(start, end);

    for (let i = max; i >= min; i--) {
        if (i < 0) return 'ERROR'
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
