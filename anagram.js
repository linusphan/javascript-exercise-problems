function charCount(word) {
  return word.split('').reduce(function (acc, char) {
    acc[char] = acc[char] || 0;
    acc[char] += 1;

    return acc;
  }, {});
}


function anagram(word, list) {
  var count1 = charCount(word);

  return list.filter(function(listWord) {
    var count2 = charCount(listWord);
    return isEqual(count1, count2); // see below for isEqual method
  });
}

// another solution
function anagram(word, list) {
  return list.filter(function (candidate) {
    return areAnagrams(candidate, word);
  });
}

function areAnagrams(source, target) {
  var sourceLetters = source.split('').sort();
  var targetLetters = target.split('').sort();
  return compareArrays(sourceLetters, targetLetters);
}

function compareArrays(array1, array2) {
  return String(array1) === String(array2);
}

// another compareArrays function implementation
function compareArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  return array1.every(function (letter, index) {
    return letter === array2[index];
  });
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]

// #####################################################
// ############ isEqual Helper Method Start ############
function differentType(value, other) {
  var valueType = Object.prototype.toString.call(value);
  var otherType = Object.prototype.toString.call(other);

  return valueType !== otherType;
}

function notArrayOrObject(value) {
  var type = Object.prototype.toString.call(value);

  return ['[object Array]', '[object Object]'].indexOf(type) < 0;
}

function differentLengths(value, other) {
  var isArray = Array.isArray(value);
  var valueLen = isArray ? value.length : Object.keys(value).length;
  var otherLen = isArray ? other.length : Object.keys(other).length;

  return valueLen !== otherLen;
}

function compare(item1, item2) {
  var itemType = Object.prototype.toString.call(item1);
  var result;

  if (!notArrayOrObject(item1, item2)) {
    result = isEqual(item1, item2);
  } else {
    result = !differentType(item1, item2);

    if (itemType === '[object Function]') {
      result = item1.toString() === item2.toString();
    } else {
      result = item1 === item2;
    }
  }

  return result;
};

function isEqual(value, other) {
  if (differentType(value, other) ||
    notArrayOrObject(value) ||
    differentLengths(value, other)) return false;

  if (Array.isArray(value)) {
    for (var i = 0; i < value.length; i += 1) {
      if (!compare(value[i], other[i])) return false;
    }
  } else {
    for (var key in value) {
      if (value.hasOwnProperty(key)) {
        if (!compare(value[key], other[key])) return false;
      }
    }
  }

  return true;
};
// ############ isEqual Helper Method End ###########
