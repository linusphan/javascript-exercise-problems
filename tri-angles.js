function validTriangle(angles) {
  return angles.reduce((acc, angle) => acc + angle) === 180 &&
    angles.every((angle) => angle > 0);
}

function count(element, array) {
  var count = 0;

  for (var i = 0; i < array.length; i += 1) {
    if (array[i] === element) {
      count += 1;
    }
  }

   return count;
}

function triangle(angle1, angle2, angle3) {
  var angles = [...arguments];
  if (!validTriangle(angles)) return 'invalid';

  if (count(90, angles) === 1) {
    return 'right';
  } else if (angles.every(angle => angle < 90)) {
    return 'acute';
  } else {
    return 'obtuse';
  }
}

// another solution
function triangle(angle1, angle2, angle3) {
  var angles = [angle1, angle2, angle3];
  if (isValid(angles)) {
    return getTriangleType(angles);
  } else {
    return 'invalid';
  }
}

function isValid(angles) {
  var totalAngle = angles.reduce(function (total, angle) {
    return total + angle;
  });

  var allNonZero = angles.every(function (angle) {
    return angle > 0;
  });

  return totalAngle === 180 && allNonZero;
}

function getTriangleType(angles) {
  if (angles.some(testRightTriangle)) {
    return 'right';
  } else if (angles.every(testAcuteTriangle)) {
    return 'acute';
  } else {
    return 'obtuse';
  }
}

function testRightTriangle(angle) {
  return angle === 90;
}

function testAcuteTriangle(angle) {
  return angle < 90;
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"