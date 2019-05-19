function logInBox(text) {
  var textLen = text.length;
  var horizontalLine = '+' + '-'.repeat(textLen + 2) + '+';
  var horizontalSpace = '|' + ' '.repeat(textLen + 2) + '|';
  var textLine = '| ' + text + ' |';

  console.log(horizontalLine);
  console.log(horizontalSpace);
  console.log(textLine);
  console.log(horizontalSpace);
  console.log(horizontalLine);
}

// another solution
function logInBox(message) {
  var horizontalRule = '+' + repeatChar('-', message.length + 2) + '+';
  var emptyLine = '|' + repeatChar(' ', message.length + 2) + '|';

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log('| ' + message + ' |');
  console.log(emptyLine);
  console.log(horizontalRule);
}

function repeatChar(char, times) {
  var repeated = '';
  while (repeated.length < times) {
    repeated += char;
  }

  return repeated;
}



logInBox('To boldly go where no one has gone before.');
logInBox('');