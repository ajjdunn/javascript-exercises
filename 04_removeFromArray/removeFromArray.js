const removeFromArray = function (arr, ...moreargs) {
  arr = arr.filter((arg) => !moreargs.includes(arg));
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
