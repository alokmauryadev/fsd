/**
 * A list of raw transaction data.
 */
const transactions = [
  { id: 1, amount: 50.0, category: "Groceries", description: "Grocery Store" },
  { id: 2, amount: 25.5, category: "Utilities", description: "Electricity Bill" },
  { id: 3, amount: 12.75, category: "Groceries", description: "Farmer's Market" },
  { id: 4, amount: 150.0, category: "Entertainment", description: "Concert Tickets" },
  { id: 5, amount: 30.0, description: "Coffee Shop" }, // Uncategorized
  { id: 6, amount: 75.25, category: "Utilities", description: "Internet Bill" },
  { id: 7, amount: 45.5, category: "Groceries", description: "Supermarket" },
  { id: 8, amount: 200.0, category: null, description: "ATM Withdrawal"}, // Uncategorized
];

// let group={
//     categories: {
//         "totalamount":0,
//         "transactions":[],
//     },
// }

// transactions.map((v)=>{
//    const {id,amount,category,description} = v;
//     group[categories]=v.category})
// console.log(group)
// // const GroupedData = {};

function groupTransactionsByCategory(transactionList) {

const grouped = {};

transactions.forEach((v) => {
  const cat = v.category || "Uncategorized";
  
  if (!grouped[cat]) {
    grouped[cat] = { totalAmount: 0, transactions: [] };
  }
  grouped[cat].transactions.push(v);
  grouped[cat].totalAmount += v.amount;
    
});
return grouped;
}


// --- Example Usage ---
const groupedData = groupTransactionsByCategory(transactions);
console.log(JSON.stringify(groupedData, null, 2));


/*
Expected Output:

{
  "Groceries": {
    "totalAmount": 108.25,
    "transactions": [
      { "id": 1, "amount": 50, "category": "Groceries", "description": "Grocery Store" },
      { "id": 3, "amount": 12.75, "category": "Groceries", "description": "Farmer's Market" },
      { "id": 7, "amount": 45.5, "category": "Groceries", "description": "Supermarket" }
    ]
  },
  "Utilities": {
    "totalAmount": 100.75,
    "transactions": [
      { "id": 2, "amount": 25.5, "category": "Utilities", "description": "Electricity Bill" },
      { "id": 6, "amount": 75.25, "category": "Utilities", "description": "Internet Bill" }
    ]
  },
  "Entertainment": {
    "totalAmount": 150,
    "transactions": [
      { "id": 4, "amount": 150, "category": "Entertainment", "description": "Concert Tickets" }
    ]
  },
  "uncategorized": {
    "totalAmount": 230,
    "transactions": [
      { "id": 5, "amount": 30, "description": "Coffee Shop" },
      { "id": 8, "amount": 200, "category": null, "description": "ATM Withdrawal" }
    ]
  }
}

*/
