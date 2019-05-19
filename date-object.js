// function dateSuffix(date) {
//   var suffix;
//   var dateString = String(date);
//   var lastDigitString = dateString[dateString.length - 1];

//   if (dateString === '11' || dateString === '12' || dateString === '13') {
//     suffix = 'th';
//   } else if (lastDigitString === '1') {
//     suffix = 'st';
//   } else if (lastDigitString === '2') {
//     suffix = 'nd';
//   } else if (lastDigitString === '3') {
//     suffix = 'rd';
//   } else {
//     suffix = 'th';
//   }

//   return dateString + suffix;
// }

// another solution for dateSuffix() implementation
function dateSuffix(date) {
  var suffix = 'th';
  var dateString = String(date);
  var digit;

  if (dateString.length === 1) {
    digit = dateString[0];
  } else if (dateString[0] !== '1') {
    digit = dateString[1];
  }

  if (digit === '1') {
    suffix = 'st';
  } else if (digit === '2') {
    suffix = 'nd';
  } else if (digit === '3') {
    suffix = 'rd';
  }

  return String(date) + suffix;
}

// ############ SOLUTION ############
// function formattedMonth(month) {
//   var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//   return months[month];
// }

// function formattedDay(day) {
//   var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//   return daysOfWeek[day];
// }

// function formattedDate(day, month, date) {
//   return `${day}, ${month} ${date}`;
// }

// var today = new Date();

// var currentDayIndex = today.getDay();
// var currentMonth = today.getMonth();
// var currentDate = today.getDate();

// var formattedDayString = formattedDay(currentDayIndex);
// var formattedMonthString = formattedMonth(currentMonth);
// var dateSuffixString = dateSuffix(currentDate);

// var formattedDateString = formattedDate(formattedDayString, formattedMonthString, dateSuffixString);


// console.log(`Today's day is ${formattedDateString}`);

// ############ ALTERNATE SOLUTION ############
function formattedDate(date) {
  var day = formattedDay(date);
  var month = formattedMonth(date);

  console.log(`Today's date is ${day}, ${month} ${dateSuffix(date.getDate())}`);
}

function formattedMonth(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return months[date.getMonth()];
}

function formattedDay(date) {
  var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return daysOfWeek[date.getDay()];
}

var today = new Date();

var tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);

var nextWeek = new Date(today.getTime());
nextWeek.setDate(today.getDate() + 7);

// problem 14
function formatTime(date) {
  var hours = String(date.getHours());
  var minutes = String(date.getMinutes());

  if (hours.length === 1) {
    hours = '0' + hours;
  }

  if (minutes.length === 1) {
    minutes = '0' + minutes;
  }

  return `${hours}:${minutes}`;
}

// alternate solution
function formatTime(date) {
  return addZero(date.getHours()) + ':' + addZero(date.getMinutes());
}

function addZero(value) {
  var timeComponent = String(value);
  return timeComponent.length < 2 ? '0' + timeComponent : timeComponent;
}

console.log(formatTime(today));
console.log(formatTime(new Date(2013, 2, 1, 1, 10)));

var anotherDate = new Date(2013, 2, 1, 1, 10);
console.log(anotherDate);
