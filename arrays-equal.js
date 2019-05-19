function arraysEqual(firstArray, secondArray) {
  if (firstArray.length === secondArray.length) {
    for (var i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) return false;
    }

    return true;
  } else {
    return false;
  }
}

// another solution
function arraysEqual(left, right) {
  var i;

  if (left.length !== right.length) {
    return false;
  }

  for (i = 0; i < left.length; i += 1) {
    if (left[i] !== right[i]) {
      return false;
    }
  }

  return true;
}

console.log(arraysEqual([1], [1]) === true);
console.log(arraysEqual([1], [2]) === false);
console.log(arraysEqual([1, 2], [1, 2, 3]) === false);
console.log(arraysEqual([1, 'hi', true], [1, 'hi', true]) === true);
console.log(arraysEqual([1, 'hi', true], [1, 'hi', false]) === false);
console.log(arraysEqual([1, 'hi', true], [1, 'hello', true]) === false);
console.log(arraysEqual([1, 'hi', true], [2, 'hi', true]) === false);