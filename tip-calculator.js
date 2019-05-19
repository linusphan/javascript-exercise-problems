var bill = Number(prompt('What is the bill?'));
var tipPercentage = Number(prompt('What is the tip percentage?'));

var tip = bill * (tipPercentage / 100);
var total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);
