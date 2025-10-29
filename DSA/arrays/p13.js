// longest subarray with sum k

// let's do start with the brute force method

// let arr = [1,2,3,1,1,1,1,4,2,2,3]
// const k = 2;
// let ai=0;
// let aj=0;
// let maxlength = 0;
// for (let i = 0; i < arr.length; i++) {
//         let sum = 0;
//         for (let j = i; j < arr.length; j++) {
//               sum += arr[j]
//             if(sum===k){
//                 let length = j-i+1
//                 if(length>maxlength){
//                     maxlength = length;
//                     ai = i;
//                     aj= j;
//                 }}}}
// console.log(arr.slice(ai,aj+1))
            // console.log(maxlength)
            
            // sliding widndow method
// let arr = [3, 1, 1, 1, 5]
// let left = 0;
// let right = arr.length-1;
// let k = 3;
// let current = 0;
// let maxlength = 0;
// for (let right = 0; right < array.length; right++) {
//     current += arr[right]

//     while(current >k && left <=right){
//         current -= arr[left];
//         left++
//     }
//     if (current===k){
//         let length = (right-left)+1;
//         maxlength = Math.max(maxlength,length)
//     }
// }

//Hash map method

let arr = [1,2,3,1,0,1,0,4,2,2,3]

let hash = new Map([[0,-1]]);
let maxlength =0;
let sum =0;
let k =3;
let start = -1
let end = -1
for(let i=0;i<arr.length;i++){
    sum += arr[i]
    hash.set(sum,i)

    // if(hash.has(sum-k)){

    // }
}

console.log(hash)