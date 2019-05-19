var me = {
  firstName: 'a',
  lastName: 'a',
};

var friend = {
  firstName: 'b',
  lastName: 'b',
};

var mother = {
  firstName: 'c',
  lastName: 'c',
};

var father = {
  firstName: 'd',
  lastName: 'd',
};

var people = {
  collection: [me, friend, mother, father],
  fullName: function (person) {
    console.log(person.firstName + ' ' + person.lastName);
  },

  rollCall: function () {
    this.collection.forEach(this.fullName);
  },

  add: function (person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    this.collection.push(person);
  },

  isInvalidPerson: function (person) {
    return typeof person.firstName !== 'string' && typeof person.lastName !== 'string';
  },

  getIndex: function (person) {
    var index = -1;
    this.collection.forEach(function (comparator, i) {
      if (
        comparator.firstName === person.firstName
        && comparator.lastName === person.lastName
      ) {
        index = i;
      }
    });

    return index;
  },

  get: function (person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    return this.collection[this.getIndex(person)];
  },

  remove: function (person) {
    var index;
    if (this.isInvalidPerson(person)) {
      return;
    }

    index = this.getIndex(person);
    if (index === -1) {
      return;
    }

    this.collection.splice(index, 1);
  },

  update: function (person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    var existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },
};

people.rollCall();
