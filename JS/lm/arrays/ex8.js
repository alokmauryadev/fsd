const sales = [
  { category: 'Electronics', saleAmount: 499.99 },
  { category: 'Books', saleAmount: 29.95 },
  { category: 'Groceries', saleAmount: 75.20 },
  { category: 'Electronics', saleAmount: 89.50 },
  { category: 'Books', saleAmount: 15.00 },
  { category: 'Apparel', saleAmount: 120.00 },
  { category: 'Electronics', saleAmount: 1200.00 },
];
function summary(salesArray){
    const totalSummary = salesArray.reduce((v,p)=>{

        const {category, saleAmount} = p;
        if(v[category]){
            v[category] += saleAmount;
        }
        else{
            v[category] = saleAmount
        }
        return v
    },{})
    return totalSummary
}
const salesSummary = summary(sales);
console.log(salesSummary);

// function summarizeSales(salesArray) {
//   const categories = [...new Set(salesArray.map(s => s.category))];
//   const totalSummary = categories.map(cat => {
//     const items = salesArray.filter(e => e.category === cat);
//     const total = items.reduce((sum, p) => sum + p.saleAmount, 0);
//     return `${cat}: ${total.toFixed(2)}`;
//   });
//   return totalSummary;
// }

// console.log(summarizeSales(sales))
