// function Human(fname, lname){
//     this.firstName = fname;
//     this.lastName = lname;
// }
// const Mrx = new Human("Mr.", "X");
// const Rock = Human("The", "Rock")

// console.log(Mrx);
// console.log(Rock);

class Car {
    startEngine() {
        this.#prepareEngine(); // private method
        console.log("Engine started!");
    }

    // Private method (hidden from outside)
    #prepareEngine() {
        console.log("Checking oil, fuel, and systems...");
    }
}

let audi = new Car();
audi.startEngine();
// Output:
// Checking oil, fuel, and systems...
// Engine started!

// audi.#prepareEngine(); ❌ Error: private method