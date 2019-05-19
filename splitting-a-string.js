/* 
input
  - string to be split
  - delimiter
output
  - logs split strings

algorithm
  - build new strings until reach delimiter
  - log the string and reset it to empty string after log
*/

function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }
  
  var i;
  
  if (delimiter === '') {
    for (i = 0; i < string.length; i++) {
      console.log(string[i]);
    }
    
    return;
  }

  var newString = '';
  
  for (i = 0; i < string.length; i++) {
    if (string[i] !== delimiter) {
      newString += string[i];
      if (i === string.length - 1) {
        console.log(newString);
      }
    } else {
      console.log(newString);
      newString = '';
    }
  }
}

// another solution
function splitString(string, delimiter) {
  var tempString;
  var i;
  
  if (delimiter === undefined) {
    console.log('Error: No delimiter');
    return;
  }
  
  tempString = '';
  for (i = 0; i < string.length; i += 1) {
    if (string[i] === delimiter) {
      console.log(tempString);
      tempString = '';
    } else if (delimiter === '') {
      console.log(string[i]);
    } else {
      tempString += string[i];
    }
  }
  
  if (tempString) {
    console.log(tempString);
  }
}

splitString('abc,123,hello world', ',');
splitString('hello');
splitString('hello', '');
splitString('hello', ';');
splitString(';hello;', ';');
