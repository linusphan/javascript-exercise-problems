// Problem 1

function getDefiningObject(object, propKey) {
  while (!object.hasOwnProperty(propKey)) {
    object = Object.getPrototypeOf(object);

    if (object === null) break;
  }

  return object ? object : null;
}

// another solution
function getDefiningObject(object, propKey) {
  while (object && !object.hasOwnProperty(propKey)) {
    object = Object.getPrototypeOf(object);
  }

  return object;
}

// Problem 2

function shallowCopy(object) {
  var copy = Object.create(Object.getPrototypeOf(object));

  return Object.assign(copy, object);
}

// another solution
function shallowCopy(object) {
  var copy = Object.create(Object.getPrototypeOf(object));

  Object.getOwnPropertyNames(object).forEach(function (prop) {
    copy[prop] = object[prop];
  });

  return copy;
}

// var foo = {
//   a: 1,
//   b: 2,
// };

// var bar = Object.create(foo);
// bar.c = 3;
// bar.say = function() {
//   console.log('c is ' + this.c);
// };

// var baz = shallowCopy(bar);
// console.log(baz.a);       // 1
// baz.say();                // "c is 3"
// console.log(baz.hasOwnProperty('a'));  //false
// console.log(baz.hasOwnProperty('b'));  //false

// Problem 3

function extend(destination) {
  var sourceObjects = Array.from(arguments).slice(1);

  return Object.assign(destination, ...sourceObjects);
}

// another solution
function extend(destination) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var prop in source) {
      if (Object.prototype.hasOwnProperty.call(source, prop)) {
        destination[prop] = source[prop];
      }
    }
  }

  return destination;
}

// another solution
function extend(destination) {
  for (var i = 1; i < arguments.length; i += 1) {
    var source = arguments[i];
    Object.getOwnPropertyNames(source).forEach(function (prop) {
      destination[prop] = source[prop];
    });
  }

  return destination;
}

var foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

var joe = {
  name: 'Joe'
};

var funcs = {
  sayHello: function() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye: function() {
    console.log('Goodbye, ' + this.name);
  },
};

var object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // 1
object.sayHello();                // "Hello, Joe"
