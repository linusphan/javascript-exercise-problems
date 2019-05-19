/*
input
  - string

output
  - log the longest sentence and word count

rules
  - sentence-ending characters: . ! ?
  - words: any sequence of characters that aren't space or sentence-ending characters
  - every detail about the string matters (e.g. case, punctuation, tabs, spaces, etc.)
  - edge cases:
    - don't worry about '' arguments
    - don't worry about wrong type arguments
    - multiple sentences with same length
      - select the first one

data structure
  - array
    - [sentence1, sentence2, ...]

algorithm
  - split text by . ! ?
    - string.split(/[.!?]/) => [sentence1, sentence2, ...]
  - declare longestSentence variable;
  - fold array of sentences into the longest sentence
    - array.reduce(callback)
      - count how many words are in a sentence
        - sentence.split(' ').length
      - longestSentence/accumulator = acc.length >= sentence.length ? acc : sentence
      - return longestSentence/accumulator
  - set the return value to longestSentence variable
  - get the sentence with the sentence-ending character back
    - idx = str.indexOf(longestSentence)
    - text.substr(idx, longestSentence.length + 1)
    - trim any leading/trailing space
  - log longest sentence
  - log word count
*/

var longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';

function getLongestSentence(text) {
  var sentences = text.split(/[.!?]/);

  var longestSentence = sentences.reduce(function (result, current) {
    var resultWords = result.split(' ');
    var currentWords = current.split(' ');

    return resultWords.length >= currentWords.length ? result : current;
  });

  var idx = text.indexOf(longestSentence);

  return text.substr(idx, longestSentence.length + 1).trim();
}

function longestSentence(text) {
  var longestSentence = getLongestSentence(text);
  var count = longestSentence.split(' ').length;

  console.log(longestSentence);
  console.log(`The longest sentence has ${count} words.`);
}

// alternative solution
function longestSentence(text) {
  var sentences = text.match(/\b.+?[.!?]+\B/g);
  var longestSentence = sentences.reduce((acc, cur) => {
    return acc.split(' ').length >= cur.split(' ').length ? acc : cur;
  });
  var count = longestSentence.split(' ').length;

  console.log(longestSentence);
  console.log(`The longest sentence has ${count} words`);
}

longestSentence(longText);

/*
// console output
It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.

The longest sentence has 86 words.


// Assuming the last sentence is removed:

longestSentence(longText);

// console output
Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.

The longest sentence has 30 words.
*/
