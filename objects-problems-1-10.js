// prob 1
var myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
// myObject[a]; // ReferenceError
myObject.a;

// prob 2
var person = {
  firstName: function() {
    return 'Linus';
  },
  lastName: function() {
    return 'Phan';
  },
};

// console.log(person.firstName + ' ' + person.lastName); // function itself is returned

// prob 3
var array1 = ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
var array2 = [];
var i;

for (i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

// console.log(array2); // string primitives are immutable

// prob 4
var myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

var prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

// console.log(myObject[prop2]); // '678'
// console.log(myObject.prop2); // '456'

var myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

// console.log(myObj); // {funcProp: "hello, "}
myObj[myFunc()] = 'world!';
// console.log(myObj); // {funcProp: "world!"}

// prob 5
var myArray = ['a', 'b', 'c'];

// console.log(myArray[0]); // a because element at index 0 has value 'a'
// console.log(myArray[-1]); // undefined because no key of -1

myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';

// console.log(myArray[-1]); // 'd'; value of key -1
// console.log(myArray['e']); // 5 because value of key 'e'
// console.log(myArray); // ['a', 'b', 'c', 'f', -1: "d", e: 5]

// prob 6
var myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  var sum = 0;
  var length = Object.keys(array).length;
  var i;

  for (i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / length;
}

// console.log(average(myArray));

// prob 7
function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

// console.log(calculateBonus(2800, true));               // 1400
// console.log(calculateBonus(1000, false));              // 0
// console.log(calculateBonus(50000, true));              // 25000

// prob 8
function penultimate(string) {
  var words = string.split(' ');
  return words[words.length - 2];
}

// another solution
function penultimate(string) {
  return string.split(' ').slice(-2, -1)[0];
}

// console.log(penultimate('last word')); // "last"
// console.log(penultimate('Launch School is great!')); // "is"

// prob 9
var MINUTES_PER_HOUR = 60;
var HOURS_PER_DAY = 24;
var MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function timeOfDay(deltaMinutes) {
  var hours;
  var minutes;

  deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  if (deltaMinutes < 0) {
    deltaMinutes = MINUTES_PER_DAY + deltaMinutes;
  }

  hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  minutes = deltaMinutes % MINUTES_PER_HOUR;

  return padWithZeroes(hours, 2) + ':' + padWithZeroes(minutes, 2);
}

function padWithZeroes(number, length) {
  var numberString = String(number);

  while (numberString.length < length) {
    numberString = '0' + numberString;
  }

  return numberString;
}

// Reimplement using JavaScript's Date object
var MILLISECONDS_PER_MINUTE = 60000;

function timeOfDay(deltaMinutes) {
  var date = new Date(deltaMinutes * MILLISECONDS_PER_MINUTE);
  var hoursUTC = date.getUTCHours();
  var minutesUTC = date.getUTCMinutes();

  return padWithZeroes(hoursUTC, 2) + ':' + padWithZeroes(minutesUTC, 2);
}

// another solution
function timeOfDay(deltaMinutes) {
  var midnight = new Date('1/1/2000 00:00');
  var afterMidnight = new Date(midnight.getTime() + deltaMinutes * MILLISECONDS_PER_MINUTE);
  var hours = padWithZeroes(afterMidnight.getHours(), 2);
  var minutes = padWithZeroes(afterMidnight.getMinutes(), 2);

  return hours + ':' + minutes;
}

function padWithZeroes(number, length) {
  var numberString = String(number);

  while (numberString.length < length) {
    numberString = '0' + numberString;
  }

  return numberString;
}

// console.log(timeOfDay(0));          // "00:00"
// console.log(timeOfDay(-3));         // "23:57"
// console.log(timeOfDay(35));         // "00:35"
// console.log(timeOfDay(-1437));      // "00:03"
// console.log(timeOfDay(3000));       // "02:00"
// console.log(timeOfDay(800));        // "13:20"
// console.log(timeOfDay(-4231));      // "01:29"

// prob 10
var MINUTES_PER_HOUR = 60;
var HOURS_PER_DAY = 24;
var MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeStr) {
  var timeComponents = timeStr.split(':');
  var hours = parseInt(timeComponents[0], 10);
  var minutes = parseInt(timeComponents[1], 10);

  return hours * MINUTES_PER_HOUR + minutes;
}

function beforeMidnight(timeStr) {
  var deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);

  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}

// reimplement with Date object
var MINUTES_PER_HOUR = 60;
var MINUTES_PER_DAY = 1440;

function afterMidnight(timeStr) {
  var arbitraryDate = new Date('1/1/2000 ' + timeStr);
  var hours = arbitraryDate.getHours();
  var minutes = arbitraryDate.getMinutes();

  return hours * MINUTES_PER_HOUR + minutes;
}

function beforeMidnight(timeStr) {
  var deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  return deltaMinutes === 1440 ? 0 : deltaMinutes;
}

// another solution
var MILLISECONDS_PER_MINUTE = 60000;
var MINUTES_PER_HOUR = 60;
var HOURS_PER_DAY = 24;
var MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
var DATE_PART = '1/1/2000';

function afterMidnight(timeStr) {
  var midnight = new Date(DATE_PART + ' 00:00');
  var currentDateTime = new Date(DATE_PART + ' ' + timeStr);

  return (currentDateTime.getTime() - midnight.getTime()) / MILLISECONDS_PER_MINUTE;
}

function beforeMidnight(timeStr) {
  var deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}

// console.log(afterMidnight('00:00'));       // 0
// console.log(beforeMidnight('00:00'));      // 0
// console.log(afterMidnight('12:34'));       // 754
// console.log(beforeMidnight('12:34'));      // 686
