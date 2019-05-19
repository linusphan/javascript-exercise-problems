function isMultiple(number, factor) {
  return number % factor === 0;
}

function fizzbuzz() {
  for (var i = 1, isMultipleOfThree, isMultipleOfFive; i <= 100; i++) {
    isMultipleOfThree = isMultiple(i, 3);
    isMultipleOfFive = isMultiple(i, 5);
    if (isMultipleOfThree && isMultipleOfFive) {
      console.log('FizzBuzz');
    } else if (isMultipleOfThree) {
      console.log('Fizz');
    } else if (isMultipleOfFive) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

// another solution
function fizzbuzz() {
  var message;
  var i;

  for (i = 1; i <= 100; i += 1) {
    message = i;

    if (i % 3 === 0 && i % 5 === 0) {
      message = 'FizzBuzz';
    } else if (i % 3 === 0) {
      message = 'Fizz';
    } else if (i % 5 === 0) {
      message = 'Buzz';
    }

    console.log(message);
  }
}

// another solution
function fizzbuzz() {
  for (var i = 1, message; i <= 100; i += 1) {
    message = ''

    if (i % 3 === 0) {
      message += 'Fizz'
    }

    if (i % 5 === 0) {
      message += 'Buzz'
    }

    console.log(message || i);
  }
}

fizzbuzz();