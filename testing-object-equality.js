function objectsEqual(obj1, obj2) {
  var obj1Keys = Object.keys(obj1);
  var obj2Keys = Object.keys(obj2);
  var i;
  var prop;

  if (obj1Keys.length !== obj2Keys.length) return false;

  for (i = 0; i < obj1Keys.length; i += 1) {
    prop = obj1Keys[i];

    if (
      !obj2Keys.includes(prop)
      || obj1[prop] !== obj2[prop]
    ) {
      return false;
    }
  }

  return true;
}

// another solution
function objectsEqual(a, b) {
  if (a === b) {
    return true;
  }

  return (keysMatch(a, b) && valuesMatch(a, b));
}

function keysMatch(a, b) {
  var aKeys = Object.getOwnPropertyNames(a).sort();
  var bKeys = Object.getOwnPropertyNames(b).sort();

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  return aKeys.every(function (key, index) {
    return key === bKeys[index];
  });
}

function valuesMatch(a, b) {
  var aKeys = Object.getOwnPropertyNames(a).sort();

  return aKeys.every(function (key) {
    return a[key] === b[key];
  });
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}) === true);
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}) === false);
console.log(objectsEqual({}, {}) === true);
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}) === false);
