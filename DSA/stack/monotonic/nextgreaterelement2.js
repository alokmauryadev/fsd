let arr = [3, 10, 4, 2, 1, 2, 6, 1, 7, 2, 9];
let stack = [];
let ans = new Array(arr.length).fill(-1); 
let n = arr.length; 
for (let i = 2 * n - 1; i >= 0; i--) {
        let index = i % n; 
    while (stack.length > 0 && stack[stack.length - 1] <= arr[index]) {
        stack.pop();
    }
    if (i < n) {
        if (stack.length > 0) {
            ans[index] = stack[stack.length - 1];
        }
    }
    stack.push(arr[index]);
}

console.log(ans);