/*
A 'featured number' (something unique to this exercise) is an odd number that is a multiple of 7, with all of its digits occuring exactly once each. For example, 49 is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument, and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.

Examples:

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987

input
  - number

output
  - number that represents the next featured number

rules
  - what is a featured number?
    - odd
    - multiple of 7
    - each digit occurs only once
      -> max featured number is something less than this: 9876543210
  - return value must be next featured number greater than the argument number
  - if no possible next featured number, issue an error message
  - failures
    - input of wrong data type: throw any Errors? Issue error messages?
      - return undefined
  - edge cases
    - negative numbers as input? -> able to produce expected results
    - -Infinity, Infinity, NaN -> don't worry -> return undefined

examples
  - 49 is a featured number
  - 98 is not a featured number (not odd)
  - 133 is not a featured number (3 repeats)

featured();             // undefined
featured('a');          // undefined
featured([]);           // undefined
featured({a: '1'});     // undefined
featured(null);         // undefined
featured(undefined);    // undefined
featured(-1);           // 7
featured(0);            // 7
featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987

mental model
  - Starting at the number input, keep increasing the number until all requirements are met to be a featured number and then return that number

data structure
  - numbers
  - array

algorithm
  - if argument it's not a number then return undefined
  - if it's Infinity, -Ifinity, or NaN return undefinde

  - increment the starting number until I find a number that is odd and a multiple of 7
    - keep adding 1 in a do while loop
  - check if each digit occurs only once
    - if digits don't repeat
        return the number
      else
        keep iterating and adding 7 until I reach the featured number

method that checks for repeating digits
  - transform the number argument into an array of digits: split -> map
  - iterate through the array and keep count of how many occurences for each digit
    - if the occurence is at any time greater than 1 than return false
      - Array.prototype.every()

featured(-1)
*/

function isOdd(number) {
  return number % 2 === 1;
}

function doesNotHaveRepeatingDigits(number) {
  var digits = String(number).split('').map(Number);
  
  return digits.every(function (digit) {
    var count = 0;

    for (var i = 0; i < digits.length; i += 1) {
      if (digits[i] === digit) {
        count += 1;
      }; 
    }
    
    return count === 1;
  });
}

function featured(number) {
  if (
    typeof number !== 'number' ||
    number === Infinity ||
    number === -Infinity ||
    isNaN(number)
  ) {
    return undefined;
  }
  
  do {
    number += 1;
    
    if (number > 9876543210) {
      console.log('No next featured number');
      return undefined;
    }
  } while (!isOdd(number) || number % 7 !== 0 || !doesNotHaveRepeatingDigits(number));
  
  return number;
}

// another solution
function featured(number) {
  var MAX_FEATURED = 9876543201;
  var featuredNum = toOddMultipleOf7(number);

  do {
    if (allUnique(featuredNum) && featuredNum > number) {
      return featuredNum;
    }

    featuredNum += 14;
  } while (featuredNum < MAX_FEATURED);

  return 'There is no possible number that fulfills those requirements.';
}

function toOddMultipleOf7(number) {
  while (number % 2 === 0 || number % 7 !== 0) {
    number += 1;
  }

  return number;
}

function allUnique(number) {
  var digits = String(number).split('');
  var seen = {};
  var i;

  for (i = 0; i < digits.length; i += 1) {
    if (seen[digits[i]]) {
      return false;
    } else {
      seen[digits[i]] = true;
    }
  }

  return true;
}

// console.log(featured() === undefined);
// console.log(featured('a') === undefined);
// console.log(featured([]) === undefined);
// console.log(featured({a: '1'}) === undefined);
// console.log(featured(null) === undefined);
// console.log(featured(undefined) === undefined);
// console.log(featured(-1) === 7);
// console.log(featured(0) === 7);
console.log(featured(12) === 21);
console.log(featured(20) === 21);
console.log(featured(21) === 35);
console.log(featured(997) === 1029);
console.log(featured(1029) === 1043);
console.log(featured(999999) === 1023547);
console.log(featured(999999987) === 1023456987);
// console.log(featured(9876543210) === undefined);
