/*
input
  - first argument: string
  - second argument: shift value, aka 'key'

output
  - encrypted string

rules
  - each letter subtituted by letter that's shifted some num of positions away
  - only encrype letters
  - if key value exceed length of alphabet, wraps from the beginning
  - key of 0 => same string
  - case is maintained

mental model
  - process strings, replacings letters with shifted letters, leaving non-letters alone

data structures
  - strings
  - numbers

algorithm
  - using regex, replace letters with shifted values, looping back if needed, and return this
    - while code range after addition of shift value is > upper bound
      - code  - 26 (letters in alphabet)
    - convert code back to letter

other notes:
  - 'A' - 'Z' char code range: 65 - 90
  - 'a' - 'z' char code range: 97 - 122


abcdefghijklmnopqrstuvwxyz
*/

function shift(match, offset, string, key) {
  var charCode = match.charCodeAt();
  charCode += key;
  var upperLimit;

  if (/[a-z]/.test(match)) upperLimit = 122;
  if (/[A-Z]/.test(match)) upperLimit = 90;

  while (charCode > upperLimit) {
    charCode -= 26;
  }

  return String.fromCharCode(charCode);
}

function caesarEncrypt(string, key) {
  function shift(match) {
    var charCode = match.charCodeAt();
    charCode += key;
    var upperLimit;

    if (/[a-z]/.test(match)) upperLimit = 122;
    if (/[A-Z]/.test(match)) upperLimit = 90;

    while (charCode > upperLimit) {
      charCode -= 26;
    }

    return String.fromCharCode(charCode);
  }

  return string.replace(/[A-Za-z]/g, shift);
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25) === "ZABCDEFGHIJKLMNOPQRSTUVWXY");
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5) === "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!");

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2) === "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?");