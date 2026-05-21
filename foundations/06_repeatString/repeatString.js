const repeatString = function(string, num) {

  var repeatedStr = "";
  if (num === 0) {
    return ('');
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

// Do not edit below this line
module.exports = repeatString;
