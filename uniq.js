/*
Write a function uniq which takes an Array and returns it free of duplicates.
Treat numbers and number strings as duplicates.

input
  array

output
  unique array

rules
  - numbers and number strings are equal: 1 === '1'
  - duplicates? [1, 2, 3] === [1, 2, 3] ? Don't worry about this
  - or this... { a: 1 } === { a: 1 }
  - order is preserved
  - edge cases
    - [] -> []

examples
uniq([]); // => []
uniq([1, 1, 1]); // => [1]
uniq([1, 2]); // => [1, 2]
uniq([1, 1, 2]); // => [1, 2]
uniq([2, 1, 1]); // => [2, 1]
uniq([1, 2, 1]); // => [1, 2]
uniq(['1', 1]); // => ['1']
uniq([1, '1']); // => [1]
uniq([[1, 2, 3], [1, 2, 3]]); // => [[1, 2, 3], [1, 2, 3]]
uniq([{a: 1}, {a: 1}]); // => [{a: 1}, {a: 1}]
uniq([[1, 2, 3], {a: 1}]); // => [[1, 2, 3], {a: 1}]
uniq(['a', 'a']); // => ['a']
uniq([true, true]); // => [true]
uniq([undefined, undefined]); // => [undefined]
uniq([NaN, NaN]); // => [NaN]
uniq([function(){}, function(){}]); // => [function(){}, function () {}] -> don't worry


data structure
  - all data types as elements
  - arrays

mental model
  - iteration of elements, appending to result array if not present

algorithm
  - inititialize result: []
  - iterate through input array
    - forEach
    - append to result if element not present
      - if hasElement(element, array)
          continue
        else
          result.push(element)
  - return result array

  hasElement(element, array)
    - if typeof element === 'string' && array.includes(Number(element))
        return true
      else if typeof element === 'number' && array.includes(String(element))
        return true
      else if array.includes(element)
        return true
      else
        return false

testing
uniq([1, 2, 1]); // => [1, 2]
[]
1
[1]
2
[1,2]
*/

function hasElement(element, array) {
  if (typeof element === 'string' && array.includes(Number(element))) {
    return true;
  } else if (typeof element === 'number' && array.includes(String(element))) {
    return true;
  } else if (array.includes(element)) {
    return true;
  } else {
    return false;
  }
}

function uniq(array) {
  var result = [];
  array.forEach(function (element) {
    if (!hasElement(element, result)) {
      result.push(element);
    }
  });

  return result;
}

console.log(uniq([])); // => []
console.log(uniq([1, 1, 1])); // => [1]
console.log(uniq([1, 2])); // => [1, 2]
console.log(uniq([1, 1, 2])); // => [1, 2]
console.log(uniq([2, 1, 1])); // => [2, 1]
console.log(uniq([1, 2, 1])); // => [1, 2]
console.log(uniq(['1', 1])); // => ['1']
console.log(uniq([1, '1'])); // => [1]
console.log(uniq([[1, 2, 3], [1, 2, 3]])); // => [[1, 2, 3], [1, 2, 3]]
console.log(uniq([{a: 1}, {a: 1}])); // => [{a: 1}, {a: 1}]
console.log(uniq([[1, 2, 3], {a: 1}])); // => [[1, 2, 3], {a: 1}]
console.log(uniq(['a', 'a'])); // => ['a']
console.log(uniq([true, true])); // => [true]
console.log(uniq([undefined, undefined])); // => [undefined]
console.log(uniq([NaN, NaN])); // => [NaN]
console.log(uniq([function(){}, function(){}])); // => [function(){}, function () {}] -> don't worry
