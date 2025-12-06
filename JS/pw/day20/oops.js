const car =  {
    brand: "Toyota",
    drive(){
        console.log(`${this.brand} is starting`)
    }
}
car.drive()

class Car{
    #price;
    constructor(brand,year){
        this.brand = brand
        this.year = year;
        this.price = 5000;

    }
    drive(){
        console.log(`Driving ${this.brand}`)
        console.log(`${this.year}`)
    }
}

const toyota = new Car("toyota")
toyota.drive()
console.log(toyota)