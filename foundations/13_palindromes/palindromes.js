const palindromes = function (str) {
  const strLowerCase = str.toLowerCase();
  const strNoSpaces = strLowerCase.replaceAll(" ", "");
  const strNoPunctuation = strNoSpaces.replaceAll(/[^a-zA-Z0-9]/g, "");
  const string = strNoPunctuation;

  const reversedStr = string.split('').reverse().join('');

  if(string === reversedStr) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
