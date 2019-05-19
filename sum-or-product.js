function computeSum(numbers) {
  var result = numbers.reduce(function(sum, number) {
    return sum + number;
  }, 0);

  return result;
}

function computeProduct(numbers) {
  var result = numbers.reduce(function(product, number) {
    return product *= number
  }, 1);

  return result;
}

var lastNum;
var operation;
var numbers;
var result;
var i;

while (true) {
  lastNum = Number(prompt('Please enter an integer greater than 0:'));

  if (isNaN(lastNum)) {
    alert('Not a number. Please try again.');
  } else if (lastNum <= 0) {
    alert('Needs to be a positive integer.');
  } else if (lastNum === Infinity) {
    alert('Not a valid input.');
  } else {
    break;
  }
}

while (true) {
  operation = prompt('Enter "s" to compute the sum, or "p" to compute the product.')
    .toLowerCase();

  if (operation === 's') {
    operation = 'sum';
    break;
  } else if (operation === 'p') {
    operation = 'product';
    break;
  } else {
    alert('Unknown operation. Please try again.');
  }
}

numbers = [];
if (operation === 'sum') {
  for (i = 0; i <= lastNum; i++) {
    numbers.push(i);
  }

  result = computeSum(numbers);
} else if (operation === 'product') {
  for (i = 1; i <= lastNum; i++) {
    numbers.push(i);
  }

  result = computeProduct(numbers);
}

console.log(`The ${operation} of the integers between 1 and ${lastNum} is ${result}.`);

/*
// another solution
function computeSum(number) {
  var total = 0;
  var i;

  for (i = 1; i <= number; i += 1) {
    total += i;
  }

  return total;
}

function computeProduct(number) {
  var total = 1;
  var i;

  for (i = 1; i <= number; i += 1) {
    total *= i;
  }

  return total;
}

var number = parseInt(prompt('Please enter an integer greater than 0'), 10);
var operation = prompt('Enter "s" to compute the sum, or "p" to compute the product.');
var sum;
var product;

if (operation === 's') {
  sum = String(computeSum(number));
  console.log('The sum of the integers between 1 and ' + String(number) + ' is ' + sum + '.');
} else if (operation === 'p') {
  product = String(computeProduct(number));
  console.log('The product of the integers between 1 and ' + String(number) + ' is ' + product + '.');
} else {
  console.log('Oops. Unknown operation.');
}
*/
