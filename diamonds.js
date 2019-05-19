/*
input
  - odd integer, n

output
  - log a four pointed diamond
    in an n x n grid

rules
  - may assume arg is always odd
  - log to console
  - edge cases
    - what if the size is larger than available space?
    - what if given negative odd integers?
    - what should we output if given even integers?
    - floating point 'numbers'
    - what should we output for bad inputs / failures?
      - wrong data type arguments

data structure
  - array

algorithm
  - turn n into an array of each line, join with newline, and output
    -  create n x n grid
      - initialize diamond array, ['*'] (n - 1 spaces, 1 star)
        - ' '.repeat(n - 1) + '*'
      - while arr.length < n
        - build string and append to array each time
          - add ** and remove ' ' if length < n / 2
          - remove ** and add ' ' otherwise
          - push string to array
      - join array with `\n`
      - console.log the return value
*/

function diamond(n) {
  var space = ' '.repeat(Math.floor(n / 2));
  var star = '*';
  var line = space + star;
  var diamond = [line];
  var length;

  while ((length = diamond.length) < n) {
    if (length < n / 2) {
      space = space.slice(1);
      star += '**';
    } else {
      space += ' ';
      star = star.slice(2);
    }

    line = space + star;
    diamond.push(line);
  }

  console.log(diamond.join('\n'));
}

// another solution
// function diamond(n) {
//   numberSequence(n).forEach(function (number) {
//     console.log(repeat(' ', (n - number) / 2) + repeat('*', number));
//   });
// }

// function numberSequence(n) {
//   var result = [];
//   var increment = 2;
//   var number;

//   for (number = 1; number > 0; number += increment) {
//     result.push(number);
//     if (number === n) {
//       increment = -2;
//     }
//   }

//   return result;
// }

// function repeat(char, times) {
//   var repeated = '';
//   var i;

//   for (i = 0; i < times; i += 1) {
//     repeated += char;
//   }

//   return repeated;
// }

// further exploration - build a hollow diamond
/*
    *
   * *
  *   *
 *     *
*       *
 *     *
  *   *
   * *
    *

algorithm
  - substitute star line characters to ' '
    - change the ends to '*'s
*/

function diamond(n) {
  var space = ' '.repeat(Math.floor(n / 2));
  var star = '*';
  var line = space + star;
  var diamond = [line];
  var length;

  while ((length = diamond.length) < n) {
    if (length < n / 2) {
      space = space.slice(1);
      star = ' '.repeat(star.length + 2);
    } else {
      space += ' ';
      star = ' '.repeat(star.length - 2);
    }

    star = star.split('');
    star[0] = '*';
    star[star.length - 1] = '*';
    star = star.join('');

    line = space + star;
    diamond.push(line);
  }

  console.log(diamond.join('\n'));
}

diamond(1);
console.log('');
diamond(3);
console.log('');
diamond(9);
