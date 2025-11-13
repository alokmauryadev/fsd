let n = 26; // Let's try our tricky example

let low = 0;
let high = n;
let ans = 0; // Our new variable to remember the best answer

while (low <= high) { // Use <= to include the case where low and high meet
    let mid = Math.floor(low + (high - low) / 2);
    let midSquare = mid * mid; // Let's calculate this once

    if (midSquare === n) {
        ans = mid;
        break;
    } 
    
    else if (midSquare < n) {
        ans = mid;
        low =  mid+1        
    } 
    
    else {
        high = mid - 1;
    }
}

console.log(ans);