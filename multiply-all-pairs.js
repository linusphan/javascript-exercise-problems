/*
input
  - 2 array arguments
    - each a list of numbers

output
  - returns new array
    - products of all combinations of number pairs

rules
  - sort return array in ascending numerical order
  - assume neither are empty

data structure
  - array

algorithm
  - init products to empty array
  - iterate over numsArray1
    - iterate over each number in numsArray2
      - append to products array each product
  - return products
*/

function ascendingNumerical(num1, num2) {
  if (num1 > num2) {
    return 1;
  } if (num1 < num2) {
    return -1;
  } else {
    return 0;
  }
}

function multiplyAllPairs(numsArray1, numsArray2) {
  var products = [];

  numsArray1.forEach(function (num1) {
    numsArray2.forEach(function (num2) {
      products.push(num1 * num2);
    });
  });

  return products.sort(ascendingNumerical);
}

// another solution
function multiplyAllPairs(array1, array2) {
  var result = [];

  array1.forEach(function (number1) {
    array2.forEach(function (number2) {
      result.push(number1 * number2);
    });
  });

  return result.sort(function (a, b) {
    return a - b;
  });
}

// multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
