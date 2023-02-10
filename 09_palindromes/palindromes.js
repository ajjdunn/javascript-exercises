const palindromes = function (str) {
  // using the regen /[\W_]/g removes all non-alphanumeric characters
  let regex = /[\W_]/g;
  let lowRegStr = str.toLowerCase().replace(regex, "");
  let reverseStr = lowRegStr.split("").reverse().join("");
  return reverseStr === lowRegStr;
};

// Do not edit below this line
module.exports = palindromes;
