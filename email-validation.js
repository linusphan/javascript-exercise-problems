/*
input
  - string that represents an email address

ouput
  - boolean
    - true: valid email address
    - false: non-valid email address

rules
  - email address structure: local-part@domain-part
  - valid email address:
    - must be one @ sign
    - local part:
      - must contain 1 or more alphanumerics
        - no other chars allowed
    - domain part:
      - two or more components with a single dot separator
        - each component must contain one or more letters
  - don't need to validate domain part if it's real or official
  - From examples
    - no extra dots allowed
    - no numbers in domain part

examples
isValidEmail('Foo@baz.com.ph');          // returns true
isValidEmail('Foo@mx.baz.com.ph');       // returns true
isValidEmail('foo@baz.com');             // returns true
isValidEmail('foo@baz.ph');              // returns true
isValidEmail('HELLO123@baz');            // returns false - no dot separator
isValidEmail('foo.bar@baz.to');          // returns false - dot in local part
isValidEmail('foo@baz.');                // returns false - only one component
isValidEmail('foo_bat@baz');             // returns false - '_' in local part and only one component in domain part
isValidEmail('foo@bar.a12');             // returns false - number in domain part
isValidEmail('foo_bar@baz.com');         // returns false - '_' in local part
isValidEmail('foo@bar.....com');         // returns false - extra dots

data structure
  - RegExp
  - Array

algorithm
  - split string into local and domain parts: [local, domain]
    - split further: [local, [domain parts]]
  - test local part
    - test that entire string has 1 or more alphanumerics (no other chars)
      - pattern = /^[0-9A-Za-z]+$/
      - if match does not succeed
          return false
        else
          don't want to do anything else
  - test domain part
    - split domain part by '.' separator [local, [ ... ]]
    - if there are any empty strings in array
        return false
      else
        continue on
    - check that all components have one or more letters
      - Array.prototype.every
        - pattern = /^[a-z]+$/i
  - return true since all tests pass
*/

function testLocalPart(localPart) {
  var regexLocal = /^[0-9A-Za-z]+$/;

  return !!localPart.match(regexLocal);
}

function testDomainPart(domainParts) {
  if (domainParts.length < 2) {
    return false;
  }

  if (domainParts.includes('')) {
    return false;
  }

  var regexDomain = /^[a-z]+$/i;
  if (!domainParts.every(word => word.match(regexDomain))) {
    return false;
  }

  return true;
}

function isValidEmail(email) {
  var parts = email.split('@');
  if (parts.length > 2) return false;

  var localPart = parts[0];
  var domainParts = parts[1].split('.');

  if (!testLocalPart(localPart)) return false;
  if (!testDomainPart(domainParts)) return false;

  return true;
}

// another solution
function isValidEmail(email) {
  return /^[a-z0-9]+@([a-z]+\.)+[a-z]+$/i.test(email);
}

console.log(isValidEmail('Foo@baz.com.ph') === true);
console.log(isValidEmail('Foo@mx.baz.com.ph') === true);
console.log(isValidEmail('foo@baz.com') === true);
console.log(isValidEmail('foo@baz.ph') === true);
console.log(isValidEmail('HELLO123@baz') === false);
console.log(isValidEmail('foo.bar@baz.to') === false);
console.log(isValidEmail('foo@baz.') === false);
console.log(isValidEmail('foo_bat@baz') === false);
console.log(isValidEmail('foo@bar.a12') === false);
console.log(isValidEmail('foo_bar@baz.com') === false);
console.log(isValidEmail('foo@bar.....com') === false);
