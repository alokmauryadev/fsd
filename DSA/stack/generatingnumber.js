let n = 10;

function generateNumber(n){
    let queue = [];
    let result = [];
    queue.push("1")
    while(result.length < n){  // Fixed: should check result.length
        let current = queue.shift()
        result.push(parseInt(current, 2))  // Convert binary string to decimal
        queue.push(current+"0")
        queue.push(current+"1")
    }
    return result
}

let val = generateNumber(n)
console.log(val)  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
