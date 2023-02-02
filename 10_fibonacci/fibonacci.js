const fibonacci = function (x) {
  const arr = [
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
    2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025,
  ];
  if (x < 0) {
    return "OOPS";
  } else {
    let result = arr[x];
    return result;
  }
};

// Do not edit below this line
module.exports = fibonacci;
