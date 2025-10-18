let groceryList = [];

class Item {
    constructor(name, quantity, purchased, costPerUnit) {
            this.name = name,
            this.quantity = quantity,
            this.purchased = purchased,
            this.costPerUnit = costPerUnit
    };
}

function addItem(name, quantity, purchased, costPerUnit) {
    return {                  // Return an object with the desired structure
        itemName: name,
        quantity: quantity,
        purchased: purchased,
        costPerUnit: costPerUnit
    };
}
const tomato = new Item("tomato", 20, true, 30)
const biscuit = addItem("britania",20,true,25)
const potato = addItem("potato","20",false,23)
const shampoo = addItem("shampoo",22,false,25)

groceryList.push(tomato)
groceryList.push(potato)
groceryList.push(shampoo)
console.log(groceryList)
// groceryList[1] = null;
console.log(groceryList)
shampoo.purchased = true;
console.log(groceryList)
console.log("Price " + groceryList[0].quantity*groceryList[0].costPerUnit)
let totalPrice = groceryList.reduce((sum,item)=>{
    return sum + (item.quantity * item.costPerUnit);
},0)
// for (let i = 0; i < groceryList.length; i++) {
//     let price = groceryList[i].quantity*groceryList[i].costPerUnit;
//     totalPrice += price;
// }
console.log(totalPrice)