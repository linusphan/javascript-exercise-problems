/* 
input: 2 positive integers
output: gcd

rules:
  - gcd: largest similar dividend for both args
  - only positive integers
  
data structure
  - numbers

algorithm
  - take smallest number
  - get all factors from that number
  - go through each number to see if it is also a factor of the larger num
  - return the gcd
*/

/*
function gcd(num1, num2) {
  var min = Math.min(num1, num2);
  var max = Math.max(num1, num2);
  var factors = [];
  
  for (var i = min; i > 0; i--) {
    if (min % i === 0) factors.push(i);
  }
  
  for (i = 0; i < factors.length; i++) {
    if (max % factors[i] === 0) return factors[i];
  }
}
*/

// another solution
// Euclid's algorithm
/*
function mod(a, b) {
  return a - (b * Math.floor(a / b));
}

function gcd(a, b) {
  var min = Math.min(a, b);
  var max = Math.max(a, b);

  if (min === 0) return max;

  return gcd(min, mod(max, min));
}
*/

// another solution
/*
function gcd(num1, num2) {
  var temp;
  while (num2 != 0) {
    temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  
  return num1;
}
*/

// another solution
// allowing function to work for more than 2 numbers
function gcd(numbers) {
  function gcdOfTwoNumbers(num1, num2) {
    var temp;
    
    while (num2 != 0) {
      temp = num2;
      num2 = num1 % num2;
      num1 = temp;
    }
    
    return num1;
  }
  
  var gcdCalls = numbers.length - 1;
  var num1 = numbers.shift();
  var result;

  for (var i = 0; i < gcdCalls; i++) {
    result = gcdOfTwoNumbers(num1, numbers.shift());
    num1 = result;
  }
  
  return result;
}

console.log(gcd([4, 12]) === 4);
console.log(gcd([15, 10]) === 5);
console.log(gcd([9, 2]) === 1);
console.log(gcd([12, 4, 8]) === 4);
console.log(gcd([8, 4, 12]) === 4);
