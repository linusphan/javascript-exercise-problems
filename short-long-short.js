function shortLongShort(str1, str2) {
  var len1 = str1.length;
  var len2 = str2.length;
  
  var short = len1 < len2 ? str1 : str2;
  var long = len1 > len2 ? str1 : str2;

  return short + long + short;
}

console.log(shortLongShort('abc', 'defgh') === "abcdefghabc");
console.log(shortLongShort('abcde', 'fgh') === "fghabcdefgh");
console.log(shortLongShort('', 'xyz') === "xyz");