function average(scores) {
  var total = 0;
  var length = scores.length;
  for (var i = 0; i < length; i++) {
    total += scores[i];
  }
  
  return total / length;
}

var scores = [];
var numberOfScores = Number(prompt('How many scores will you input?'));

for (var i = 1; i <= numberOfScores; i++) {
  scores.push(Number(prompt(`Enter score ${i}:`)));
}

var average = average(scores);
var grade;

switch (true) {
  case (average >= 90):
    grade = 'A';
    break;
  case (average >= 70):
    grade = 'B';
    break;
  case (average >= 50):
    grade = 'C';
    break;
  default:
    grade = 'F';
}

console.log(`Based on the average of your ${scores.length} scores your letter grade is "${grade}".`);
