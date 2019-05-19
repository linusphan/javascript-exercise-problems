// problem 1
function objectHasProperty(object, string) {
  for (var property in object) {
    if (property === string) return true;
  }

  return false;
}

// another solution
function objectHasProperty(object, propertyName) {
  var keys = Object.keys(object);
  return keys.indexOf(propertyName) !== -1;
}

// var pets = {
//   cat: 'Simon',
//   dog: 'Dwarf',
//   mice: null,
// };

// console.log(objectHasProperty(pets, 'dog')); // true
// console.log(objectHasProperty(pets, 'lizard')); // false
// console.log(objectHasProperty(pets, 'mice')); // true

// problem 2
function incrementProperty(object, propertyName) {
  var keys = Object.keys(object);
  if (keys.indexOf(propertyName) !== -1) {
    return ++object[propertyName];
  } else {
    return object[propertyName] = 1;
  }
}

// another solution
function incrementProperty(object, propertyName) {
  if (object[propertyName]) {
    object[propertyName] += 1;
  } else {
    object[propertyName] = 1;
  }

  return object[propertyName];
}

// var wins = {
//   steve: 3,
//   susie: 4,
// };

// console.log(incrementProperty(wins, 'susie'));   // 5
// console.log(wins);                               // { steve: 3, susie: 5 }
// console.log(incrementProperty(wins, 'lucy'));    // 1
// console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }

// problem 3
function copyProperties(object1, object2) {
  for (var property in object1) {
    object2[property] = object1[property];
  }

  return Object.keys(object1).length;
}

// another solution
function copyProperties(source, destination) {
  var count = 0;
  var property;
  for (property in source) {
    destination[property] = source[property];
    count += 1;
  }

  return count;
}

// var hal = {
//   model: 9000,
//   enabled: true,
// };

// var sal = {};
// console.log(copyProperties(hal, sal));  // 2
// console.log(sal);                       // { model: 9000, enabled: true }

// problem 4
function wordCount(string) {
  var words = string.split(' ');
  var wordsObject = {};
  words.forEach(function(element) {
    if (wordsObject[element] === undefined) {
      wordsObject[element] = 1;
    } else {
      wordsObject[element]++;
    }
  });

  return wordsObject;
}

// another solution
function wordCount(text) {
  var count = {};
  var words = text.split(' ');
  var word;
  var i;

  for (i = 0; i < words.length; i += 1) {
    word = words[i];
    if (!count[word]) {
      count[word] = 0;
    }

    count[word] += 1;
  }

  return count;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }