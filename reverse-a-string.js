function reverse(string) {
  return string.split('').reverse().join('');
}

// another solution
function reverse(string) {
  var newString = '';
  var i;

  for (i = string.length - 1; i >= 0; i -= 1) {
    newString += string[i];
  }

  return newString;
}

console.log(reverse('hello'));                  // returns "olleh"
console.log(reverse('The quick brown fox'));    // returns "xof nworb kciuq ehT"