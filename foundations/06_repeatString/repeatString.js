const repeatString = function(string, num) {

  var repeatedStr = "";
  if (num === 0) {
    return ('');
  } else if (num < 0) {
    return 'ERROR';
  }
  // While the number is greater than 0, this will run
  while(num > 0) {
    repeatedStr += string;
    num--;
  }

  return repeatedStr;
 
};

  

console.log(repeatString('hey', 3));
console.log(repeatString('hello', 10));
console.log(repeatString('hi', 1));
console.log(repeatString('bye', 0));
console.log(repeatString('this', - 1));
console.log(repeatString('', 2));

// Do not edit below this line
module.exports = repeatString;
