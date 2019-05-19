function greetings(nameComponents, personDetails) {
  var fullName = nameComponents.join(' ');
  var title = personDetails.title;
  var occupation = personDetails.occupation;
  console.log(`Hello, ${fullName}! Nice to have a ${title} ${occupation} around.`);
}

// another solution
function greetings(name, status) {
  var nameGreet = 'Hello, ' + name.join(' ') + '!';
  var statusGreet = 'Nice to have a ' + status.title + ' ' + status.occupation + ' around.';

  console.log(nameGreet + ' ' + statusGreet);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.
