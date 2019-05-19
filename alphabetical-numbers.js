function alphabeticNumberSort(numbers) {
  var integers = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'ninteen'
  ];

  return numbers.sort(function (num1, num2) {
    var num1Word = integers[num1];
    var num2Word = integers[num2];

    if (num1Word < num2Word) {
      return -1;
    } else if (num1Word > num2Word) {
      return 1;
    } else {
      return 0;
    }
  });
}

// another solution
function wordSort(num1, num2) {
  var NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
                      'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
                      'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
    return 1;
  } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
    return -1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(array) {
  return array.sort(wordSort);
}

// alphabeticNumberSort(
//    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);