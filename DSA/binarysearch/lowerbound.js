// lower bound is the smallest index where value is greater than or equal to k

let arr = [1, 2, 3,5, 6, 8];
let k = 7;

let low = 0;
let high = arr.length-1
let ans = arr.length;

while(low<=high){
    let mid = Math.floor(low+(high-low) / 2)
    if(arr[mid]>=k){
        ans = mid
        high = mid-1
    }
    else{
        low = mid+1
    }
}
console.log(ans)
// function recursiveBinarySearch(arr, target, low, high) {
//     if (low > high) {
//         return low;
//     }
//     let mid = Math.floor(low + (high - low) / 2);
//     if (arr[mid]>=target) {
//         return recursiveBinarySearch(arr, target, low, mid-1);
//     } else {
//         return recursiveBinarySearch(arr, target, low+1, high);
//     }
// }

// // --- How to call it ---
// let startIndex = 0;
// let endIndex = arr.length - 1;
// let resultIndex = recursiveBinarySearch(arr, k, startIndex, endIndex);

// if (resultIndex !== -1) {
//     console.log(`Element ${k} found at index ${resultIndex}`);
// } else {
//     console.log(`Element ${k} not found.`);
// }