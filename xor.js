function isXor(condition1, condition2) {
  bool1 = !!condition1;
  bool2 = !!condition2;
  return (bool1 === true && bool2 === false) ||
    (bool1 === false && bool2 === true);
}

// another solution
function isXor(value1, value2) {
  if (value1 && !value2) {
    return true;
  }
  
  if (!value1 && value2) {
    return true;
  }
  
  return false;
}

// another solution
function isXor(value1, value2) {
  if (value1 && !value2) {
    return true;
  } else if (!value1 && value2) {
    return true;
  } else {
    return false;
  }
}

// another solution
function isXor(value1, value2) {
  return !!((value1 && !value2) || (value2 && !value1));
}

// another solution
function isXor(value1, value2) {
  return Boolean(value1) !== Boolean(value2);
}

console.log(isXor(false, true) === true);
console.log(isXor(true, false) === true);
console.log(isXor(false, false) === false);
console.log(isXor(true, true)  === false);
console.log(isXor(false, 3) === true);
console.log(isXor('a', undefined) === true);
console.log(isXor(null, '') === false);
console.log(isXor('2', 23) === false);