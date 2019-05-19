/*
// Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

// If the input is not an array, return undefined.
// If the input is an empty array, return an empty array.

// Review the test cases below, then implement the solution accordingly.

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
var array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]


- 
- 

rules
  - function rotates an array
    - first element is moved to the end of the array
      - an array starting with elements from indices 1 and beyond appended by element at index 0: array.slice(1) + array[0]: arr.slice(1).concat(arr[0])
  - non-destructive method
    - return a new array, the argument is not modified
  - if argument is not an array => return undefined
    - inputs of the wrong type
    - no arguments also returns undefined
  - if argument is [] => return []
  - edge cases
    - ['a'] => ['a']

mental model
  - rotate an array by slicing original array from index 1 and beyond, concatenating first element to the end of this new array.

data structure
  - array

algorithm
  - guard against empty arrays, elements of the wrong data type
    - if !Array.isArray(arr)
        return undefined
      else if array is empty
        return []
  
  - array.slice(1).concat(array[0]): rotated array

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
[3, 5, 2, 9, 1, 7]

rotateArray();                         // undefined

rotateArray(['a']);                    // ["a"]
[].concat('a') => ['a']
*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (arr.length === 0) {
    return [];
  }
  
  return arr.slice(1).concat(arr[0]);
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


var array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]
