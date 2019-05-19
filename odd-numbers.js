/*
// solution 1
for (var i = 1; i <= 99; i++) {
  if (i % 2 === 1) console.log(i);
}

// another solution
var i;
for (i = 1; i < 100; i += 2) {
  console.log(i);
}
*/

// another solution / further exploration
function isOdd(number) {
  return number % 2 === 1;
}

function logOddNumbers(limit) {
  for (var i = 1; i <= limit; i++) {
    if (isOdd(i)) console.log(i);
  }
}

logOddNumbers(200);
