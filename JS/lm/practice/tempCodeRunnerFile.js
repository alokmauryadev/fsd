const inventory = [
  { id: 1, name: "Laptop", stock: 45, price: 999.99, restockLevel: 50 },
  { id: 2, name: "Mouse", stock: 120, price: 25.00, restockLevel: 100 },
  { id: 3, name: "Keyboard", stock: 75, price: 49.99, restockLevel: 75 },
  { id: 4, name: "Monitor", stock: 22, price: 175.00, restockLevel: 30 },
  { id: 5, name: "Webcam", stock: 8, price: 55.00, restockLevel: 20 },
];

const group = {totalRestockCost:0,itemsToRestock:[]}
for (const items of inventory){

    if(items.stock<items.restockLevel){
        grouped.itemsToRestock.push(items);
    }
}
