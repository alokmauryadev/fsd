/**
 * Interface: IPayment
 * Defines the contract that all Payment types must follow.
 */
class IPayment {
    constructor() {
        if (this.constructor === IPayment) {
            throw new Error("Interface 'IPayment' cannot be instantiated directly.");
        }
    }

    sendMoney() {
        throw new Error("Method 'sendMoney()' must be implemented.");
    }

    requestMoney() {
        throw new Error("Method 'requestMoney()' must be implemented.");
    }
}

/**
 * Implementation: UPIPayment
 * Concrete class that adheres to the IPayment interface.
 */
class UPIPayment extends IPayment {
    constructor(accountNumber, amount, name) {
        super(); // Call the parent constructor to check instantiation logic
        this.accountNumber = accountNumber;
        this.amount = amount;
        this.name = name;
    }

    sendMoney() {
        console.log(`Sending ${this.amount} to ${this.name} via UPI (${this.accountNumber})`);
        // Logic specific to UPI
    }

    requestMoney() {
        console.log(`Requesting ${this.amount} from ${this.name} via UPI`);
    }
}

// --- Usage & Tests ---

// 1. Correct Usage
const myPayment = new UPIPayment("123456", 500, "Alice");
myPayment.sendMoney(); 
// Output: Sending 500 to Alice via UPI (123456)


// 2. ERROR: Trying to use the Interface directly
try {
    const rawInterface = new IPayment(); 
} catch (e) {
    console.error("Error 1:", e.message); 
    // Output: Interface 'IPayment' cannot be instantiated directly.
}


// 3. ERROR: Missing Implementation
class BadPayment extends IPayment {
    // Forgot to implement sendMoney()
}

const bad = new BadPayment();
try {
    bad.sendMoney();
} catch (e) {
    console.error("Error 2:", e.message);
    // Output: Method 'sendMoney()' must be implemented.
}