/*
Implement strStr()
https://leetcode.com/problems/implement-strstr/description/

input:
  - string

output:
  - index of first occurrence of "needle" in "haystack"
    - -1 if needle is not present

rules:
  - edge cases
    - case-sensitive? yes
    - needle is an empty string => 0
    - haystack is an empty string => 0
    - repetition? ok
    - boundary conditions: ok

examples:
  Input: haystack = "hello", needle = "ll"
  Output: 2

  Input: haystack = "aaaaa", needle = "bba"
  Output: -1

mental model:
  - iterate through every character of haystack; for every character, iterate
    over needle.length characters and see if there is a match; if so then
    return starting index
  - return -1 at the end if no early return

algorithm:
  - if needle then return 0
  - if haystack is empty string but needle is not then return -1
  - set needle length to a variable
  - use for-loop to iterate over haystack
  - initialize new substring with const and current character
  - build substring needle length long from haystack
  - check if substring matches with needle; return curr index if yes
  - return -1 if no matches

*/

// solution 1

function strStr(haystack, needle) {
  if (needle.length === 0) { return 0; }

  const needleLength = needle.length;
  const haystackLength = haystack.length;

  for (let i = 0; i < haystackLength; i += 1) {
    let substring = haystack[i];

    for (let j = 1; j < needleLength; j += 1) {
      substring += haystack[i+j];
    }

    if (substring === needle) { return i; }
  }

  return -1;
}

// solution 2
function strStr(haystack, needle) {
  if (needle === '') return 0;

  var haystackLength = haystack.length;
  var needleLength = needle.length;
  var indexLimit = haystackLength - needleLength;

  for (var i = 0; i <= indexLimit; i += 1) {
    if (haystack.substr(i, needleLength) === needle) {
      return i;
    }
  }

  return -1;
}

console.log(strStr('hello', 'll') === 2);
console.log(strStr('aaaaa', 'bba') === -1);
console.log(strStr('aaaaa', 'A') === -1);
console.log(strStr('aaaaa', '') === 0);
console.log(strStr('', 'a') === -1);
console.log(strStr('', '') === 0);
