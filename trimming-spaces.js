function trim(string) {
	var leadingSpacesCount = 0;
  var trailingSpacesCount = 0;
  var result = '';
  var i;
  var limit;
  
  for (i = 0; i < string.length; i++) {
  	if (string[i] === ' ') {
    	leadingSpacesCount++;
    } else {
    	break;
    }
  }
  
  for (i = string.length - 1; i >= 0; i--) {
  	if (string[i] === ' ') {
    	trailingSpacesCount++;
    } else {
    	break;
    }
  }
  
  limit = string.length - trailingSpacesCount;
  
  for (i = leadingSpacesCount; i < limit; i++) {
	  result += string[i];
  }
  
  return result;
}

// another solution
function trim(string) {
	var trimmed = trimLeft(string);
	trimmed = trimRight(trimmed);
  
  return trimmed;
}

function trimLeft(string) {
	var newString = '';
  var copyMode = false;
  var i;
  
  for (i = 0; i < string.length; i += 1) {
  	if (string[i] !== ' ') {
    	copyMode = true;
    }
    
    if (copyMode) {
    	newString += string[i];
    }
  }
  
  return newString;
}

function trimRight(string) {
	var newString = '';
  var copyMode = false;
  var i;
  
  for (i = string.length - 1; i >= 0; i -= 1) {
  	if (string[i] !== ' ') {
    	copyMode = true;
    }
    
    if (copyMode) {
    	newString = string[i] + newString;
    }
  }
  
  return newString;
}

console.log(trim('  abc  ') === "abc");
console.log(trim('abc   ') === "abc");
console.log(trim(' ab c') === "ab c");
console.log(trim(' a b  c' ) === "a b  c");
console.log(trim('      ') === "");
console.log(trim('') === "");
