const repeatString = function(string, num) {

  var repeatedStr = "";
  if (num === 0) {
    return ('ERROR');
  }
  // While the number is greater than 0, this will run
  while(num > 0) {
    repeatedStr += string;
    num--;
  }

  return repeatedStr;
 
};

  

console.log(repeatString('hey', 1));

// Do not edit below this line
module.exports = repeatString;
