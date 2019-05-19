/*
input
  - string

output
  - true if valid word
  - false if invalid

rules
  - valid words: blocks used once
  - case insensitive
  - edge cases
    - chars not blocks?
    - empty strings
  - failures
    - how to handle?

data structure
  - collection of blocks in array: [[B, O], [..., ...]]

algorithm
  - intialize spelling block rule: [[], [], ...]
  - lowercase string argument => will use uppercase actually...
  - iterate through chars of string
    - for loop (early return allowed)
    - if nested array includes block
      - arr.some(callback, index, array)
        - callback = currArray.includes(letter)
          remove block
            - array.splice(index, 1)
      else
        return false
  - return true as default

1) isBlockWord('BATCH');      // true
2) isBlockWord('BUTCH');      // false
3) isBlockWord('jest');       // true

1) 'batch'
[['b', '...'']]
[[], ...]
'b', 'a', 't', 'c', 'h'
true

2) 'butch'
'b' 'u'
*/

function isBlockWord(string) {
  var blocks = [
                ['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'],
                ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'],
                ['V', 'I'], ['L', 'Y'], ['Z', 'M']
               ];

  string = string.toUpperCase();
  var letter;
  var index;

  for (var i = 0, length = string.length; i < length; i += 1) {
    letter = string[i];

    index = blocks.findIndex(function (block) {
      return block.includes(letter);
    })

    if (index !== -1) {
      blocks.splice(index, 1);
    } else {
      return false;
    }
  }

  return true;
}

console.log(isBlockWord('BATCH') === true);
console.log(isBlockWord('BO') === false);
console.log(isBlockWord('BUTCH') === false);
console.log(isBlockWord('jest') === true);
