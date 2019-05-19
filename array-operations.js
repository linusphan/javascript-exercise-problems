// ########## push, pop, shift, and unshift ##########

// prob 1
function push(arr, val) {
  arr[arr.length] = val;

  return arr.length;
}

// var count = [0, 1, 2];
// console.log(push(count, 3));         // 4
// console.log(count);                  // [ 0, 1, 2, 3 ]

// prob 2
function pop(arr) {
  var lastIndex = arr.length - 1;
  var lastElement = arr[lastIndex];

  arr.length = lastIndex;
  return lastElement;
}

// var count = [1, 2, 3];
// console.log(pop(count));             // 3
// console.log(count);                  // [ 1, 2 ]

// prob 3
function unshift(arr, val) {
  var temp1 = val;
  var temp2;
  var initialLength = arr.length;

  for (var i = 0; i <= initialLength; i++) {
    temp2 = arr[i];
    arr[i] = temp1;
    temp1 = temp2;
  }

  return arr.length;
}

// another solution
function unshift(array, value) {
  var i;
  for (i = array.length; i > 0; i -= 1) {
    array[i] = array[i - 1]
  }

  array[0] = value;
  return array.length;
}

// var count = [1, 2, 3];
// console.log(unshift(count, 0) === 4);
// console.log(count); // [0, 1, 2, 3]

// prob 4
function shift(arr) {
  var firstVal = arr[0];

  for (var i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;
  return firstVal;
}

// another solution
function shift(array) {
  var first = array[0];
  var i;

  if (array.length === 0) {
    return undefined;
  }

  for (i = 0; i < array.length - 1; i += 1) {
    array[i] = array[i + 1];
  }

  array.length = array.length - 1;
  return first;
}

// var count = [1, 2, 3];
// console.log(shift(count) === 1);
// console.log(count); // [2, 3]



// ########## indexOf and lastIndexOf ##########

// prob 1
function indexOf(arr, val) {
  var index = -1;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      index = i;
      break;
    }
  }

  return index;
}

// another solution
function indexOf(array, value) {
  var i;
  for (i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
}

// console.log(indexOf([1, 2, 3, 3], 3) ===  2);
// console.log(indexOf([1, 2, 3], 4) ===  -1);

// prob 2
function lastIndexOf(arr, val) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === val) {
      return i;
    }
  }

  return -1;
}

// console.log(lastIndexOf([1, 2, 3, 3], 3) ===  3
// console.log(lastIndexOf([1, 2, 3], 4) ===  -1



// ########## slice, splice, concat, and join ##########

// prob 1
function slice(array, start, end) {
  var newArray = [];

  for (var i = start; i < end; i++) {
    push(newArray, array[i]);
  }

  return newArray;
}

// another solution
function slice(array, begin, end) {
  var newArray = [];
  var i;
  for (i = begin; i < end; i += 1) {
    push(newArray, array[i]);
  }

  return newArray;
}

// console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
// console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]

// prob 2
function splice(array, start, length) {
  var end = start + length;
  var newArray = slice(array, start, end);

  for (var i = end; i < array.length; i++) {
    array[start] = array[i];
    start++;
  }

  array.length = start;

  return newArray;
}

// another solution
function splice(array, begin, number) {
  var removedValues = [];
  var i;
  for (i = begin; i < array.length; i += 1) {
    if (i < begin + number) {
      push(removedValues, array[i]);
    }

    array[i] = array[i + number];
  }

  array.length = array.length - removedValues.length;
  return removedValues;
}

// var count = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
// console.log(count);                                 // [ 1, 2, 8 ]

// prob 3
function concat(arr1, arr2) {
  var newArray = [];
  var i;

  for (i = 0; i < arr1.length; i++) {
    push(newArray, arr1[i]);
  }

  for (i = 0; i < arr2.length; i++) {
    push(newArray, arr2[i]);
  }

  return newArray;
}

// another solution
function concat(firstArray, secondArray) {
  var newArray = [];
  var i;

  for (i = 0; i < firstArray.length; i += 1) {
    push(newArray, firstArray[i]);
  }

  for (i = 0; i < secondArray.length; i += 1) {
    push(newArray, secondArray[i]);
  }

  return newArray;
}

// console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]

// prob 4
function join(array, separator) {
  var string = '';

  for (var i = 0; i < array.length; i++) {
    string += String(array[i]);
    if (i !== array.length - 1) string += separator; 
  }

  return string;
}

// another solution
function join(array, separator) {
  var result = '';
  var i;

  for (i = 0; i < array.length; i += 1) {
    result += String(array[i]);

    if (i < array.length - 1) {
      result += separator;
    }
  }

  return result;
}

// console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
// console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'
