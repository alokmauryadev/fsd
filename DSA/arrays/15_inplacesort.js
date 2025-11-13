//  Given an array consisting of only 0s, 1s, and 2s. Write a program to in-place sort the array without using inbuilt sort functions. ( Expected: Single pass-O(N) and constant space)

let arr = [0,1,1,2,2,0,2,0,1]

//brute force method, use bubble sort

// for(let i =0;i<arr.length;i++){
//     for(let j=0;j<arr.length-i;j++){
//         if(arr[j]>arr[j+1]){
//             let temp=arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp;
//         }
//     }
// }
// console.log(arr)



// now let's take advantage of we have only 0,1,2
function dnfsort(arr){
    let low = 0;
    let mid = 0;
    let n = arr.length
    let high = n-1

    while(mid<=high){
        if(arr[mid]===0){
            [arr[low],arr[mid]] = [arr[mid],arr[low]]
            low++
            mid++
        }
        else if(arr[mid]===1){
            mid++
        }
        else{
            [arr[mid],arr[high]] = [arr[high],arr[mid]]
            high--
        }
    }
}
dnfsort(arr)
console.log(arr)