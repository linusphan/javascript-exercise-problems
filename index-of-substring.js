function indexOf(firstString, secondString) {
  var string;
  var i;
  var k;
  var firstStrLen = firstString.length;
  var secondStrLen = secondString.length;

  for (i = 0; i <= firstStrLen - secondStrLen; i++) {
    string = ''
    for (k = i; k < i + secondStrLen; k++) {
      string += firstString[k];
    }

    if (string === secondString) return i;
  }

  return -1;
}

function lastIndexOf(firstString, secondString) {
  var index = indexOf(firstString, secondString);
  var temp;
  var string;
  var i;

  while (index !== -1) {
    string = '';

    for (i = index + 1; i < firstString.length; i++) {
      string += firstString[i];
    }
 
    temp = indexOf(string, secondString);
  
    if (temp !== -1) {
      index += temp + 1;
    } else {
      break;
    }
  }
  
  return index;
}

// another solution
function indexOf(firstString, secondString) {
  var limit = firstString.length - secondString.length;
  var matchCount;
  var i;
  var j;
  
  for (i = 0; i <= limit; i += 1) {
    matchCount = 0;
    
    for (j = 0; j < secondString.length; j += 1) {
      if (firstString[i + j] === secondString[j]) {
        matchCount += 1;
      } else {
        break;
      }
    }

    if (matchCount === secondString.length) {
      return i;
    }
  }
  
  return -1;
}

function lastIndexOf(firstString, secondString) {
  var limit = firstString.length - secondString.length;
  var matchCount;
  var i;
  var j;
  
  for (i = limit; i >= 0; i -= 1) {
    matchCount = 0;
    
    for (j = 0; j < secondString.length; j += 1) {
      if (firstString[i + j] === secondString[j]) {
        matchCount += 1;
      } else {
        break;
      }
    }
    
    if (matchCount === secondString.length) {
      return i;
    }
  }
  
  return -1;
}

console.log(indexOf('Some strings', 's') === 5);
console.log(indexOf('Blue Whale', 'Whale') === 5);
console.log(indexOf('Blue Whale', 'Blute') === -1);
console.log(indexOf('Blue Whale', 'leB') === -1);

console.log(lastIndexOf('Some strings', 's') === 11);
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale') === 19);
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all') === -1);
