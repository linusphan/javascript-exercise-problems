/*
function triangle(n) {
  var spaces = ' ';
  var stars = '*';
  var line;
  for (var i = 1; i <= n; i++) {
    line = spaces.repeat(n - i) + stars.repeat(i);
    console.log(line);
  }
}

triangle(5);
triangle(9);
*/

// another solution
function triangle(height) {
  var stars = 1;
  var spaces = height - 1;

  for (i = 0; i < height; i += 1) {
    console.log(repeat(' ', spaces) + repeat('*', stars));
    stars += 1;
    spaces -= 1;
  }
}

function repeat(char, count) {
  var repeated = '';
  var i;

  for (i = 0; i < count; i += 1) {
    repeated += char;
  }

  return repeated;
}

triangle(5);
triangle(9);
