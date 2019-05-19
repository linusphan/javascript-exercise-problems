/*
rules
  - if ascii is (65..90) it is capital

algorithm
  - check if ascii is within range
    - if so modify
    - else, leave it
  - return string
*/

function toLowerCase(string) {
  var lowercasedString = '';
  var asciiNumeric;
  var i;

  for (i = 0; i < string.length; i += 1) {
    asciiNumeric = string[i].charCodeAt(0);
    if (asciiNumeric >= 65 && asciiNumeric <= 90) {
      asciiNumeric += 32;
      lowercasedString += String.fromCharCode(asciiNumeric);
    } else {
      lowercasedString += string[i];
    }
  }

  return lowercasedString;
}

// another solution
function toLowerCase(string) {
  var CONVERSION_OFFSET = 32;
  var newString = '';
  var charCode;
  var i;

  for (i = 0; i < string.length; i += 1) {
    charCode = string.charCodeAt(i);

    if (string[i] >= 'A' && string[i] <= 'Z') {
      charCode += CONVERSION_OFFSET;
    }

    newString += String.fromCharCode(charCode);
  }

  return newString;
}

console.log(toLowerCase('ALPHABET') === "alphabet");
console.log(toLowerCase('123') === "123");
console.log(toLowerCase('abcDEF') === "abcdef");