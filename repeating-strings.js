/*
input:
  - string
  - a number, times

output:
  - return string repeated times number of times
  - undefined if times is not a number or negative
  - empty string if times is 0
*/


function repeat(string, times) {
  switch (true) {
    case (typeof times !== 'number'):
    case (times < 0):
      return undefined;
  }

  if (times === 0) return '';

  for (var i = 1; i < times; i++) {
    string += string;
  }

  return string;
}

// another solution
function repeat(string, times) {
  var repeated;
  var i;
  
  if (!isPositiveInteger(times)) {
    return undefined
  }
  
  repeated = '';
  for (i = 0; i < times; i += 1) {
    repeated += string;
  }
  
  return repeated;
}

function isPositiveInteger(value) {
  return Number(value) === value && value >= 0;
}



console.log(repeat('abc', 1) === "abc");
console.log(repeat('abc', 2) === "abcabc");
console.log(repeat('abc', -1) === undefined);
console.log(repeat('abc', 0) === "");
console.log(repeat('abc', 'a') === undefined);
console.log(repeat('abc', false) === undefined);
console.log(repeat('abc', null) === undefined);
console.log(repeat('abc', '  ') === undefined);