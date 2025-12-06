class Engine{
    start(){
        console.log("Engine Started")
    }
}

class Car{
    constructor(){
        this.engine = new Engine();
    }
    start(){
        this.engine.start()
    }
}
const car1 = new Car();
const car2 = new Car();
car1.start();
