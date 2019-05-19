function generatePattern(n) {
  var str = '';
  var sym = '*';
  var padding;
  for (var i = 1; i <= n; i++) {
    str += String(i);
    padding = n - str.length;
    console.log(str + sym.repeat(padding));
  }
}

// another solution
function generatePattern(n) {
  var string;
  var i;
  var j;
  var k;
  
  for (i = 1; i <= n; i += 1) {
    string = '';
    for (j = 1; j <= i; j += 1) {
      string += String(j);
    }
    
    for (k = i + 1; k <= n; k += 1) {
      string += '*'.repeat(String(k).length);
    }
    
    console.log(string);
  }
}

// another solution
function generatePattern(n) {
  var lastRowString = '';
  var width;
  var string;
  var stars;
  var i;
  var j;
  var k;

  for (i = 1; i <= n; i += 1) {
    lastRowString += String(i);
  }
  
  width = lastRowString.length;
  
  for (i = 1; i <= n; i += 1) {
    string = '';
    for (j = 1; j <= i; j += 1) {
      string += String(j);
    }
    
    stars = width - string.length;
    
    for (k = 1; k <= stars; k += 1) {
      string += '*';
    }
    
    console.log(string);
  }
}

generatePattern(20);