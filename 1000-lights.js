/*
input
  - total number of switches
    - number

output
  - returns an array of the lights that are on after n repetitions
    - lights are represented as integers
      - integers are the switch numbers
        - also their (0-based index + 1)

rules
  - bank of switches from 1 to n => array of switches from 1 to n => array of strings 'on' or 'off'
    - what are switches?
      - switches are associated with a single light, initially off
      - each element are the switches, each element are strings 'on' or 'off'
  - what is n?
    - the argument, which represents 2 things
      - n is the total number of switches (argument)
      - n is also the number of repetitions
  - pass 0: ['off' 'off' 'off'  'off' 'off'  ...]
  - pass 1: ['on'  'on'  'on'   'on'  'on'   ...]
  - pass 2: ['on'  'off' 'on'   'off' 'on'   ...]
  - pass 3: ['on'  'off' 'off'  'off' 'on'   ...]
  - pass 4: ['on'  'off' 'off'  'on'  'on'   ...]
  - pass 5: ['on'  'off' 'off'  'on'  'off'  ...]
  - and so on...

  - edge cases
    - failures?
      - input of wrong data type
    - NaN, Infinity, -Infinity
    - Negative numbers
    - Floating point numbers / decimal numbers
    - multiple arguments?
    - performance, optimization?

lightsOn(5);        // [1, 4]
lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

mental model
  - we have an array of switches labeled as 'on' or 'off' that are initially 'off'. We iterate n times (given as the argument),
    and toggle switches (represented as their index number + 1) that are multiples of the current pass number.

data structure
  - array of strings
  - strings are 'on' or 'off'

algorithm (example case, n = 5)
  - initialize an array of n number of the string, ['off', 'off', 'off', 'off', 'off']
  - iteration and transformation
    - iterate with for loop n number of times
      - within each pass, modify the current array of lights
        - map: iterate n number of times and toggle the switches that are multiples of the current pass number
          - how to get multiples? (idx + 1) % passNum === 0
  - return an array of switches that are 'on'
    - initialize an empty array
    - iterate through bank of switches
      - if 'on'
          append to result array the index + 1
        else
          continue
*/
function toggle(switchState) {
  if (switchState === 'on') {
    return 'off';
  } else {
    return 'on';
  }
}

function lightsOn(n) {
  var result = [];
  var switches = Array(n).fill('off');
  var i;
  var passNum;

  for (i = 1; i <= n; i += 1) {
    passNum = i;

    switches = switches.map(function (cur, idx) {
      var switchNum = idx + 1;

      if (switchNum % passNum === 0) {
        return toggle(cur);
      } else {
        return cur;
      }
    });
  }

  switches.forEach(function (cur, idx) {
    var switchNum = idx + 1;
    if (cur === 'on') {
      result.push(switchNum);
    }
  });

  return result;
}


console.log(lightsOn(5));        // [1, 4]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
