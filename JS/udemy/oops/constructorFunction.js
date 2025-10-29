function greet(name){
    console.log("Hello, ", name)
}

greet("Alok")

function Person(name, age){
    this.name = name;
    this.age = age;
}

function Car(make, model){
    this.make = make;
    this.model = model;
}

let myCar = new Car("Toyota", "Camry")
console.log(myCar)

// let myNewCar = new Car("Tata", "Safari")
// console.log(myNewCar)

function Tea(type, flavor){
    this.type = type;
    this.flavor = flavor;
    this.describe = function(){
        return `this is a cup of ${this.type} and it's flavor is ${this.flavor}`
    }

}
function Animal(species){
    this.species = species;
}
let lemonTea = new Tea("lemon tea","sour")
console.log(lemonTea.describe())


Animal.prototype.sound = function(){
    return `${this.species} makes as sound`
}
let dog = new Animal("Dog")
let cat = new Animal("Cat")
console.log(dog.sound())
console.log(cat.sound())
