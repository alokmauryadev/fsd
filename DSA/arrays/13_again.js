// brute force method

// let arr = [1,1,1,1,2,2,4]
// let k=3
// let maxlength = 0;

// for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for(let j=i;j<arr.length;j++){
//         sum += arr[j]
//         if(sum===k){
//             let length = j-i+1
//             if(length>maxlength){
//                 maxlength = length
//             }
//         }
//     }
// }

// console.log(maxlength)


// now let's look at hash map method

let arr= [1,1,1,1,2,2,4]
// let arr1 = [1,2,3,1,2,2,4]
let k=3
let maxlength = 0;
let currentSum = 0;
let start = -1
let sumhash = new Map([
    [0,-1]
])

for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (sumhash.has(currentSum-k)) {
        start = sumhash.get(currentSum-k)
        let length = i-start
        maxlength = Math.max(length,maxlength)
    }
    if(!sumhash.has(currentSum)){
        sumhash.set(currentSum,i)
    }
}
console.log(start)
console.log(maxlength)