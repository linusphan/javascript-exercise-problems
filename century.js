/*
input
  year as number

output
  century as string with appropriate ordinal indicator

rules
  - new centuries end with 01

algorithm
  - set century number
  - set ordinal indicator
    if last 2 digits are 11, 12, or 13 then set 'th'
    else...
      1 st
      2 nd
      3 rd
      4 - 9 th
*/

function century(year) {
  var centuryString = String(Math.ceil(year / 100));
  var lastTwoDigits = centuryString.substr(-2);
  var lastDigit = centuryString.substr(-1);
  var ordinalIndicator;

  if (lastTwoDigits === '11' || lastTwoDigits === '12' || lastTwoDigits === '13') {
    ordinalIndicator = 'th';
  } else if (lastDigit === '1') {
    ordinalIndicator = 'st';
  } else if (lastDigit === '2') {
    ordinalIndicator = 'nd';
  } else if (lastDigit === '3') {
    ordinalIndicator = 'rd';
  } else {
    ordinalIndicator = 'th';
  }

  return centuryString + ordinalIndicator;
}

console.log(century(2000) ===  "20th");
console.log(century(2001) ===  "21st");
console.log(century(1965) ===  "20th");
console.log(century(256) ===  "3rd");
console.log(century(5) ===  "1st");
console.log(century(10103) ===  "102nd");
console.log(century(1052) ===  "11th");
console.log(century(1127) ===  "12th");
console.log(century(11201) ===  "113th");
