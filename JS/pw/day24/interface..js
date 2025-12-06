// class Payment{
//      constructor(accountNumber, amount,name) {
//         this.accountNumber = accountNumber;
//         this.amount = amount;
//         this.name = name;
//      }
//     sendMoney(){

//      }
//     requestMoney(){

//     }
// }

class PaymentInterface{
    constructor(){
        this.constructor = PaymentInterface;
    }
    processPayment(amount){
        throw "Not Implemented"
    }
    refund(id){
        throw "Not implemented"
    }
}

class Razorpay extends PaymentInterface{
    processPayment(amount){
        console.log("Razorp pay:",amount)
    }
    refund(id){
        console.log("Razorpay refund",id);
    }
}

// const rp = new Razorpay()
const p1 = new PaymentInterface();
console.log(p1.constructor)
// rp.refund(10)