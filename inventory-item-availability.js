/*
input
  inventoryItem (integer)
  transactions (array of objects)

output
  returns an array of transactions for specified item
*/

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(function (transaction) {
    return inventoryItem === transaction.id;
  });
}

function totalTransactions(sum, transaction) {
  return sum + transaction.quantity;
}

function isItemAvailable(inventoryItem, transactions) {
  var inventory = transactionsFor(inventoryItem, transactions);
  var inventoryIn = inventory.filter(function (transaction) {
    return transaction.movement === 'in';
  });
  var inventoryOut = inventory.filter(function (transaction) {
    return transaction.movement === 'out';
  })

  return inventoryIn.reduce(totalTransactions, 0) - inventoryOut.reduce(totalTransactions, 0) > 0;
}

// another solution
function isItemAvailable(item, transactions) {
  var quantity = transactionsFor(item, transactions).reduce(function (sum, transaction) {
    if (transaction.movement === 'in') {
      return sum + transaction.quantity;
    } else {
      return sum - transaction.quantity;
    }
  }, 0);

  return quantity > 0;
}

var transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 15 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
