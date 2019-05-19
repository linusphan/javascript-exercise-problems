function removeVowels(strings) {
  return strings.map(function (string) {
    return string.replace(/[aeiou]/gi, '');
  });
}

// another solution
function removeVowels(stringArray) {
  var VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  return stringArray.map(function (string) {
    return string.split('').map(function (char) {
      if (VOWELS.indexOf(char) >= 0) {
        return '';
      } else {
        return char;
      }
    }).join('');
  });
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]