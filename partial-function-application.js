// Partial Function Application

// Problem 1
function subtract(a, b) {
  return a - b;
}

function sub5(a) {
  return subtract(a, 5);
}

// problem 2
function makeSubN(n) {
  return function (a) {
    return subtract(a, n);
  };
}

var sub5 = makeSubN(5);

function makePartialFunc(func, b) {
  return function (a) {
    return func(a, b);
  };
}

function multiply(a, b) {
  return a * b;
}

var multiplyBy5 = makePartialFunc(multiply, 5);

// problem 3
var subjects = {
  english: ['Bob', 'Tyrone', 'Lizzy'],
  math: ['Fatima', 'Gary', 'Susan'],
  biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function (student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  return function (students) {
    return rollCall('Math', students);
  };
}

var mathRollCall = makeMathRollCall();
mathRollCall(subjects['math']);
