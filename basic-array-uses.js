// prob 1
function firstElementOf(arr) {
  return arr[0];
}

// console.log(firstElementOf(['U', 'S', 'A']) === 'U');

// prob 2
function lastElementOf(arr) {
  return arr[arr.length - 1];
}

// console.log(lastElementOf(['U', 'S', 'A']) === 'A');

// prob 3
function nthElementOf(arr, index) {
  return arr[index];
}

var digits = [4, 8, 15, 16, 23, 42];

// console.log(nthElementOf(digits, 3) === 16);
// console.log(nthElementOf(digits, 8) === undefined);
// console.log(nthElementOf(digits, -1) === undefined);

// prob 5
function firstNOf(arr, count) {
  var newArr = [];

  for (var i = 0; i < count; i++) {
    newArr.push(arr[i]);
  }

  return newArr;
}

// another solution
function firstNOf(arr, count) {
  return arr.slice(0, count);
}

// var digits = [4, 8, 15, 16, 23, 42];
// firstNOf(digits, 3);    // returns [4, 8, 15]

// prob 6
function lastNOf(arr, count) {
  return arr.slice(-count);
}

// var digits = [4, 8, 15, 16, 23, 42];
// console.log(lastNOf(digits, 3));    // returns [16, 23, 42]

// prob 7
function lastNOf(arr, count) {
  if (count > arr.length) count = 0;

  return arr.slice(-count);
}

// another solution
function lastNOf(arr, length) {
  var index = arr.length - length;

  if (index < 0) {
    index = 0;
  }

  return arr.slice(index);
}

// var digits = [4, 8, 15, 16, 23, 42];
// console.log(lastNOf(digits, 10));    // returns [4, 8, 15, 16, 23, 42]

// prob 8
function endsOf(beginningArr, endingArr) {
  return [firstElementOf(beginningArr), lastElementOf(endingArr)];
}

// console.log(endsOf([4, 8, 15], [16, 23, 42]));  // returns [4, 42]
