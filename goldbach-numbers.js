/*
input
  - integer n

output
  - logs all combo of 2 prime numbers whose sum is n

rules
  - log pairs with smaller number first
  - log null if n is odd or less than 4

data structure
  - integers

algorithm
  - begin with guard clauses
  - find all primes up in the range from 2..n
  - iterate through the range, 2 loops
  - sum values and log the results that sum to n
*/

function isPrime(number) {
  if (number === 2) return true;
  if (number % 2 === 0 || number <= 1) return false;

  for (var i = 3; i < number; i++) {
    if (number % i === 0) return false;
  }

  return true;
}

function checkGoldbach(number) {
  if (number % 2 === 1 || number < 4) console.log(null);
  for (var i = 2; i <= number / 2; i++) {
    if (isPrime(i)) {
      if (isPrime(number - i)) console.log(i, number - i);
    }
  }
}

// another solution
function isPrime(number) {
  var i;

  if (number < 2) {
    return false;
  }

  for (i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function checkGoldbach(n) {
  var num1 = 1;
  var num2;

  if (n < 4 || n % 2 === 1) {
    console.log(null);
    return;
  }

  do {
    num1 += 1;
    num2 = n - num1;
    if (isPrime(num1) && isPrime(num2)) {
      console.log(num1, num2);
    }
  } while (num1 !== num2);
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53
