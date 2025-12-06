class Account {
    #pin = null;
    #balance = 0;
    #withdrawCount = 0;
    #wrongPinAttempts = 0; // Security Tracker
    #isLocked = false;     // Security Flag
    #ledger = [];          // Audit Trail

    #MAX_WITHDRAW_LIMIT = 3;
    #MAX_WRONG_PIN = 3;
    static newdata = 10;

    constructor(holderName) {
        this.holderName = holderName;
        this.#balance = 100;
        this.#pin = `${holderName}@1234`;
        this.#logTransaction("OPENING_BALANCE", 100);
    }

    // Helper to log history
    #logTransaction(type, amount) {
        this.#ledger.push({
            type: type,
            amount: amount,
            date: new Date().toISOString(),
            balanceAfter: this.#balance
        });
    }

    deposit(amount) {
        // Enhancement 1: Input Sanitization
        if (amount <= 0) {
            console.error("Error: Deposit amount must be positive.");
            return false;
        }
        
        this.#balance += amount;
        this.#logTransaction("DEPOSIT", amount); // Enhancement 3: Ledger
        return true;
    }

    withdraw(amount, pin) {
        // Enhancement 2: Security Lockout Check
        if (this.#isLocked) {
            return { success: false, message: "Account Locked. Contact Support." };
        }

        // Enhancement 1: Input Sanitization
        if (amount <= 0) {
             return { success: false, message: "Invalid Amount" };
        }

        // Security Check
        if (pin !== this.#pin) {
            this.#wrongPinAttempts++;
            const attemptsLeft = this.#MAX_WRONG_PIN - this.#wrongPinAttempts;

            // Trigger Lockout
            if (this.#wrongPinAttempts >= this.#MAX_WRONG_PIN) {
                this.#isLocked = true;
                return { success: false, message: "Too many wrong attempts. Account Locked." };
            }

            return { 
                success: false, 
                message: `Invalid PIN. Warning: ${attemptsLeft} attempts remaining.` 
            };
        }

        // Reset wrong attempts on successful PIN entry
        this.#wrongPinAttempts = 0;

        // Policy Check
        if (this.#withdrawCount >= this.#MAX_WITHDRAW_LIMIT) {
            return { success: false, message: "Daily Limit Reached" };
        }

        // Balance Check
        if (amount > this.#balance) {
            return { success: false, message: "Insufficient Funds" };
        }

        // Execution
        this.#balance -= amount;
        this.#withdrawCount++;
        this.#logTransaction("WITHDRAW", amount); // Ledger Update

        return {
            success: true,
            message: "Cash Dispensed",
            currentBalance: this.#balance
        };
    }

    getStatement() {
        // Validates that the user can see their history
        return this.#ledger;
    }
}

// --- Simulation ---

const acc = new Account("Alok");

// 1. Test Input Validation
acc.deposit(-5000); // Console Error: Deposit amount must be positive.

// 2. Test Security Lockout
console.log(acc.withdraw(10, "Wrong1")); // Attempts left: 2
console.log(acc.withdraw(10, "Wrong2")); // Attempts left: 1
console.log(acc.withdraw(10, "Wrong3")); // Account Locked.
console.log(acc.withdraw(10, "Alok@1234")); // Even with right PIN, it fails now: "Account Locked"

// 3. Test Ledger (If we create a fresh account)
const acc2 = new Account("Fresh");
acc2.deposit(500);
acc2.withdraw(100, "Fresh@1234");
console.table(acc2.getStatement()); 
// This prints a beautiful table of exactly what happened and when.