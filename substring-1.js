/*
input:
  - string, starting index, and length

output:
  - returns a substring

rules:
  - negative starting index: strLength + start
  - length: maximum length of substring
    - if exceeds num of chars available, use available chars
    - if 0 or negative, return empty string
  - can use [] and `length` property

data structure:
  - strings
  - numbers for index

algorithm:
  - set start index
    - if negative, calculate new start index value
  - find the limit index
    - if <= 0, set 0
    - if exceeds, set string length
    - else 
  - create a new string, iterating from start to limit
  - return new string
*/

function substr(string, start, length) {
  var limit;
  var strLength = string.length;
  var subString = '';

  // setting the start value
  if (start < 0) start = strLength + start;

  // setting the limit value
  if (length <= 0) {
    limit = 0
  } else if (length > strLength) {
    limit = strLength;
  } else {
    limit = start + length;
  }

  // creating a new string
  for (i = start; i < limit; i += 1) {
    subString += string[i];
  }

  return subString;
}

// another solution
function substr(string, start, length) {
  var newString = '';
  var index;
  var i;

  if (start < 0) {
    start = string.length + start;
  }

  for (i = 0; i < length; i += 1) {
    index = start + i;

    if (string[index] === undefined) {
      break;
    }

    newString += string[index];
  }

  return newString;
}

// test cases / examples
var string = 'hello world';

console.log(substr(string, 2, 4) === "llo ");
console.log(substr(string, -3, 2) === "rl");
console.log(substr(string, 8, 20) === "rld");
console.log(substr(string, 0, -20) === "");
console.log(substr(string, 0, 0) === "");