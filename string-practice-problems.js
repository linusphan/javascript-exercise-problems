var firstName = 'Linus';
var lastName = 'Phan';
var fullName = `${firstName} ${lastName}`;

console.log(fullName);
console.log(firstName.concat(lastName));

console.log(fullName.split(' '));

var language = 'JavaScript';
// var idx = language.search(/S/);
var idx = language.indexOf('S');
console.log(idx);

var charCode = language.charCodeAt(idx);
console.log(charCode);
console.log(String.fromCharCode(charCode));

console.log(language.lastIndexOf('a'));

var a = 'a';
var b = 'b';
console.log(a > b);
b = 'B';
console.log(a > b);

var aIndex = language.indexOf('a');
var vIndex = language.indexOf('v');

console.log(language.substr(aIndex, 4));
console.log(language.substr(vIndex, 4));

console.log(language.substring(aIndex, 4));
console.log(language.substring(vIndex, 4));

var fact1 = 'JavaScript is fun';
var fact2 = 'Kids like it too';
var compoundSentence = fact1 + ' and ' + fact2[0].toLowerCase() + fact2.slice(1);
console.log(compoundSentence);

console.log(fact1[0]);
console.log(fact2[0]);

var pi = 22 / 7;
console.log(pi.toString().lastIndexOf('14'));

var boxNumber = 356..toString();
console.log(boxNumber);
console.log(typeof boxNumber);

boxNumber = parseInt(boxNumber, 10);
console.log(boxNumber);
console.log(typeof boxNumber);

boxNumber = String(boxNumber);
console.log(boxNumber);
console.log(typeof boxNumber);

var name = prompt("What's your name?");
// var message = !name.endsWith('!') ? `Hello ${name}.` : `Hello ${name.slice(0, name.length - 1)}. Why are we screaming?`.toUpperCase();

if (name.endsWith('!')) {
  name = name.slice(0, -1);
  console.log(`Hello ${name}. Why are we screaming?`.toUpperCase());
} else {
  console.log(`Hello ${name}.`);
}
