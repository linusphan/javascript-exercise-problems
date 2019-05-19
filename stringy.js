/*
input
  positive integer

output
  return string of alternating 1s and 0s

rule
  always start with a 1
  length of string matches the given integer

algorithm
  build string; even index = 1, odd index = 0
  return new string
*/

function isEven(number) {
  return number % 2 === 0;
}

function stringy(length) {
  var newString = '';

  for (var i = 0; i < length; i++) {
    isEven(i) ? newString += '1' : newString += '0';
  }

  return newString;
}

// another solution
function stringy(size) {
  var result = '';
  var i;

  for (i = 0; i < size; i += 1) {
    if (i % 2 === 0) {
      result += '1';
    } else {
      result += '0';
    }
  }

  return result;
}

console.log(stringy(6) === "101010");
console.log(stringy(9) === "101010101");
console.log(stringy(4) === "1010");
console.log(stringy(7) === "1010101");