/*
rules
  SETTING START AND END IN CASE:
  - start / end < 0 || NaN, treat as 0
  - start > end, swap the two, return substring
  - end undefined if omited, (start..end of string)
  - start / end > strLength, start / end = strLength

  HANDLING START AND END:
  - empty string if start === end
  - (+)start and (+)end, start < end, within bounds
    - substring start...end (already handled with switch statement)

algorithm
  - according to the rules...
    set the start
    set the end
  - iterate through string and build a substring
  - return substring
*/

function substring(string, start, end) {
  var substring = '';
  var strLength = string.length;

  // setting start and end
  switch (true) {
    case start < 0 || isNaN(start):
      start = 0;
      break;
    case end < 0 || (isNaN(end) && end !== undefined):
      end = 0;
      break;
    case (start > end):
      var temp = start;
      start = end;
      end = temp;
      break;
    case start > strLength:
      start = strLength;
      break;
    case end > strLength:
      end = strLength;
      break;
  }

  if (start === end) return '';
  if (end === undefined) end = strLength;

  // building substring
  for (var i = start; i < end; i += 1) {
    substring += string[i];
  }

  return substring;
}

// another solution
function substring(string, start, end) {
  var newString = '';
  var temp;
  var i;

  if (end === undefined) {
    end = string.length;
  }

  if (start < 0 || isNaN(start)) {
    start = 0;
  }

  if (end < 0 || isNaN(end)) {
    end = 0;
  }

  if (start > end) {
    temp = start;
    start = end;
    end = temp;
  }

  if (start > string.length) {
    start = string.length;
  }

  if (end > string.length) {
    end = string.length;
  }

  for (i = start; i < end; i += 1) {
    newString += string[i];
  }

  return newString;
}

var string = 'hello world';

console.log(substring(string, 2, 4) === "ll");
console.log(substring(string, 4, 2) === "ll");
console.log(substring(string, 0, -1) === "");
console.log(substring(string, 2) === "llo world");
console.log(substring(string, 'a') === "hello world");
console.log(substring(string, 8, 20) === "rld");
