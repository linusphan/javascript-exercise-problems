function startsWith(string, searchString) {
  var length = searchString.length;
  var startString = '';

  for (var i = 0; i < length; i++) {
    startString += string[i];
  }

  return startString === searchString;
}

// another solution
function startsWith(string, searchString) {
  var i;
  for (i = 0; i < searchString.length; i += 1) {
    if (string[i] !== searchString[i]) {
      return false;
    }
  }

  return true;
}

var str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We') === true);
console.log(startsWith(str, 'We put') === true);
console.log(startsWith(str, '') === true);
console.log(startsWith(str, 'put') === false);

var longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString) === false);