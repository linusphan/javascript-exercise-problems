for (var i = 2; i <= 99; i++) {
  if (i % 2 === 0) console.log(i);
}

// another solution
var i;
for (i = 1; i < 100; i += 1) {
  if (i % 2 === 1) {
    continue;
  }

  console.log(i);
}