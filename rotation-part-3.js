function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (arr.length === 0) {
    return [];
  }
  
  return arr.slice(1).concat(arr[0]);
}

function rotateRightmostDigits(number, n) {
  var digitsStrings = String(number).split('');
  var leftmostDigitsStrings = digitsStrings.slice(0, -n);
  var rightmostDigitsStrings = digitsStrings.slice(-n);

  rightmostDigitsStrings = rotateArray(rightmostDigitsStrings);

  var rotatedNumberString = leftmostDigitsStrings.concat(rightmostDigitsStrings).join('');

  return Number(rotatedNumberString);
}

/*
input
  - number

output
  - max rotation applied to number
    - number

rules
  - rotate by one digit to the left, keep digit in place, then repeat until the last rotation is made
  - 1 digit number returns same number
  - leading 0s get dropped
  - edge cases
    - negative numbers? Special numbers? arguments of 0? No arguments?
  - failures
    - wrong data types?

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

mental model
  - for length > 2, rotateRightmostDigits is applied from (length..2).
  - for length === 2, rotation of whole thing once
  - for length === 1, return same number

algorithm
  - if length is greater than 2
      iterate from length down to 2
    else if length is 2
      apply rotate function once for n of 2
    else if length is 1
      return number
    else return undefined
*/

function maxRotation(number) {
  var length = String(number).length;

  if (length > 2) {
    for (var i = length; i >= 2; i -= 1) {
      number = rotateRightmostDigits(number, i);
    }
  } else if (length === 2) {
    number = rotateRightmostDigits(number, 2);
  } else if (length === 1) {
    return number;
  } else {
    return undefined;
  }

  return number;
}

// another solution
function maxRotation(number) {
  var i;
  for (i = String(number).length; i > 1; i -= 1) {
    number = rotateRightmostDigits(number, i);
  }

  return number;
}

console.log(maxRotation(735291) === 321579);
console.log(maxRotation(3) === 3);
console.log(maxRotation(35) === 53);
console.log(maxRotation(105) === 15);
console.log(maxRotation(8703529146) === 7321609845);
