class User{
    constructor(name){
        this.name = name;
    }
    // #This is a public property and greet is a public function

    greet(){
        console.log("Hello",this.name)
    }
}

let u1 = new User("Alok")
// u1.greet()

class Account{
    #pin; // declaring a private variable
    #balance; // declaring a private variable
    constructor(pin,balance){
        this.#pin = pin;
        this.#balance = balance;
    }
    #getBalance(){
        console.log("Inside the private property")
        console.log(this.#balance)
    }
    sendBalance(pin){
        if(pin===this.#pin){
        this.#getBalance()}

        else{
            return {status:"Invalid Authentication Detail", message: "Please try again!"}
        }
    }
}

const a1 = new Account(1234,1000)
console.log(a1.sendBalance(1234))