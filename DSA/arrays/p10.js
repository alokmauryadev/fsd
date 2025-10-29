// let N=10;
// let arr= [1,2,3,4,6,7,8,10]
// let misggingNums = []
// let j=0
// for(let i=1;i<=N;i++){
//     if(j<arr.length && arr[j]==i){
//         j++
//     }
//     else{
//         misggingNums.push(i)
//         // i++
//     }
// }
// console.log(misggingNums)

//finding the missing number only
let n = 10;
let arr1 = [1, 2, 3, 4, 6, 7, 8, 9, 10];

// Start with n (10) since our loop won't reach it
let xor_total = n; 

// Loop only for the length of the actual array
for (let i = 0; i < arr1.length; i++) {
    // xor_total = xor_total ^ (expected_number) ^ (actual_number)
    xor_total = xor_total ^ (i + 1) ^ arr1[i];
}
console.log(xor_total)

//using the brute force method, create an array from 1 to N
// and then use intersection method

// let arrcheck = Array.from(Array(N+1).keys())
// console.log(arrcheck)

// let i=0
// let j=1
// while(i<arr.length && j<arrcheck.length){
//     if(arr[i]===arrcheck[j]){
//         misggingNums.push(arr[i])
//         i++
//         j++
//     }
//     else if(arr[i]<arrcheck[j]){
//         i++
//     }
//         else{
//         j++
//     }
// }
// console.log(misggingNums)
