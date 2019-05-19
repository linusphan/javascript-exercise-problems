/*
mental model
  - apply array abstractions

algorithm
  - iterate through tokens
  - perform operation depending on token
    - if else if else statement
*/

function minilang(program) {
  var stack = [];
  var register = 0;

  program.split(' ').forEach(function (token) {
    if (!isNaN(Number(token))) {
      register = Number(token);
    } else if (token === 'PUSH') {
      stack.push(register);
    } else if (token === 'ADD') {
      register = register + stack.pop();
    } else if (token === 'SUB') {
      register = register - stack.pop();
    } else if (token === 'MULT') {
      register = register * stack.pop();
    } else if (token === 'DIV') {
      register = Math.round(register / stack.pop());
    } else if (token === 'MOD') {
      register = Math.round(register % stack.pop());
    } else if (token === 'POP') {
      register = stack.pop();
    } else if (token === 'PRINT') {
      console.log(register);
    } else {
      console.log(`Unknown token: ${token}`);
    }
  });
}

// another solution
function minilang(program) {
  var register = 0;
  var stack = [];

  program.split(' ').forEach(function (token) {
    switch (token) {
      case 'ADD':
        register += stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'MOD':
        register = Math.floor(register % stack.pop());
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'PUSH':
        stack.push(register);
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
      default:
        register = parseInt(token, 10);
    }
  });
}

// error handling implementation
function EmptyStackError(message) {
  this.name = 'EmptyStackError';
  this.message = message;
}

function InvalidTokenError(message) {
  this.name = 'InvalidTokenError';
  this.message = message;
}

EmptyStackError.prototype = new Error();
InvalidTokenError.prototype = new Error();

function minilang(program) {
  var stack = [];
  var register = 0;

  try {
    program.split(' ').forEach(function (token) {
      if (
        ['ADD', 'SUB', 'MULT', 'DIV', 'MOD', 'POP'].includes(token) &&
        stack.length === 0
      ) {
        throw new EmptyStackError('Stack is empty!');
      }

      if (!isNaN(Number(token))) {
        register = Number(token);
      } else if (token === 'PUSH') {
        stack.push(register);
      } else if (token === 'ADD') {
        register += stack.pop();
      } else if (token === 'SUB') {
        register -= stack.pop();
      } else if (token === 'MULT') {
        register *= stack.pop();
      } else if (token === 'DIV') {
        register = Math.round(register / stack.pop());
      } else if (token === 'MOD') {
        register = Math.round(register % stack.pop());
      } else if (token === 'POP') {
        register = stack.pop();
      } else if (token === 'PRINT') {
        console.log(register);
      } else {
        throw new InvalidTokenError(`Invalid token, ${token}`);
      }
    });
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
}

// Test cases

minilang('PRINT');
minilang('5 PUSH 3 MULT PRINT');
minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
minilang('5 PUSH POP PRINT');
minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
minilang('3 PUSH PUSH 7 DIV MULT PRINT');
minilang('4 PUSH PUSH 7 MOD MULT PRINT');
minilang('-3 PUSH 5 SUB PRINT');
minilang('6 PUSH');
minilang('ADD');
minilang('DoSomething');
