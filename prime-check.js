function isPrime(primeNumberCandidate) {
  if (primeNumberCandidate <= 1) return false;

  for (var i = 2; i < primeNumberCandidate; i++) {
    if (primeNumberCandidate % i === 0) return false;
  }

  return true;
}

// another solution
function isPrime(number) {
  var i;
  
  if (number <= 1) {
    return false;
  }
  
  for (i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
}

// another solution
function isPrime(number) {
  var divisor;
  
  if (number <= 1 || (number > 2 && number % 2 === 0)) {
    return false;
  }
  
  divisor = 3;
  
  while (divisor < number) {
    if (number % divisor === 0) {
      return false;
    }

    divisor += 2;
  }
  
  return true;
}


console.log(isPrime(1) === false);
console.log(isPrime(2) === true);
console.log(isPrime(3) === true);
console.log(isPrime(43) === true);
console.log(isPrime(55) === false);
console.log(isPrime(0) === false);