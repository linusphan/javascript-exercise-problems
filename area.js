var FEET_PER_METER = 10.7639;

var inputType;
var inputInMeters = true;
var length;
var width;
var areaInMeters;
var areaInFeet;

while (true) {
  inputType = prompt('What is the input type? (\'meters\' or \'feet\')');

  if (inputType === 'meters') {
    length = parseInt(prompt('Enter the length of the room in meters:'), 10);
    width = parseInt(prompt('Enter the width of the room in meters:'), 10);
    break;
  } else if (inputType === 'feet') {
    inputInMeters = false;
    length = parseInt(prompt('Enter the length of the room in feet:'), 10);
    width = parseInt(prompt('Enter the width of the room in feet:'), 10);
    break;
  }
}

if (inputInMeters) {
  areaInMeters = length * width;
  areaInFeet = areaInMeters * FEET_PER_METER;
  console.log(`The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`)
} else {
  areaInFeet = length * width;
  areaInMeters = areaInFeet / FEET_PER_METER;
  console.log(`The area of the room is ${areaInFeet.toFixed(2)} square feet (${areaInMeters.toFixed(2)} square meters).`)
}
