// START
// INPUT Fahrenheit temperature
// COMPUTE Celsius temperature as follows:
//      a. Subtract 32 from the Fahrenheit temperature
//      b. Multiply the result by 5/9
//      c. ASSIGN the result to a variable representing the Celsius temperature
// PRINT Celsius temperature
// END

const convertToCelsius = function(f) {
  const celcius = (f - 32) * (5 / 9);
  return Number(celcius.toFixed(1));
};

// START
// DECLARE a variable named celsius and SET it to the Celsius temperature input by the user
// DECLARE a variable named fahrenheit
// CALCULATE fahrenheit by multiplying celsius by 9/5 and then adding 32
// PRINT the value of fahrenheit
// END

const convertToFahrenheit = function(c) {
  let fahrenheit = null;

  fahrenheit =  (c * (9 / 5) + 32);

  return Number(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
