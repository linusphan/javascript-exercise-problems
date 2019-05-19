function cleanUp(string) {
  var regex = /[^a-z]+/gi;
  return string.replace(regex, ' ');
}

// another solution
function cleanUp(text) {
  var cleanText = '';
  var i;

  for (i = 0; i < text.length; i += 1) {
    if (isLowerCaseLetter(text[i]) || isUpperCaseLetter(text[i])) {
      cleanText += text[i];
    } else if (cleanText[cleanText.length - 1] !== ' ') {
      cleanText += ' ';
    }
  }

  return cleanText;
}

function isLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCaseLetter(char) {
  return char >= 'A' && char <= 'Z';
}

console.log(cleanUp("---what's my +*& line?") === " what s my line ");