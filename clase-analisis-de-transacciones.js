// Exercise: Transaction Analysis

const transaction = [
    {id: 1, description: 'Grocery Shopping', amount: -50},
    {id: 2, description: 'Gas Station', amount: -30},
    {id: 3, description: 'Deposit', amount: 100},
    {id: 4, description: 'Dinner', amount: -60},
    {id: 5, description: 'Deposit', amount: 2000},
    {id: 6, description: 'Car Payment', amount: 4900}    
]

// 1. Calcule total Balance

const totalBalance = transaction.reduce((acc, transaction) => acc + transaction.amount, 0);
console.log('Total Balance: ', totalBalance);

// 2. Find the Largest Transaction (Income or Expense)

const largestTransaction = transaction.reduce((maxTransaction, transaction) => {
    return  Math.abs(transaction.amount) > Math.abs(maxTransaction.amount) ? transaction : maxTransaction;
} , transaction[0]);

console.log('Largest Transaction: ', largestTransaction);

// 3. Filter Purchase Transactions

const purchaseTransactions = transaction.filter((transaction) => transaction.amount < 0);
console.log('Purchase Transactions: ', purchaseTransactions);

// 4. Find a transaction by description

const specificTransaction = transaction.find((transaction) => transaction.description === 'Dinner')
console.log('Specific Transaction: ', specificTransaction);

// 5. Find the index of a transaction by Amount

const indexTransaction = transaction.findIndex((transaction) => transaction.amount === -60);
console.log('Index of Transaction: ', indexTransaction);

// 6. Update Transaction description
transaction.forEach(transaction => {	
    if (transaction.amount < 0) {
        transaction.description = `Expense: ${transaction.description}`
    } else {
        transaction.description = `Income: ${transaction.description}`
    }
}
)
console.log('Updated Transactions: ', transaction);