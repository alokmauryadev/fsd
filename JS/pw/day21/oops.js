class Account {
    #pin = null;
    #balance = 0;
    #withdrawCount = 0; // 1. Initialize counter
    
    // 2. Define the limit as a constant (Avoid "Magic Numbers" in logic)
    #MAX_WITHDRAW_LIMIT = 3; 

    constructor(holderName) {
        this.holderName = holderName;
        this.#balance = 100;
        this.#pin = `${holderName}@1234`;
    }

    getBalance(pin) {
        if (pin !== this.#pin) return "Invalid PIN";
        return this.#balance;
    }

    deposit(amount) {
        this.#balance += amount;
        return true;
    }

    withdraw(amount, pin) {
        // Check 1: Security (Identity)
        if (pin !== this.#pin) {
            return {
                success: false,
                message: "Invalid PIN"
            };
        }

        // Check 2: Policy (Limit) - Fail Fast
        // We check this BEFORE checking balance to save processing
        if (this.#withdrawCount >= this.#MAX_WITHDRAW_LIMIT) {
            return {
                success: false,
                message: "Transaction Limit Exceeded",
                meta: {
                    attempts_made: this.#withdrawCount,
                    limit: this.#MAX_WITHDRAW_LIMIT
                }
            };
        }

        // Check 3: Logic (Balance)
        if (amount > this.#balance) {
            return {
                success: false,
                message: "Insufficient Balance",
                meta: {
                    current_balance: this.#balance
                }
            };
        }

        // Execution
        this.#balance -= amount;
        this.#withdrawCount++; // 3. Increment only on successful withdrawal

        return {
            success: true,
            message: "Withdrawal Successful",
            meta: {
                withdrawn: amount,
                remaining_balance: this.#balance,
                withdrawals_today: this.#withdrawCount
            }
        };
    }
}

// --- Testing the Logic ---

const a1 = new Account("Alok");

// 1. Valid Withdrawals
console.log("1:", a1.withdraw(10, "Alok@1234").success); // Count: 1
console.log("2:", a1.withdraw(10, "Alok@1234").success); // Count: 2
console.log("3:", a1.withdraw(10, "Alok@1234").success); // Count: 3

// 2. Fourth Attempt (Should Fail)
const attempt4 = a1.withdraw(10, "Alok@1234");
console.log("4:", attempt4.message); // "Transaction Limit Exceeded"

// 3. New Instance (Should be fresh)
const a2 = new Account("NewUser");
console.log("New User Attempt:", a2.withdraw(10, "NewUser@1234").success); // Should be true