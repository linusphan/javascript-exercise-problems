function fridayThe13ths(year) {
  var count = 0;

  for (var monthIdx = 0; monthIdx <= 11; monthIdx += 1) {
    if (new Date(year, monthIdx, 13).getDay() === 5) {
      count += 1;
    }
  }

  return count;
}

// another solution
function fridayThe13ths(year) {
  var thirteenths = [];
  var i;

  for (i = 0; i < 12; i += 1) {
    thirteenths.push(new Date(year, i, 13));
  }

  return thirteenths.reduce(function (count, day) {
    return day.getDay() === 5 ? count += 1 : count;
  }, 0);
}

console.log(fridayThe13ths(1986) === 1);
console.log(fridayThe13ths(2015) === 3);
console.log(fridayThe13ths(2017) === 2);
