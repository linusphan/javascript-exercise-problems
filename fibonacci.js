/*
input
  integer greater than or equal to 2

output
  index of the first Fibonacci number with that number of digits

rule
  You may assume that the argument is always an integer greater than or equal to 2

algorithm
  create something that computes fibonacci numbers
  for each iteration, convert to string and calculate string length
  keep track of index and return that index for the length that matches argument

test cases:
findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74
*/

function findFibonacciIndexByLength(length) {
  var index = 3;
  var num1 = 1;
  var num2 = 1;
  var num3;
  var numlength;

  while (true) {
    num3 = num1 + num2;
    numlength = String(num3).length;

    if (numlength === length) {
      return index;
    } else {
      index++;
      num1 = num2;
      num2 = num3;
    }
  }
}

// another solution
function findFibonacciIndexByLength(length) {
  var first = 1;
  var second = 1;
  var index = 2;
  var fibonacci;

  do {
    fibonacci = first + second;
    index += 1;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return index;
}

console.log(findFibonacciIndexByLength(2) === 7);
console.log(findFibonacciIndexByLength(10) === 45);
console.log(findFibonacciIndexByLength(16) === 74);