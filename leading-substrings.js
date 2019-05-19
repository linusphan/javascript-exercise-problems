function substringsAtStart(string) {
  return string.split('').map(function (_, idx) {
    return string.substring(0, idx + 1);
  });
}

// another solution
function substringsAtStart(string) {
  return string.split('').map(function (char, idx, stringArray) {
    return stringArray.slice(0, idx + 1).join('');
  });
}

substringsAtStart('abc');      // ["a", "ab", "abc"]
substringsAtStart('a');        // ["a"]
substringsAtStart('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
