const sumAll = function(num1, num2) {
  let total = 0
  for (num1; num1 <= num2; num1++) {
    total += num1
  }
  return total;
};

console.log(sumAll(1,3));
// Do not edit below this line
module.exports = sumAll;
