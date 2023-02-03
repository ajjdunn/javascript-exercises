const add = function (a, b) {
  let sum = a + b;
  return sum;
};

const subtract = function (a, b) {
  let sum = a - b;
  return sum;
};

const sum = function (x) {
  let result = x.reduce((accumulator, a) => accumulator + a, 0);
  return result;
};

const multiply = function (x) {
  // We can use the reduce function again but without an initial value so it doesn't interfere with multiplication
  let result = x.reduce((accumulator, curValue) => accumulator * curValue);
  return result;
};

const power = function (a, b) {
  let result = a ** b;
  return result;
};

const factorial = function (x) {
  if (x < 0) return -1;
  else if (x == 0) return 1;
  else {
    // We call factorial function within itself. This is recursion and it's dangerous but powerful.
    return x * factorial(x - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
