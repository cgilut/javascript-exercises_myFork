const convertToCelsius = function(tempFahrenheit) {
      let tempCelsius = ((tempFahrenheit - 32) / 9 * 5).toFixed(1);
      return +tempCelsius;
};

const convertToFahrenheit = function(tempCelsius) {
      let tempFahrenheit = (tempCelsius / 5 * 9 + 32).toFixed(1);
      return +tempFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
