function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (arr.length === 0) {
    return [];
  }
  
  return arr.slice(1).concat(arr[0]);
}

/*
input
  - number to rotate
    - number
  - n, the amount of digits to rotate from the end of the number
    - number

output
  - the rotated number
    - number

rules
  - rotate last n and rotate by one digit to the left, moving the first digit to the end
  - when n is 1, number remains the same
  - when n is otherwise any up to the length of the number, rotation occurs normally
  - edge cases
    - what if n is greater than length of number?
    - what if n is negative? 0? NaN? Infinity? -Infinity?
  - failures
    - what if n is the wrong data type?

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917

mental model
  - rotate digits of number as array by applying rotation method previously defined and join then
    cast back to number type

algorithm
  - convert number to string
  - split into string digits
  - create new array of last n digits, rotated by applying rotation method
  - join the rotation part together
  - append the other piece to the rotated part

rotateRightmostDigits(735291, 1);      // 735291
['7', '3', '5', '2', '9', '1']
['1'].rotateArray(1) // ['1']
['7', '3', '5', '2', '9'].concat(['1']) // ['7', '3', '5', '2', '9', '1']
'735291'
735291

rotateRightmostDigits(735291, 2);      // 735219
'735219'
["7", "3", "5", "2", "1", "9"]
["1", "9"].rotateArray(2); // ["9", "1"]
["7", "3", "5", "2", "9", "1"]
'735291'
735291

rotateRightmostDigits(735291, 6);      // 352917
'352917'
["3", "5", "2", "9", "1", "7"]
[].concat(["3", "5", "2", "9", "1", "7"].rotateArray(6));
352917
*/

function rotateRightmostDigits(number, n) {
  var digitsStrings = String(number).split('');
  var leftmostDigitsStrings = digitsStrings.slice(0, -n);
  var rightmostDigitsStrings = digitsStrings.slice(-n);

  rightmostDigitsStrings = rotateArray(rightmostDigitsStrings);

  var rotatedNumberString = leftmostDigitsStrings.concat(rightmostDigitsStrings).join('');

  return Number(rotatedNumberString);
}

// another solution
function rotateRightmostDigits(number, n) {
  var numberString = String(number);
  var firstPart = numberString.slice(0, numberString.length - n);
  var secondPart = numberString.slice(numberString.length -n);
  var resultString = firstPart + rotateString(secondPart);

  return Number(resultString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}

console.log(rotateRightmostDigits(735291, 1) === 735291);
console.log(rotateRightmostDigits(735291, 2) === 735219);
console.log(rotateRightmostDigits(735291, 3) === 735912);
console.log(rotateRightmostDigits(735291, 4) === 732915);
console.log(rotateRightmostDigits(735291, 5) === 752913);
console.log(rotateRightmostDigits(735291, 6) === 352917);
