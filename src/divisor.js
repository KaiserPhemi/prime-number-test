/**
 * @desc Gets the divisor of a number
 * @param testNum number
 */
const getDivisor = (testNum) => {
  let divisors = [];
  for (let i = 1; i <= testNum; i++) {
    if (testNum % i === 0) {
      divisors.push(i);
    }
  }
  return divisors.sort((a, b) => a - b);
};

module.exports = getDivisor;
