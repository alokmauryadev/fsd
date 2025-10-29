// finding second element in an array without sorting


//brute force method

// for sort and then start from last and check if n-2 is equal to largest


// using a O(2N) method, using for two loops to find second largest and largest
// let largest = arr[0];
// let secondLargest = -1;
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]>largest){
//         largest = arr[i]
//     }
// }
// for (let j = 0; j <arr.length; j++) {
//     if(arr[j]>secondLargest && arr[j] !== largest){
//         secondLargest = arr[j]
//     }
    
// }
// console.log(secondLargest)


function findSecondLargest(arr){
    
    let largest = arr[0]
    let secondLargest = -Infinity;
    
    for (let i = 1; i < arr.length; i++) {
        if(arr[i]>largest){
            secondLargest = largest;
            largest = arr[i];
        }
        else if(arr[i]<largest && arr[i]>secondLargest){
            secondLargest = arr[i]
        }
    }
    return secondLargest;
}
let arr = [2,2,23,75,92,92,29,22,30,87]
function secondSmallest(arr){
    smallest = arr[0]
    secondSmallest = Infinity;
    
    for(let i = 1;i<arr.length;i++){
            if(arr[i]<smallest){
                secondSmallest = smallest
                smallest = arr[i]
            } else if(arr[i]!=smallest && arr[i]<secondSmallest){
                secondSmallest = arr[i]
            }
        }
        return secondSmallest
    }
console.log(findSecondLargest(arr))
console.log(secondSmallest(arr))