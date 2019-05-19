function bubbleSort(array) {
  var length = array.length;
  var swapped;
  var i;
  var temp;

  do {
    swapped = false;

    for (i = 1; i < length; i += 1) {
      if (array[i - 1] > array[i]) {
        temp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = temp;

        swapped = true;
      }
    }
  } while (swapped)

  return array;
}

// another solution
function bubbleSort(array) {
  var swapped;
  var i;

  while (true) {
    swapped = false;
    for (i = 1; i < array.length; i += 1) {
      if (array[i - 1] <= array[i]) {
        continue;
      }

      swap(array, i - 1, i);
      swapped = true;
    }

    if (!swapped) {
      break;
    }
  }
}

function swap(array, idx1, idx2) {
  var temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

var array = [5, 3];
bubbleSort(array);
console.log(array);    // [3, 5]

var array = [6, 2, 7, 1, 4];
bubbleSort(array);
console.log(array);    // [1, 2, 4, 6, 7]

var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
