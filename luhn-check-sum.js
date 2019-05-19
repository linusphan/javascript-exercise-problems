/*
input
  - given a number in string

rules
  - checksum formula: validation
  - full number = check digit appeneded to partial number
  - from right to left, double every second digit
    - digits >= 10, subtract 9 from result
      - 1111 -> 2121
      - 8763 -> 7733
    - add all digits together for checksum
  - if total ends in 0 (total % 10 === 0)
      valid
    else
      not valid
  - ignore all non-numeric chars in string
  - edge cases
    - '' -> false
    - uppercase/lowercase -> irrelevant
    - failures => return special value? null/0/''/undefined/etc.?

'2323 2005 7766 3554'
4343 4005 5736 6514
14 + 9 + 21 + 16
60
60 % 10 = 0 -> good

data structure
  - array

algorithm
  - string -> array of digits: '1111' -> [1, 1, 1, 1]
    - replace invalid chars with ''
    - String.prototype.split('')
    - arr.map(Number)
  - reverse array and double every odd index (0-based)
    - if doubled >= 10, subtract by 9
  - reduce array to sum
  - return sum % 10 === 0

'8763 8763'
'87638763'
'36783678'
['3', '6', '7', '8', '3', '6', '7', '8']
[3, 6, 7, 8, 3, 6, 7, 8]
...
...
*/

function validLuhnNumber(numberString) {
  var checksumDigits = numberString.replace(/\D/g, '')
    .split('')
    .map(Number)
    .reverse()
    .map(function (num, idx) {
      if (idx % 2 === 1) {
        return num * 2 >= 10 ? num * 2 - 9 : num * 2;
      } else {
        return num;
      }
    })

  if (checksumDigits.length === 0) return false;

  var checksum = checksumDigits.reduce((acc, num) => acc + num);

  return checksum % 10 === 0;
}

console.log(validLuhnNumber('2323 2005 7766 3554') === true);
console.log(validLuhnNumber('1111') === false);
console.log(validLuhnNumber('x') === false);
console.log(validLuhnNumber('0') === true);
