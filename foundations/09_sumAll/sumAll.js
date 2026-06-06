const sumAll = function(num1, num2) {
  let total = 0;
  let min = Math.min(num1, num2)
  let max = Math.max(num1, num2)
  if (num1 < 0 || num2 < 0) {
    return 'ERROR';
  } else if (num1 % !0 || num2 % !0) {
    return 'ERROR';
  } else if (typeof num1 !== "number" || typeof num2 !== "number") {
    return 'ERROR';
  }
  for (min; min <= max; min++) {
    total += min;
  }
  return total;
};

console.log(sumAll("2",1));
// Do not edit below this line
module.exports = sumAll;
