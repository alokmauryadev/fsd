function Character(name,power){
    this.name = name;
    this.power = power;
}

Character.prototype.attack = ()=>{
    return `${this.name} attacks with power ${this.power}`
}

let warrior = new Character("warrior",400)

let warrioratck = warrior.attack;
console.log(warrioratck())

let mage = new Character("mage","400")
// console.log(warrior.attack())
console.log(mage)