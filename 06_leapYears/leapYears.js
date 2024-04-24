// A year is considered a leap year if it meets one of the following conditions:

// It is evenly divisible by 4 but not evenly divisible by 100.
// It is evenly divisible by 400.
const leapYears = function(year) {
 if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return true
 } else {
    return false
 }
};

// Do not edit below this line
module.exports = leapYears;
