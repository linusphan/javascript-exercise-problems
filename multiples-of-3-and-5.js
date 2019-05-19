function isMultiple(number, factor) {
  return number % factor === 0;
}

function multisum(number) {
  var numbers = [];
  for (var i = 1; i <= number; i++) {
    if (isMultiple(i, 3) || isMultiple(i, 5)) numbers.push(i);
  }

  return numbers.reduce(function(sum, el) {
    return sum + el;
  }, 0);
}

// another solution
function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function multisum(maxValue) {
  var sum = 0;
  var i;

  for (i = 1; i <= maxValue; i += 1) {
    if (isMultiple(i, 3) || isMultiple(i, 5)) {
      sum += i;
    }
  }

  return sum;
}

console.log(multisum(3) === 3);
console.log(multisum(5) === 8);
console.log(multisum(10) === 33);
console.log(multisum(1000) === 234168);
