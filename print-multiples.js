/* 
input: number
output: logs numbers

rules
  - output multiples of arg between 0 and 100 (inclusive)
    that are also odd
  - descending order
  - number is an integer between 0 and 100
  - multiple: arg % num === 0

data structure
  - integer

algorithm
  - use a for loop that starts at 100 and descends
  - use condititonal
    - continue if even
    - check if multiple of arg, log if so
*/

function logMultiples(number) {
  for (var i = 100; i >= number; i--) {
    if (i % 2 === 1 && i % number === 0) {
    console.log(i);
    }
  }
}

// further exploration
function logMultiples(number) {
  var largestMult = Math.floor(100 / number) * number;
  for (var i = largestMult; i > 0; i -= number) {
    if (i % 2 === 1) console.log(i);
  }
}

// another solution
function logMultiples(number) {
  var multiple = Math.floor(100 / number) * number;
  
  while (multiple > 0) {
    if (multiple % 2 === 1) {
      console.log(multiple);
    }
    
    multiple -= number;
  }
}

// another solution
function logMultiples(number) {
  for (var multiple = Math.floor(100 / number) * number; multiple > 0; multiple -= number) {
    if (multiple % 2 === 1) {
      console.log(multiple);
    }
  }
}

// another solution - refactor of above
function largestMultiple(number) {
  return Math.floor(100 / number) * number;
}

function logMultiples(number) {
  for (var multiple = largestMultiple(number); multiple > 0; multiple -= number) {
    if (multiple % 2 === 1) {
      console.log(multiple);
    }
  }
}

// or...
function logMultiples(number) {
  for (var multiple = largestMultiple(number); multiple > 0; multiple -= number) {
    if (multiple % 2 === 1) console.log(multiple);
  }
}

// logMultiples(17);
logMultiples(21);