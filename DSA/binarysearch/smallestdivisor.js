let arr = [1,2,3,4,5];
let threshold = 8;
let low = 1;
let high = Math.max(...arr);

function isValid(divisor, limit, arr) {
    let total = 0;
    for (const el of arr) {
        total += Math.ceil(el / divisor);
        if (total > limit) return false;
    }
    return true;
}
while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (isValid(mid, threshold, arr)) {
        high = mid;
    } else {
        low = mid + 1; 
    }
}

console.log(low);