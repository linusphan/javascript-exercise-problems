/*
input
  string

output
  - boolean
    - true if properly balanced parens
    - false otherwise

rules
  - properly balanced when '(' and ')' occur in matching pairs
  - each pair starting with '('

data structure
  - array
  - object {}

algorithm
  - iterate through array of characters of string
    - replace ' ' with ''
    - split
    - for loop
      - keep count of '(' and ')'
        if character is '('
          increment object.openParen count by 1
            - count.openParen = count.openParen || 0
            - count.openParen += 1
        else if character is ')'
          increment object.closeParen count by 1
            - count.closeParen = count.closeParen || 0
            - count.closeParen += 1
      - if closing paren > open paren
          return false
    - return true since test above passes
*/

function isBalanced(string) {
  var count = {
    openParen: 0,
    closeParen: 0,
  };

  var chars = string.replace(/[ ]/g, '').split('')

  for (var i = 0; i < chars.length; i += 1) {
    if (chars[i].match(/[(]/)) {
      count.openParen += 1;
    } else if (chars[i].match(/[)]/)) {
      count.closeParen += 1;
    }

    if (count.closeParen > count.openParen) {
      return false;
    }
  };

  return count.openParen === count.closeParen;
}

// another solution
function isBalanced(string) {
  var parensCount = 0;
  var i;

  for (i = 0; i < string.length; i += 1) {
    if (string[i] === '(') {
      parensCount += 1;
    } else if (string[i] === ')') {
      parensCount -= 1;
    }

    if (parensCount < 0) {
      return false;
    }
  }

  return parensCount === 0;
}

console.log(isBalanced('What (is) this?') === true);
console.log(isBalanced('What is) this?') === false);
console.log(isBalanced('What (is this?') === false);
console.log(isBalanced('((What) (is this))?') === true);
console.log(isBalanced('((What)) (is this))?') === false);
console.log(isBalanced('Hey!') === true);
console.log(isBalanced(')Hey!(') === false);
console.log(isBalanced('What ((is))) up(') === false);
