//removing duplicates from an array

let arr = [1,1,2,2,3,3,4,5,5,5]

// let setarr = new Set(arr)

// let i = 0;
// for (const e of setarr) {
//     arr[i] = e
//     i++
// }
// console.log(arr)

// using set method is brute force

// let's learn about two pointer approach

let j = 0;
for(let k=1;k<arr.length;k++){
    if(arr[k]!=arr[j]){
        arr[j+1]=arr[k]
        j++
    }
}
console.log(arr)
