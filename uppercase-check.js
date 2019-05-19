function isUppercase(string) {
  return string.split('').every(function (char) {
    return char.toUpperCase() === char;
  });
}

// another solution
function isUppercase(string) {
  return !/[a-z]/.test(string);
}

console.log(isUppercase('t') === false);
console.log(isUppercase('T') === true);
console.log(isUppercase('Four Score') === false);
console.log(isUppercase('FOUR SCORE') === true);
console.log(isUppercase('4SCORE!') === true);
console.log(isUppercase('') === true);
