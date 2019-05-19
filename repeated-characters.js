/*
input
  string

output
  object
    keys
      lower alphas
    values
      counts as numbers
    for characters that have a count of 2 or more

rules
  name: repeatedCharacters
  num of parameters: 2
  ignores case

data structure
  - an array

algorithm
  array of characters
    split string argument based on empty string, ''
  build object that increments count of characters
    initialize via object literal notation
    iterate over characters
    increment by 1 or initialize to 1
  build new object that will store only repeated characters
    initialize with object literal notation
    iterate over previous object
    add properties that agree with requirements
  return this object
*/

function repeatedCharacters(string) {
  var chars = string.toLowerCase().split('');
  var count = {};
  var repeatedCount = {};

  chars.forEach(function(char) {
    if (count[char] === undefined) {
      count[char] = 0;
    }

    count[char] += 1;
  });

  var countKeys = Object.keys(count);
  countKeys.forEach(function(char) {
    if (count[char] > 1) {
      repeatedCount[char] = count[char];
    }
  });

  return repeatedCount;
}

// another solution
function repeatedCharacters(string) {
  var result = {};
  var lowerCaseString = string.toLowerCase();
  var i;
  var key;

  for (i = 0; i < lowerCaseString.length; i += 1) {
    if (result[lowerCaseString[i]] !== undefined) {
      result[lowerCaseString[i]] += 1;
    } else {
      result[lowerCaseString[i]] = 1;
    }
  }

  for (key in result) {
    if (result[key] === 1) {
      delete result[key];
    }
  }

  return result;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }