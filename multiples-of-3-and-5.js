/*
input: none
output: multiples of 3 or 5 of numbers from 1 to 100 (inclusive)

rules:
  - multiples of 3: num % 3 === 0
  - multiples of 5: num % 5 === 0
  - multiples of both:
    num % 3 === 0 && num % 5 === 0
    append an "!" to the number (string)

data structures
  - number
  - string
  
algorithm
  - loop through numbers from 1 to 100 (inclusive) using for loop
  - use branching logic (switch statement)
*/

function multiplesOfThreeAndFive() {
  for (var i = 3; i <= 100; i++) {
    switch (true) {
      case (i % 3 === 0 && i % 5 === 0):
        console.log(String(i) + '!');
        break;
      case i % 3 === 0:
      case i % 5 === 0:
        console.log(String(i));
        break;
    }
  }
}

// another solution
function multiplesOfThreeAndFive() {
  for (var i = 3; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(String(i) + '!');
    } else if (i % 3 === 0 || i % 5 === 0) {
      console.log(String(i));
    }
  }
}

/*
further exploration
startNum could be called min
endNum could be called max
*/
function multiplesOfThreeAndFive(startNum = 3, endNum = 100) {
  for (var i = startNum; i <= endNum; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(String(i) + '!');
    } else if (i % 3 === 0 || i % 5 === 0) {
      console.log(String(i));
    }
  }
}

// multiplesOfThreeAndFive();
multiplesOfThreeAndFive(1, 15);