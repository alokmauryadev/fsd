// let person = {
//     name: "alok"
// }

// let student = {
//     class: "9th"
// }

// student.__proto__ = person;

class Animal{
    constructor(name){
        this.name = name;
        console.log("Object is created...")
    }
    eats(){
        console.log("Mai khata hoon")
    }
    jupms(){
        console.log("Jumps")
    }
}

let rabbit = new Animal("bunny");

class Lion extends Animal{
        constructor(){
            super(name)
    }
    roar(){
        console.log("I can roar")
    }
}

let lion2 = new Animal("shera")