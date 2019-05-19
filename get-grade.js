function getGrade(a, b, c) {
  var avg = (a + b + c) / 3;

  switch (true) {
    case (avg >= 90 && avg <= 100):
      return 'A';
      break;
    case (avg >= 80 && avg < 90):
      return 'B';
      break;
    case (avg >= 70 && avg < 80):
      return 'C';
      break;
    case (avg >= 60 && avg < 70):
      return 'D';
      break;
    default:
      return 'F';
  }
}

// another solution
function getGrade(grade1, grade2, grade3) {
  var average = (grade1 + grade2 + grade3) / 3;

  if (average >= 90 && average <= 100) {
    return 'A';
  } else if (average >= 80 && average < 90) {
    return 'B';
  } else if (average >= 70 && average < 80) {
    return 'C';
  } else if (average >= 60 && average < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(95, 90, 93) === "A");
console.log(getGrade(50, 50, 95) === "D");
console.log(getGrade(0, 0, 0) === 'F');