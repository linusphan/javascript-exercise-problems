const totalArea = function totalArea(rectangles) {
  const areas = rectangles.map(rectangle => rectangle[0] * rectangle[1]);
  const sum = (sum, area) => sum + area;

  return areas.reduce(sum);
};

// another totalArea solution
// function totalArea(rectangles) {
//   var areas = rectangles.map(function (rectangle) {
//     return rectangle[0] * rectangle[1];
//   });

//   return areas.reduce(function (sum, area) {
//     return sum + area;
//   });
// }

const totalSquareArea = function totalSquareArea(rectangles) {
  const squares = rectangles.filter(rectangle => rectangle[0] === rectangle[1]);

  return totalArea(squares);
};

// another totalSquareArea solution
// function totalSquareArea(rectangles) {
//   var squares = rectangles.filter(function (rectangle) {
//     return rectangle[0] === rectangle[1]
//   });

//   var areas = squares.map(function (square) {
//     return square[0] * square[1];
//   });

//   return areas.reduce(function (sum, area) {
//     return sum + area;
//   });
// }

// Test Cases
var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles)); // 141
console.log(totalSquareArea(rectangles)); // 121
