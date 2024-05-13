const fibonacci = function(n) {
    n = parseInt(n)

    if (typeof(n) !== "number" || n < 0 || isNaN(n)) {
        return "OOPS";
    } else if (n === 0) {
        return 0;
    } else if (n === 1 || n === 2) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
};

module.exports = fibonacci;