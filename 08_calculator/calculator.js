const add = function (a, b) {
  let sum = a + b;
  return sum;
};

const subtract = function (a, b) {
  let sum = a - b;
  return sum;
};

const sum = function (x) {
  let result = x.reduce((partialSum, a) => partialSum + a, 0);
  return result;
};

const multiply = function () {};

const power = function () {};

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
