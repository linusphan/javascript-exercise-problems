// problem 1
function radiansToDegrees(radians) {
  return radians / (Math.PI / 180);
}

// another solution
function radiansToDegrees(radians) {
  return (radians * 180) / Math.PI;
}

// problem 2
// var number = -180;
// console.log(Math.abs(number));

// or...
// var degrees = -180;
// console.log(Math.abs(degrees));

// problem 3
// console.log(Math.sqrt(16777216));

// problem 4
// console.log(Math.pow(16, 6));

// problem 5
// var a = 50.72;
// var b = 49.2;
// var c = 49.86;

// console.log(Math.trunc(a));
// console.log(Math.floor(a));
// console.log(Math.ceil(b));
// console.log(Math.round(c));

// problem 6
function randomIntegerBetween(min, max) {
  min = Math.min(min, max);
  max = Math.max(min, max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// console.log(randomIntegerBetween(0, 5));
// console.log(randomIntegerBetween(0, 5));
// console.log(randomIntegerBetween(0, 5));
// console.log(randomIntegerBetween(0, 5));
// console.log(randomIntegerBetween(0, 5));

// another solution
function randomInt(min, max) {
  var difference;
  var swap;

  if (min === max) {
    return min;
  } else if (min > max) {
    swap = min;
    min = max;
    max = swap;
  }

  difference = max - min + 1;
  return Math.floor(Math.random() * difference) + min;
}

// console.log(randomInt(0, 5));
// console.log(randomInt(0, 5));
// console.log(randomInt(0, 5));
// console.log(randomInt(0, 5));
// console.log(randomInt(0, 5));
