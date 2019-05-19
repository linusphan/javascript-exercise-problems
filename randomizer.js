function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...callbacks) {
  var secondsCount = 0;
  var intervalId;
  var DELAY_LIMIT = 2000 * callbacks.length;
  
  intervalId = setInterval(function () {
    secondsCount += 1;
    console.log(secondsCount);
    if (secondsCount * 1000 === DELAY_LIMIT) clearInterval(intervalId);
  }, 1000);

  for (var idx = 0; idx < callbacks.length; idx += 1) {
    var delay = Math.floor(Math.random() * DELAY_LIMIT);
    setTimeout(function (idx) {
      callbacks[idx]();
    }, delay, idx);
  }
}

// another solution
function randomizer() {
  var callbacks = Array.prototype.slice.call(arguments);
  var secondsEnd = 2 * callbacks.length;
  var secondsElapsed = 0;
  var timeLogger = setInterval(function () {
    secondsElapsed += 1;
    console.log(secondsElapsed);

    if (secondsElapsed >= secondsEnd) {
      clearInterval(timeLogger);
    }
  }, 1000);

  callbacks.forEach(function (callback) {
    var executeTime = Math.floor(Math.random() * secondsEnd * 1000);
    setTimeout(callback, executeTime);
  });
}

randomizer(callback1, callback2, callback3);
