function isUpperCase(string) {
  return !!string.match(/[A-Z]/);
}

function isLowerCase(string) {
  return !!string.match(/[a-z]/);
}

function rot13(string) {
  var ROTATION = 13;
  var UPPER_M = 'M'.charCodeAt();
  var LOWER_M = 'm'.charCodeAt();

  var newString = '';
  var character;
  var asciiNumeric;

  for (var i = 0; i < string.length; i++) {
    character = string[i];
    asciiNumeric = character.charCodeAt();

    if (isUpperCase(character)) {
      asciiNumeric <= UPPER_M ? asciiNumeric += ROTATION : asciiNumeric -= ROTATION;
    } else if (isLowerCase(character))  {
      asciiNumeric <= LOWER_M ? asciiNumeric += ROTATION : asciiNumeric -= ROTATION;
    }

    character = String.fromCharCode(asciiNumeric);
    newString += character;
  }

  return newString;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.') === 'Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.');        // true
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')) === 'Teachers open the door, but you must enter by yourself.'); // true
