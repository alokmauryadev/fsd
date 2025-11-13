let arr = [1, 2, 3, 4, 5, 6, 8];
let k = 5;

function recursiveBinarySearch(arr, target, low, high) {
    if (low > high) {
        return -1;
    }
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] === target) {
        return mid;
    }
    if (target > arr[mid]) {
        return recursiveBinarySearch(arr, target, mid + 1, high);
    } else {
        return recursiveBinarySearch(arr, target, low, mid - 1);
    }
}

// --- How to call it ---
let startIndex = 0;
let endIndex = arr.length - 1;
let resultIndex = recursiveBinarySearch(arr, k, startIndex, endIndex);

if (resultIndex !== -1) {
    console.log(`Element ${k} found at index ${resultIndex}`);
} else {
    console.log(`Element ${k} not found.`);
}