/*
input
  - array of numbers

output
  - returns sum of the sums of each leading sequence for 
    that array

rules
  - single element returns that number

data structure / type
  - arrays

algorithm
  - transform each element to arrays of leading sequence
  - transform each element again to totals
  - reduce entire array into one number
*/

function total(sum, value) {
  return sum + value;
}

function sumOfSums(arr) {
  var leadingSequences = arr.map(function (val, idx) {
    return arr.slice(0, idx + 1);
  });

  var leadingSequencesSums = leadingSequences.map(function (sequences) {
    return sequences.reduce(total);
  });

  return leadingSequencesSums.reduce(total);
}

// another solution
function sumOfSums(numbers) {
  return numbers.map(function (number, idx) {
    return numbers.slice(0, idx + 1).reduce(function (sum, value) {
      return sum + value;
    });
  }).reduce(function (sum, value) {
    return sum + value;
  });
}

// sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// sumOfSums([4]);              // 4
// sumOfSums([1, 2, 3, 4, 5]);  // 35
