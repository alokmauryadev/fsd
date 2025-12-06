class Car {
    #price;
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
        this.#price = 5000;
    }

    getPrice(){
        return this;
    }

    
}

let toyota = new Car("toyota", "2025");
// console.log(toyota.#price);
let obj = toyota.getPrice();

console.log(obj)
for (const key in obj) {
 const element = obj[key];
 console.log(element)
}
