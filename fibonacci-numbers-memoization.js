function fibonacci(n) {
  var memo = {};

  if (n <= 2) {
    return 1;
  } else {
    if (memo[n]) {
      return memo[n];
    } else {
      memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
      return memo[n];
    }
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
