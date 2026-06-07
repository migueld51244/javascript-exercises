const convertToCelsius = function(fahrenheit) {
  let converted = 0;
  let formula = ((fahrenheit - 32) * (5/9));
  converted = formula;
  let rounded = Math.round(converted * 10) / 10;
  return rounded;
};

console.log(convertToCelsius(100));

const convertToFahrenheit = function(celcius) {
  let converted = 0;
  let formula = (celcius * 1.8 + 32);
  converted = formula;
  let rounded = Math.round(converted * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
