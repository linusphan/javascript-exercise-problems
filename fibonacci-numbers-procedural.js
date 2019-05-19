function fibonacci(n) {
  if (n < 3) return 1;

  var num1 = 1;
  var num2 = 1;
  var result;

  for (var i = 3; i <= n; i += 1) {
    result = num1 + num2;
    num1 = num2;
    num2 = result;
  }

  return result;
}

console.log(fibonacci(20) === 6765);
console.log(fibonacci(50) === 12586269025);
