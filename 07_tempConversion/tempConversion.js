const convertToCelsius = function (x) {
  let number = (x - 32) * 0.5555555555555556;
  // let rounded = Math.round(number * 10) / 10;
  // let fixed = rounded.toFixed(1);
  return parseFloat(number.toFixed(1));
};

// x °F ≘ (x − 32) × 5/9 °C

const convertToFahrenheit = function (x) {
  let number = x * 1.8 + 32;
  // let rounded = Math.round(number * 10) / 10;
  // let fixed = rounded.toFixed(1);
  return parseFloat(number.toFixed(1));
};

// x °C ≘ (x × 9/5 + 32) °F

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
