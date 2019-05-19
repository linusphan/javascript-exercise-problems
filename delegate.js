function delegate(obj, method, ...args) {
  return function() {
    return obj[method](args);
  };
}

// another solution
function delegate(context, methodName) {
  var args = Array.prototype.slice.call(arguments, 2);

  return function () {
    return context[methodName].apply(context, args);
  }
}

var foo = {
  name: 'test',
  bar: function(greeting) {
    console.log(greeting + ' ' + this.name);
  },
};

var baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = function() { console.log('changed'); };

baz.qux();          // logs 'changed'
