/*
input
  - string

output
  - capitalized words

rules
  - word: any sequence of non-whitespace chars

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'

data structure

algorithm
  - split to words
  - transform each word
    - word[0].toUpperCase() + word.slice(1).toLowerCase()
  - join
*/

function wordCap(string) {
  return string.split(' ').map(function (word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

console.log(wordCap('four score and seven') === "Four Score And Seven");
console.log(wordCap('the javaScript language') === "The Javascript Language");
console.log(wordCap('this is a "quoted" word') === 'This Is A "quoted" Word');
