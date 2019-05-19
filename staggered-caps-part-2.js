function staggeredCase(string) {
  var upperFlag = true;
  return string.split('').map(function (char) {
    if (/[^a-z]/i.test(char)) return char;

    if (upperFlag) {
      upperFlag = false;
      return char.toUpperCase();
    } else {
      upperFlag = true;
      return char.toLowerCase();
    }
  }).join('');
}

// another solution
function staggeredCase(string) {
  var needUpper = true;
  var newChar;

  return string.split('').map(function (char) {
    if (char.match(/[a-z]/i)) {
      if (needUpper) {
        newChar = char.toUpperCase();
      } else {
        newChar = char.toLowerCase();
      }

      needUpper = !needUpper;
      return newChar;
    } else {
      return char;
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!') === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase('ALL CAPS') === "AlL cApS");
console.log(staggeredCase('ignore 77 the 444 numbers') === "IgNoRe 77 ThE 444 nUmBeRs");
