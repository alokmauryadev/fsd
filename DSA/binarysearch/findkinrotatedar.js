function searchRotatedArray(arr, x) {
    if (arr.length === 0) return -1;
    
    let i = 0;
    let j = 1;
    let low = 0;
    let high = arr.length - 1;
        while (j < arr.length && arr[i] < arr[j]) {
        i++;
        j++;
    }
        if (x >= arr[0]) {
        high = i;  // Search prefix: 0 to i
    } else {
        low = j;   // Search suffix: j to end
    }
    
    // Step 3: Binary search in the chosen sorted range
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === x) {
            return mid;  // Found it!
        } else if (arr[mid] < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    return -1;
}

// Test
let arr = [4, 5, 6, 7, 0, 1, 2, 3];
let x = 5;
console.log(searchRotatedArray(arr, x));  // Output: 1