/*
input
  - user entered phone numbers
    - string

output
  - cleaned up phone numbers that can be sent as SMS messages
    - string

rules
  - valid chars: digits, special characters such as ' ', `-`, `.`, ()
  - special chars should be ignored
  - good
    - 10 digits
    - 11 digits and 1st is 1 (trim 1 and use last 10)
  - bad
    - less than 10 digits
    - 11 and 1st not 1
    - more than 11 digits
  - for bad numbers return a string of 10 0's

phoneNumber('1234567890') === '1234567890'
phoneNumber('12345678901') === '2345678901'
phoneNumber('123456789') === '0000000000'
phoneNumber('') === '0000000000'
phoneNumber('23456789011') === '0000000000'
phoneNumber('123-456-7890') === '1234567890'
phoneNumber('123.456.7890') === '1234567890'
phoneNumber('(123) 456-7890') === '1234567890'
phoneNumber('123--4567890') === '1234567890'
phoneNumber('(())1234567890') === '1234567890'

data structure
  - strings

algorithm
  - extracts digits
    - string.match(/\d/g)
      - check length
        - arr.length
          - if 10 or 11, then replace...
          - if there are 10
              return number
          - else if there are 11
              if first digit is 1
                return number with first trimmed
          - else
              return 10 digits
*/

function phoneNumber(string) {
  var digits = string.match(/\d/g) || [];
  var length = digits.length;

  if (length === 10 || length === 11) string = string.replace(/[^\d]/g, '');

  if (length === 10) {
    return string;
  } else if (length === 11 && string[0] === '1') {
    return string.slice(1);
  } else {
    return '0'.repeat(10);
  }
}

console.log(phoneNumber('1234567890') === '1234567890');
console.log(phoneNumber('12345678901') === '2345678901');
console.log(phoneNumber('123456789') === '0000000000');
console.log(phoneNumber('') === '0000000000');
console.log(phoneNumber('23456789011') === '0000000000');
console.log(phoneNumber('123-456-7890') === '1234567890');
console.log(phoneNumber('123.456.7890') === '1234567890');
console.log(phoneNumber('(123) 456-7890') === '1234567890');
console.log(phoneNumber('123--4567890') === '1234567890');
console.log(phoneNumber('(())1234567890') === '1234567890');
