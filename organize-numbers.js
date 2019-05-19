/*
input
  - array of numbers

output
  - array of arrays
    - each subarray contains all duplicates of a particular number

rules
  - empty array input, return empty array: [] -> []
  - [3, 1, 2, 3] -> [[3, 3], [1], [2]]
    - shows first elements collected first
      [3, 1, 2, 3] -> [[3, 3], [1], [2]] NOT [[1], [2], [3, 3]]
  - thinking about edge cases:
    - [3] -> [[3]] (boundary)
  - assume valid inputs: an array of numbers

examples

organizeNumbers([3, 1, 2, 3]); // => [[3, 3], [1], [2]]
organizeNumbers([]); // => []
organizeNumbers([3]); // => [[3]]
organizeNumbers([1, 2, 3]); // => [[1], [2], [3]]
organizeNumbers([1, 1, 1]); // => [[1, 1, 1]]
organizeNumbers([1, 1, 1, 2, 2, 2]); // => [[1, 1, 1], [2, 2, 2]]
organizeNumbers([1, 1, 1, 2, 2, 2, 1]); // => [[1, 1, 1, 1], [2, 2, 2]]

data structure
  - arrays of numbers only

algorithm
  - place all duplicates into sub-arrays of a new array
    - initialize a new aray: []
    - iteration: forEach (not returning early)
      - if number is not already inside result
        - have a used numbers array to check against
          select for all duplicated numbers
          filter (returns an array)
          append filter return value to new array
        else
          continue
  - return new array

test: [3, 1, 2, 3]
new array: []
used numbers array: []

[3, 3]
[[3, 3]]
...

test: []
new array: []
used numbers []
forEach won't run
just returns []
*/

function organizeNumbers(numbers) {
  var result = [];
  var usedNumbers = [];

  numbers.forEach(function (number) {
    var duplicates;

    if (!usedNumbers.includes(number)) {
      duplicates = numbers.filter(function (currentNumber) {
        return currentNumber === number;
      });

      usedNumbers.push(number);
      result.push(duplicates);
    }
  });

  return result;
}

console.log(organizeNumbers([3, 1, 2, 3])); // => [[3, 3], [1], [2]]
console.log(organizeNumbers([])); // => []
console.log(organizeNumbers([3])); // => [[3]]
console.log(organizeNumbers([1, 2, 3])); // => [[1], [2], [3]]
console.log(organizeNumbers([1, 1, 1])); // => [[1, 1, 1]]
console.log(organizeNumbers([1, 1, 1, 2, 2, 2])); // => [[1, 1, 1], [2, 2, 2]]
console.log(organizeNumbers([1, 1, 1, 2, 2, 2, 1])); // [[1, 1, 1, 1], [2, 2, 2]]
