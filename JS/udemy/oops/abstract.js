class Car{
    ignite(){
        console.log("Engine Ignited")
        console.log("Piston loaded")
    }
    start(){
        console.log(this.ignite)
        // this.ignite();
        return "Car started"
    }
}
let toyota = new Car();

console.log(toyota.start())
