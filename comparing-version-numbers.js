/*
input
  - two arguments
    - legal version numbers
      - strings

output
  - result of the comparison
    - first less than, equal to, greater than second
      - numbers (1, 0, -1)

rules
  - legal version numbers:
    1
    1.0
    1.2
    3.2.3
    3.0.0
    4.2.3.0
  - first > second => 1
    first < second => -1
    first === second => 0
  - valid chars: 0-9 and `.`
    - return null for invalid arguments
  - floating point version equal to integer version of same num
  - follow natural ranking rules: 1 < 2, 1.0 < 1.1, etc.
  - 0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37
  - edge cases:
    - no digits in between
    - how to handle failures
    - empty strings

data structures
  - array

algorithm
  - each version, split into components: [1], [1, 0]
    - intialize version1, version2 variables
    - version1.split('.'), version2.split('.')
    - map to numbers
      - arr.map(x => Number(x))
  - compare at each step
    - iteration
      - for loop rather than forEach
        - iterate number of times of largest array length
          - ternary operation
            - length = arr1.length > arr2.length ? arr1.length : arr2.length
        - set element1, element2 variables
        - if elemenent is undefined
            set element to 0
        - if element1 - element2 > 0
            return 1
          else if element1 - element2 < 0
            return -1
          else if element1 - element2 === 0
            continue
      - return 0

test
compareVersions(1.18.2, 13.37)
version1 = [1, 18, 2]
version2 = [13, 37]

1 - 13 < 0 => -1

compareVersions(1, 1.0.0)
version1 = [1]
version2 = [1, 0, 0]

1 - 1 === 0
version1[1] === undefined, element1 = 0
version2[1] === 0
0 - 0 === 0

version1[2] === undefined, element1 = 0
version2[2] = 0
0 - 0 === 0

return 0
*/

function compareVersions(version1, version2) {
  if (version1.match(/[^\d.]/) || version2.match(/[^\d.]/)) return null;
  if (version1.match(/\.\.|\B\.|\.\B/) || version2.match(/\.\.|\B\.|\.\B/)) return null;

  version1 = version1.split('.').map(x => Number(x));
  version2 = version2.split('.').map(x => Number(x));

  var length = version1.length > version2.length ? version1.length : version2.length;
  var i;
  var element1;
  var element2;

  for (i = 0; i < length; i += 1) {
    element1 = version1[i] || 0;
    element2 = version2[i] || 0;

    if (element1 - element2 > 0) {
      return 1;
    } else if (element1 - element2 < 0) {
      return -1;
    }
  }

  return 0;
}

// another solution
function compareVersions(versionA, versionB) {
  var validChars = /^[0-9]+(\.[0-9]+)*$/;
  var aParts;
  var bParts;
  var aValue;
  var bValue;
  var i;
  var maxLength;

  if (!validChars.test(versionA) || !validChars.test(versionB)) {
    return null;
  }

  aParts = versionA.split('.').map(Number);
  bParts = versionB.split('.').map(Number);
  maxLength = Math.max(aParts.length, bParts.length);

  for (i = 0; i < maxLength; i += 1) {
    aValue = aParts[i] || 0;
    bValue = bParts[i] || 0;

    if (aValue > bValue) {
      return 1;
    } else if (aValue < bValue) {
      return -1;
    }
  }

  return 0;
}

// test cases
// 0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37
console.log(compareVersions('0.1', '1') === -1);
console.log(compareVersions('1', '1.0') === 0);
console.log(compareVersions('1.1', '1.2') === -1);
console.log(compareVersions('1.2', '1.2.0.0') === 0);
console.log(compareVersions('1.18.2', '13.37') === -1);
console.log(compareVersions('1', '0') === 1);
console.log(compareVersions('a', '1') === null);
console.log(compareVersions('.', '1') === null);
console.log(compareVersions('1', '1') === 0);
console.log(compareVersions('1.1', '1.0') === 1);
console.log(compareVersions('2.3.4', '2.3.5') === -1);
console.log(compareVersions('1.a', '1') === null);
console.log(compareVersions('.1', '1') === null);
console.log(compareVersions('1.', '2') === null);
console.log(compareVersions('1..0', '2.0') === null);
console.log(compareVersions('1.0', '1.0.0') === 0);
console.log(compareVersions('1.0.0', '1.1') === -1);
console.log(compareVersions('1.0', '1.0.5') === -1);
