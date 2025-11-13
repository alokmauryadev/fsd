//let's write hash map method for this


let arr = [2,6,5,7,8,11]
let target = 14;

let sumMap = new Map();

let ai = 0
for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i]
    if(sumMap.has(complement)){
        console.log(i,sumMap.get(complement))
    }
    sumMap.set(arr[i],i)
}

