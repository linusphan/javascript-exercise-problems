/*
var password = 'password';
var attempts = 3;
var message = 'You have been denied access.';
var guess;

while (attempts > 0) {
  guess = prompt('What is the password:');
  if (guess === password) {
    message = 'You have successfully logged in.';
    break;
  } else {
    attempts -= 1;
  }
}

console.log(message);


// alternate solution
var password = 'password';
var failedAttempts = 0;
var guess;

while (true) {
  guess = prompt('What is the password:');
  
  if (guess === password) {
    console.log('You have successfully logged in.');
    break;
  }
  
  failedAttempts += 1;
  
  if (failedAttempts === 3) {
    console.log('You have been denied access.');
    break;
  }
}
*/

// alternate solution
var password = 'password';
var failedAttempts = 0;
var guess;

do {
  guess = prompt('What is the password:');
  
  if (guess === password) {
    break;
  }
  
  failedAttempts += 1;
} while (failedAttempts < 3);

// using failedAttempts count to determine which message we should log
if (failedAttempts === 3) {
  console.log('You have been denied access.');
} else {
  console.log('You have successfully logged in.');
}
