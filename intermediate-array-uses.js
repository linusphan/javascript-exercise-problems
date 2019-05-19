// prob 1
function oddElementsOf(arr) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (i % 2 === 1) newArr.push(arr[i]);
  }

  return newArr;
}

// another solution
function oddElementsOf(arr) {
  var oddElements = [];
  var len = arr.length;
  var i;

  for (i = 1; i < len; i += 2) {
    oddElements.push(arr[i]);
  }

  return oddElements;
}

// var digits = [4, 8, 15, 16, 23, 42];
// console.log(oddElementsOf(digits));    // returns [8, 16, 42]

// prob 2
function combinedArray(even, odd) {
  var newArray = [];

  for (var i = 0; i < even.length; i++) {
    newArray.push(even[i]);
    newArray.push(odd[i]);
  }

  return newArray;
}

var digits = [4, 8, 15, 16, 23, 42];
var letters = ['A', 'L', 'V', 'A', 'R', 'H'];

// console.log(combinedArray(digits, letters)); // [4, "A", 8, "L", 15, "V", 16, "A", 23, "R", 42, "H"]);

// prob 3
function mirroredArray(arr) {
  var newArr = arr.slice();

  for (var i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  return newArr;
}

// another solution
function mirroredArray(arr) {
  return arr.concat(arr.slice().reverse());
}

// var digits = [4, 8, 15, 16, 23, 42];
// console.log(mirroredArray(digits));  // returns [4, 8, 15, 16, 23, 42, 42, 23, 16, 15, 8, 4]

// prob 4
function sortDescending(arr) {
  return arr.slice().sort(function(a, b) {
    return b - a;
  });
}

// another solution
function sortDescending(arr) {
  var arrCopy = arr.slice();
  return arrCopy.sort(function (a, b) { return b - a; });
}

// var array = [23, 4, 16, 42, 8, 15];
// var result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
// console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
// console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]

// prob 5
function matrixSums(arr) {
  var sums = [];
  var sum;
  var reducer = (accumulator, currentValue) => accumulator + currentValue;

  for (var i = 0; i < arr.length; i++) {
    sum = arr[i].reduce(reducer);

    sums.push(sum);
  }

  return sums;
}

// another solution
function matrixSums(arr) {
  var sums = [];
  var currentSum;
  var outerLen;
  var innerLen;
  var i;
  var j;

  for (i = 0, outerLen = arr.length; i < outerLen; i += 1) {
    currentSum = 0;
    for (j = 0, innerLen = arr[i].length; j < innerLen; j += 1) {
      currentSum += arr[i][j];
    }

    sums.push(currentSum);
  }

  return sums;
}

// console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]

// prob 6
function uniqueElements(arr) {
  var newArray = [];
  var unique;

  for (var i = 0; i < arr.length; i++) {
    unique = true;

    for (var j = 0; j < newArray.length; j++) {
      if (arr[i] === newArray[j]) {
        unique = false;
        break;
      }
    }

    if (unique) newArray.push(arr[i]);
  }

  return newArray;
}

// another solution
function uniqueElements(arr) {
  var uniques = [];
  var len = arr.length;
  var i;

  for (i = 0; i < len; i += 1) {
    if (uniques.indexOf(arr[i]) === -1) {
      uniques.push(arr[i]);
    }
  }

  return uniques;
}

// console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]
