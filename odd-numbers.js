/* 
input: positive integer
output: logs all the odd numbers
  - from 1 to argument (inclusive)

rules
  - odd numbers: n % 2 === 1 or n % 2 !== 0
  - log all numbers on separate lines
  - inclusive

data structure
  - integers

algorithm
  - loop through each number from 1 until
    argument
  - use if conditional
    - log if odd
  - implicitly return undefined
*/

function logOddNumbers(positiveInt) {
  var isOdd;
  for (var i = 1; i <= positiveInt; i++) {
    isOdd = i % 2 !== 0;
    if (isOdd) console.log(i);
  }
}

// further exploration 1
function logOddNumbers(positiveInt) {
  for (var i = 1; i <= positiveInt; i += 2) {
    console.log(i);
  }
}

// further exploration 2
function logOddNumbers(positiveInt) {
  var isEven;
  for (var i = 1; i <= positiveInt; i++) {
    isEven = i % 2 === 0;
    if (isEven) continue;
    console.log(i);
  }
}

// example
logOddNumbers(19);
