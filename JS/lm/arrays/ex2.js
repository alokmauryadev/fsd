const inventory = [
    { id: 1, item: 'Smart TV', price: 899.99, stock: 12 },
    { id: 2, item: 'Bluetooth Speaker', price: 45.50, stock: 35 },
    { id: 3, item: 'Laptop Pro', price: 1499.00, stock: 7 },
    { id: 4, item: 'Webcam Standard', price: 32.75, stock: 50 },
    { id: 5, item: 'Gaming Headset', price: 125.00, stock: 20 },
];

const  premiumItems = inventory.filter(v => v.price>=500)
console.log(premiumItems)

inventory.push({
    id:6,
    item:"USB Cable",
    price:5.99,
    stock:100
})
console.log(inventory)

let sortedInventory = inventory.toSorted((a,b) => a.item.localeCompare(b.item))
console.log(sortedInventory)