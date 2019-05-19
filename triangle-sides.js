/*
input
  - lengths of 3 sides of a triangle as number

output
  - triangle classification as string

rules
  - equilateral: all 3 sides are equal length
  - isosceles: two sides equal length, third side different
  - scalene: three sides all different
  - valid triangle:
    - sum of lengths of 2 shortest sides > length of longest side
    - every length > 0

triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"
triangle(3, 3, 1);        // "isosceles"

mental model
  - returning triangle type based on 3 lengths and whether or not they pass certain rules

data structure
  - numbers

algorithm
  - guard clause
    - ensure every length > 0
    - ensure the sum of the 2 shortest sides > length of longest side
  - count repeating lengths
  - if 3 return equi, if 2 return isos, if 0 return scalene

triangle(3, 3, 3);
3 + 3 = 6 > 3
3 -> equilateral


count repeating lengths
  - mental model: keep track of largest repeating count
  - algorithm
    - call reduce on array to fold into the largest value
    - accumulator is set to the result of the largest count value
*/

function validTriangle(sides) {
  var sorted = sides.sort((a, b) => a - b);
  var shortestTwo = sorted.slice(0, -1);
  var shortestTwoSum = shortestTwo.reduce((acc, cur) => acc + cur);
  var longest = sorted[sorted.length - 1];

  return sides.every(side => side > 0) && (shortestTwoSum > longest);
}

function count(element, array) {
  var count = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === element) {
      count += 1;
    }
  }

  return count;
}

function countRepeating(sides) {
  return sides.reduce(function (acc, cur) {
    var countCur = count(cur, sides);

    return acc >= countCur ? acc : countCur;
  }, count(sides[0], sides));
}

function triangle(side1, side2, side3) {
  var sides = [...arguments];
  if (!validTriangle(sides)) return 'invalid';

  var repeatingCount = countRepeating(sides);

  if (repeatingCount === 3) {
    return 'equilateral';
  } else if (repeatingCount === 2) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

// another solution
function triangle(side1, side2, side3) {
  var perimeter = side1 + side2 + side3;
  var longest = Math.max(side1, side2, side3);
  var shortest = Math.min(side1, side2, side3);
  var middle = perimeter - longest - shortest;

  if (isValid(shortest, middle, longest)) {
    return getTriangleType(side1, side2, side3);
  } else {
    return 'invalid';
  }
}

function isValid(shortest, middle, longest) {
  return shortest > 0 && (shortest + middle > longest);
}

function getTriangleType(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    return 'equilateral';
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
console.log(triangle(3, 3, 1));        // "isosceles"
