function missing(sortedArray) {
  var first = sortedArray[0];
  var last = sortedArray[sortedArray.length - 1];
  var missingNumbers = [];

  for (var i = first + 1; i < last; i += 1) {
    if (sortedArray.indexOf(i) === -1) missingNumbers.push(i);
  }

  return missingNumbers;
}

// another solution
function missing(array) {
  var result = [];
  var start = array[0] + 1;
  var end = array[array.length - 1];
  var integer;

  for (integer = start; integer < end; integer += 1) {
    if (array.indexOf(integer) < 0) {
      result.push(integer);
    }
  }

  return result;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []
