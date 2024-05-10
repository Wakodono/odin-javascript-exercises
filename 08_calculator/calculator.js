const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr.reduce((sum, currentItem) => sum + currentItem, 0);
};

const multiply = function (arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr.reduce((acc, currentItem) => acc * currentItem);
};

const power = function (base, exponent) {
  let result = 1;

  for (let i = 0; i < exponent; i++) {
    result *= base;
  }

  return result;
};

// const power = (base, exponent) => Math.pow(base, exponent);

const factorial = function (n) {
  let result = 1;
  for (let i = n; i >= 1; i--) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
