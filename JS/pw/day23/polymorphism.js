class Payment{
    pay(){
        console.log("Generic payment memthod")
    }
}

class Paytm extends Payment {
    pay(){
        console.log("Paytm payment method")
    }
}
class GooglePay extends Payment{
    pay(){
        console.log("Googlepay payment method")
    }
}

const ptm1 = new Paytm();
ptm1.pay()