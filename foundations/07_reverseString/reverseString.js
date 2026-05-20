const reverseString = function(str) {
  // Converts the string to an array
  const strToArray = str.split('');

  // Reverses the array order
  const reversedArray = strToArray.reverse('');

  // Joins the reversed array
  const finalStr = reversedArray.join('');
  
  return finalStr;
};

console.log(reverseString("hello there"));

// Do not edit below this line
module.exports = reverseString;
