// libraries
const checkPrime = require("./checkPrime");
const getDivisor = require("./divisor");

/**
 * @desc Checks a number for prime
 * @param sampleInput
 */
const numChecker = (sampleInput) => {
  if (typeof sampleInput !== "number") {
    return "Input must be a number";
  }

  const isPrime = checkPrime(sampleInput);
  if (isPrime) {
    return 1;
  } else {
    let arr = getDivisor(sampleInput);
    return arr[1];
  }
};

module.exports = numChecker;
