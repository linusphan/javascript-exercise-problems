// basic string problems
var text = 'The quick brown fox jumps over the lazy dog.';

function capitalize(text) {
  var newTextArray;

  var textArray = text.split(' ');

  newTextArray = textArray.map(function (word) {
    return word[0].toUpperCase() + word.slice(1);
  });

  return newTextArray.join(' ');
}

// count how often a specific word occurs in some text
function countWordInText(word, text) {
  var textArray = text.replace(/[^a-z ]/ig, '').split(' ');
  return textArray.filter(function (wordInText) {
    return word.toLowerCase() === wordInText.toLowerCase();
  }).length;
}
