/*
input
  - string

output
  - new string with all consecutive duplicate characters collapsed into a single character

rules
  - empty strings return empty string

data structure
  - strings

algorithm
  - initialize new string

  - iterate through string
  - add characters while checking most current char in new string
    - skip if the same

  - return new string
*/

function crunch(string) {
  var newString = '';

  for (var i = 0; i < string.length; i++) {
    if (string[i] !== newString[newString.length - 1]) {
      newString += string[i];
    } else {
      continue;
    }
  }

  return newString;
}

// another solution
function crunch(text) {
  var index = 0;
  var crunchText = '';

  while (index <= text.length - 1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }

    index += 1;
  }

  return crunchText;
}

// another solution
function crunch(text) {
  var regex = /([a-z0-9])\1+/gi;
  return text.replace(regex, '$1');
}

console.log(crunch('ddaaiillyy ddoouubbllee') === "daily double");
console.log(crunch('4444abcabccba') === "4abcabcba");
console.log(crunch('ggggggggggggggg') === "g");
console.log(crunch('a') === "a");
console.log(crunch('') === "");