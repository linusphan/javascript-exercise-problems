function wordToDigit(text) {
  var numberWords = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine'
  ];

  numberWords.forEach(function (numberWord, idx) {
    var regex = new RegExp(numberWord, 'gi');
    text = text.replace(regex, idx);
  });

  return text;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
