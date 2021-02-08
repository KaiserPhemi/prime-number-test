/**
 * @desc Checks if number is prime
 * @param testNum a number
 */
const checkPrime = (testNum) => {
  for (let i = 2; i <= Math.sqrt(testNum); i++) {
    if (testNum % i === 0) {
      return false;
    }
  }
  return true;
};

module.exports = checkPrime;
