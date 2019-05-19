/*
output
  - returns list of all substrings of a string that are
    palindromic

rules
  - palindrome: substring consists of same sequence of chars
    forwards and backwards
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

function palindromes(string) {
  return substrings(string).filter(function (substring) {
    return substring === substring.split('').reverse().join('') &&
      substring.length > 1;
  });
}

// another solution
function isPalindrome(word) {
  return word.length > 1 && word === word.split('').reverse().join('');
}

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}

// test cases
// palindromes('abcd');       // []
// palindromes('madam');      // [ "madam", "ada" ]

// palindromes('hello-madam-did-madam-goodbye');
// // returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

// palindromes('knitting cassettes');
// // returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]