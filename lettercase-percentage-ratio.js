function letterPercentages(string) {
  var percentage = {};
  var totalLength = string.length;

  var lowercaseMatches = string.match(/[a-z]/g) || [];
  var uppercaseMatches = string.match(/[A-Z]/g) || [];
  var neitherMatches = string.match(/[^a-zA-Z]/g) || [];

  percentage.lowercase = String((lowercaseMatches.length / totalLength * 100).toFixed(2));
  percentage.uppercase = String((uppercaseMatches.length / totalLength * 100).toFixed(2));
  percentage.neither = String((neitherMatches.length / totalLength * 100).toFixed(2));

  return percentage;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
