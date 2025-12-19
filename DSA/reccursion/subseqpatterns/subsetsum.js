let arr = [3, 1, 2]; // Changed input to prove the sort requirement
let total = [];

function subsetSum(index, subtotal) {
    // Base Case
    if (index === arr.length) {
        total.push(subtotal);
        return;
    }

    // Pick (Include)
    subsetSum(index + 1, subtotal + arr[index]);

    // Don't Pick (Exclude)
    subsetSum(index + 1, subtotal);
}

subsetSum(0, 0);

// Explicitly solve the sorting constraint
total.sort((a, b) => a - b);

console.log(total);