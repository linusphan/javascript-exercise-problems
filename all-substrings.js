/*
input
  - string

output
  - array of substrings of a string

rules
  - order returned list by where in the string the substring
    begins

algorithm
  - initialize result array
  - split each character of sting into an array of chars
    ['a', 'b', 'c']
  - transform each character into substrings
    ['abc', 'bc', 'c']
  - get all substrings of each substring
    - substringsAtStart
    - iterate over the resulting array
  - iterate through each of the substrings and append to result
    array
  - return result array
*/

function substringsAtStart(string) {
  return string.split('').map(function (_, idx) {
    return string.substring(0, idx + 1);
  });
}

function substrings(string) {
  var result = [];

  var substrings = string.split('').map(function (_, idx) {
    return string.slice(idx)
  });

  substrings.forEach(function (substring) {
    substringsAtStart(substring).forEach(function (subSubString) {
      result.push(subSubString);
    });
  });

  return result;
}

// another solution
function substrings(string) {
  return string.split('').map(function (char, idx) {
    return substringsAtStart(string.substring(idx));
  }).reduce(function (result, array) {
    return result.concat(array);
  });
}

substrings('abcde');

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
