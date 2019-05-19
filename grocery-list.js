function buyFruit(list) {
  return list.map(function (item) {
    var arr = [];
    var i;

    for (i = 0; i < item[1]; i += 1) {
      arr.push(item[0]);
    }

    return arr;
  }).reduce(function (result, array) {
    return result.concat(array);
  });
}

// another solution
function buyFruit(fruitsList) {
  return fruitsList.map(function (fruit) {
    return repeat(fruit);
  }).reduce(function (groceryList, fruit) {
    return groceryList.concat(fruit);
  });
}

function repeat(fruit) {
  var result = [];
  var i;

  for (i = 0; i < fruit[1]; i += 1) {
    result.push(fruit[0]);
  }

  return result;
}

// buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// // returns ["apple", "apple", "apple", "orange", "banana", "banana"]
