function sum(integer) {
  return String(integer)
           .split('')
           .map(digitString => Number(digitString))
           .reduce((sum, digit) => sum + digit);
}

// or...
function sum(integer) {
  return String(integer).split('')
                        .map(digitString => Number(digitString))
                        .reduce((sum, digit) => sum + digit);
}

// another solution
function sum(number) {
  return String(number).split('').map(function (numString) {
    return parseInt(numString, 10);
  }).reduce(function (total, num) {
    return total + num;
  });
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
