// name property added to make objects easier to identify
// var foo = {
//   name: 'foo',

//   ancestors() {
//     Object.prototype.name = 'Object.prototype';

//     var result = [];
//     var obj = this;
//     var currPrototype = Object.getPrototypeOf(obj);

//     while (currPrototype !== null) {
//       result.push(currPrototype.name);
//       obj = currPrototype;
//       currPrototype = Object.getPrototypeOf(obj);
//     }

//     return result;
//   },
// };

// another solution
var foo = {name: 'foo'};

Object.prototype.ancestors = function ancestors() {
  var ancestor = Object.getPrototypeOf(this);

  if (Object.prototype.hasOwnProperty.call(ancestor, 'name')) {
    return [ancestor.name].concat(ancestor.ancestors());
  }

  return ['Object.prototype'];
};

var bar = Object.create(foo);
bar.name = 'bar';
var baz = Object.create(bar);
baz.name = 'baz';
var qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']
