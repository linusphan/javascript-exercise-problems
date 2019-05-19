function expand(number) {
  var result = [];
  var current = 1;

  while (current <= number) {
    result.push(current);
    current += 1;
  }

  return result;
}

function total(numbers) {
  return numbers.reduce((acc, num) => acc + num);
}

function square(numbers) {
  return numbers.map(x => x ** 2);
}

function sumSquareDifference(number) {
  var numbers = expand(number);
  var sum = total(numbers);
  var numbersSquared = square(numbers);

  return (sum ** 2) - total(numbersSquared);
}

// another solution
function sumSquareDifference(n) {
  var sum = 0;
  var sumOfSquares = 0;
  var i;

  for (i = 1; i <= n; i += 1) {
    sum += i;
    sumOfSquares += Math.pow(i, 2);
  }

  return Math.pow(sum, 2) - sumOfSquares;
}

console.log(sumSquareDifference(3) === 22);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10) === 2640);     // 2640
console.log(sumSquareDifference(1) === 0);      // 0
console.log(sumSquareDifference(100) === 25164150);    // 25164150
