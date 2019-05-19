var positiveWords = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
var negativeWords = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];

/*
input
  - some text as argument

result
  - logs some information about whether the text has a
    positive, negative, or neutral sentiment

rules
  - sentiment is positive if difference is > 0
  - sentiment is negative if difference is < 0
  - sentiment is neutral if difference is 0

data structure
  - object to store counts

algorithm
  - initialize counts object
    { positive: 0, negative: 0 }
  - initialize positive words used array
  - initialize negative words used array
  - count the positive and negative words in our text
    - iterate through each line
      - split('\n')
      - forEach
        - iterate through each word in line
          - forEach
            - if postiveWords array includes word
                count.positive += 1
            - if negativeWords array includes word
                count.negative -= 1
    - compute a sentiment score as the difference
        var difference = count.positive - count.negative
  - return based on difference
      There are ${count.positive} positive words in the text.
      Positive sentiments: fortune, dream, respect, love, resolution

      There are ${count.negative} negative words in the text.
      Negative sentiments: die, heartache, die, death, weary, death

      The sentiment of the text is Negative.
*/

function message(count, wordsUsed) {
  var positive = wordsUsed[0];
  var negative = wordsUsed[1];
  var result;

  if (positive.length - negative.length > 0) {
    result = 'Positive';
  } else if (positive.length - negative.length < 0) {
    result = 'Negative';
  } else {
    result = 'Neutral';
  }

  console.log(`There are ${count.positive} positive words in the text.
Positive sentiments: ${positive.join(', ')}

There are ${count.negative} negative words in the text.
Negative sentiments: ${negative.join(', ')}

The sentiment of the text is ${result}.`);
}

function sentiment(text) {
  var count = {
    positive: 0,
    negative: 0,
  };
  var positiveWordsUsed = [];
  var negativeWordsUsed = [];
  var wordsUsed = [positiveWordsUsed, negativeWordsUsed];

  text.split('\n').forEach(function (line) {
    line.split(' ').forEach(function (word) {
      word = word.replace(/[^a-z]/i, '');

      if (positiveWords.includes(word)) {
        count.positive += 1;
        positiveWordsUsed.push(word);
      } else if (negativeWords.includes(word)) {
        count.negative += 1;
        negativeWordsUsed.push(word);
      }
    });
  });

  var difference = count.positive - count.negative;

  return message(count, wordsUsed);
}

// ######## another solution #########
function sentiment(text) {
  var wordList = text.toLowerCase()
    .replace(/\n/g, ' ')
    .replace(/[-:\.\!\,\?]/g, '')
    .split(' ');

  var positives = wordList.filter(function (word) {
    return positiveWords.indexOf(word) >= 0;
  });

  var negatives = wordList.filter(function (word) {
    return negativeWords.indexOf(word) >= 0;
  });

  var textSentiment;
  
  console.log('There are ' + String(positives.length) + ' positive words in the text.');
  console.log('Positive sentiments: ' + positives.join(', '));
  console.log('There are ' + String(negatives.length) + ' negative words in the text.');
  console.log('Negative sentiments: ' + negatives.join(', '));
  console.log('');

  if (positives.length > negatives.length) {
    textSentiment = 'Positive';
  } else if (positives.length < negatives.length) {
    textSentiment = 'Negative';
  } else {
    textSentiment = 'Neutral';
  }

  console.log('The sentiment of the text is ' + textSentiment + '.');
}


var textExcerpt = 'To be or not to be-that is the question:\n' +
  'Whether \'tis nobler in the mind to suffer\n' +
  'The slings and arrows of outrageous fortune,\n' +
  'Or to take arms against a sea of troubles,\n' +
  'And, by opposing, end them. To die, to sleep-\n' +
  'No more-and by a sleep to say we end\n' +
  'The heartache and the thousand natural shocks\n' +
  'That flesh is heir to-\'tis a consummation\n' +
  'Devoutly to be wished. To die, to sleep-\n' +
  'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
  'For in that sleep of death what dreams may come,\n' +
  'When we have shuffled off this mortal coil,\n' +
  'Must give us pause. There\'s the respect\n' +
  'That makes calamity of so long life.\n' +
  'For who would bear the whips and scorns of time,\n' +
  'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
  'The pangs of despised love, the law’s delay, [F: disprized]\n' +
  'The insolence of office, and the spurns\n' +
  'That patient merit of the unworthy takes,\n' +
  'When he himself might his quietus make\n' +
  'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
  'To grunt and sweat under a weary life,\n' +
  'But that the dread of something after death,\n' +
  'The undiscovered country from whose bourn\n' +
  'No traveler returns, puzzles the will\n' +
  'And makes us rather bear those ills we have\n' +
  'Than fly to others that we know not of?\n' +
  'Thus conscience does make cowards of us all,\n' +
  'And thus the native hue of resolution\n' +
  'Is sicklied o\'er with the pale cast of thought,\n' +
  'And enterprises of great pitch and moment, [F: pith]\n' +
  'With this regard their currents turn awry, [F: away]\n' +
  'And lose the name of action.-Soft you now,\n' +
  'The fair Ophelia.-Nymph, in thy orisons\n' +
  'Be all my sins remembered';

sentiment(textExcerpt);

// console output

// There are 5 positive words in the text.
// Positive sentiments: fortune, dream, respect, love, resolution

// There are 6 negative words in the text.
// Negative sentiments: die, heartache, die, death, weary, death

// The sentiment of the text is Negative.