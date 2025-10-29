function calculateTotal(items, discount) {
    const total = items.reduce((v,s)=>v+s,0);
    const finalPrice = total * (100-(+(discount) || 0))/100
    return finalPrice
}

// --- Test Cases ---
const items = [100, 50, 25];



console.log(calculateTotal(items, 10));      // Expected output: 157.5
console.log(calculateTotal(items, "20"));    // Expected output: 140
console.log(calculateTotal(items, null));     // Expected output: 175
console.log(calculateTotal(items, ''));       // Expected output: 175
console.log(calculateTotal(items, "abc"));    // Expected output: 175