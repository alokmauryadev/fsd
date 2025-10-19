function Character(name,power){
    this.name = name;
    this.power = power;
}

function Skills(name){
    Character.call(this,name,"8000")
}

Character.prototype.attack = function(){
    return `${this.name} attacks with power ${this.power}`
}
Skills.prototype = Object.create(Character.prototype)
Skills.prototype.constructor = Skills;

let windDash = new Skills("wind")

console.log(windDash.power)
console.log(windDash.attack())


let warrior = new Character("warrior",400)
// console.log(warrior.attack())
