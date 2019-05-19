function createGreeter(name) {
  return {
    name,
    morning: 'Good morning',
    afternoon: 'Good afternoon',
    evening: 'Good evening',

    greet(timeOfDay) {
      var msg;

      switch (timeOfDay) {
        case 'morning':
          msg = `${this.morning}, ${this.name}.`;
          break;
        case 'afternoon':
          msg = `${this.afternoon}, ${this.name}.`;
          break;
        case 'evening':
          msg = `${this.evening}, ${this.name}.`;
          break;
      }

      console.log(msg);
    },
  };
}

var helloLinus = createGreeter('Linus');
helloLinus.greet('morning');
