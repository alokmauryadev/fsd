class PaymentProcessor {
    /**
     * Processes a payment.
     * @param {number} amount - The money to charge.
     * @param {string} currency - The currency code (e.g., 'USD').
     * @returns {boolean} - Returns true if successful, false otherwise.
     */
    processPayment(amount, currency) {
        console.log(`Generic processing: ${amount} ${currency}`);
        return true; // Default behavior
    }
}
class PayPalProcessor extends PaymentProcessor {
    // CORRECT OVERRIDE
    // 1. Same Name: processPayment
    // 2. Same Params: amount, currency
    // 3. Same Return: boolean
    processPayment(amount, currency) {
        // Custom logic for PayPal
        const fee = amount * 0.05; 
        const total = amount + fee;
        
        console.log(`PayPal API called. Charging ${total} ${currency} (includes tax).`);
        
        // We maintain the contract by returning a boolean
        return true; 
    }
}

// Usage
const processor = new PayPalProcessor();
const success = processor.processPayment(100, 'USD'); // Works exactly as expected

class BadCryptoProcessor extends PaymentProcessor {
    // BROKEN SIGNATURE
    // The parent expects (amount, currency).
    // This child demands a third argument: 'walletAddress'.
    processPayment(amount, currency, walletAddress) {
        if (!walletAddress) {
            console.error("Transaction Failed: Wallet address missing!");
            return false;
        }
        console.log(`Crypto sent to ${walletAddress}`);
        return true;
    }
}

// The System Code (written expecting the Parent signature)
function executeTransaction(processor) {
    // The system only knows to pass amount and currency
    processor.processPayment(100, 'USD'); 
}

const badBot = new BadCryptoProcessor();

// This fails logic because 'walletAddress' becomes undefined inside the method
executeTransaction(badBot); 
// Output: "Transaction Failed: Wallet address missing!"