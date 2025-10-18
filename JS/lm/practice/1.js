const inventory = [
    { name: "Laptop Pro", category: "Electronics", price: 1200, stock: 15 },
    { name: "T-Shirt Cotton", category: "Apparel", price: 35, stock: 50 },
    { name: "Coffee Maker X", category: "Appliances", price: 85, stock: 0 },
    { name: "Smart Watch Z", category: "Electronics", price: 250, stock: 20 },
    { name: "Jeans Slim Fit", category: "Apparel", price: 70, stock: 5 },
    { name: "Tablet Mini", category: "Electronics", price: 400, stock: 0 }
];

const totalSale = inventory.reduce((s,e)=> s + (e.price*e.stock),0)
console.log(`Total Sale: ${totalSale}`)
function reorderList(inventory){
    const list = [inventory.filter((v)=>v.stock===0?true:v.stock<=5?true:false).map(e=>e.name)]
    console.log(list)
}
reorderList(inventory)