/*
input
  number

output
  arg * 2 if not double
  arg     if double

rules
  double means: left side === right side

data type
  numbers and strings

algorithm
  - if double do this else do that
*/

function twice(number) {
  if (isDouble(number)) {
    return number;
  } else {
    return number * 2;
  }
}

function isDouble(n) {
  var firstHalf;
  var secondHalf;
  var string = String(n);
  var length = string.length;

  if (length % 2 === 1) return false;

  firstHalf = string.substr(0, length / 2);
  secondHalf = string.substr(length / 2, length / 2);
  return firstHalf === secondHalf;
}

// another solution
function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

function isDoubleNumber(number) {
  var stringNumber = String(number);
  var center = stringNumber.length / 2;
  var leftNumber = stringNumber.substr(0, center);
  var rightNumber = stringNumber.substr(center);

  return leftNumber === rightNumber;
}

console.log(twice(37) === 74);
console.log(twice(44) === 44);
console.log(twice(334433) === 668866);
console.log(twice(444) === 888);
console.log(twice(107) === 214);
console.log(twice(103103) === 103103);
console.log(twice(3333) === 3333);
console.log(twice(7676) === 7676);