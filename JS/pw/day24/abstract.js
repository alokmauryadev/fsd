class Car{
    #engineOn = false;
    start(){
        this.#checkEngine();
        this.#engineOn = true;
        console.log("Car Started")
    }

    // abstract intetioally private functionality
    #checkEngine(){
        console.log("Engine Ok")
    }
}

let c1 = new Car();
c1.start()

