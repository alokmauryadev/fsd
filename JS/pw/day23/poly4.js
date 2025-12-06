// Standard Shipping

class Shipping{
    calculate(){
        return 0;
    }
}

class StandardShipping extends Shipping{
    calculate(){
        return 50;
    }
}

class ExpressShipping extends Shipping{
    calculate(){
        return 150;
    }
}

let stdShipping = new StandardShipping();
console.log(stdShipping.calculate());
let norShip = new Shipping();
let expShip = new ExpressShipping();
console.log(expShip.calculate())
console.log(norShip.calculate())