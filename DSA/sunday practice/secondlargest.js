let arr = [2,2,23,75,92,92,29,22,30,87]

let largest = arr[0]
let secondLargest = -Infinity

for(let i=0; i<arr.length;i++){
    if(arr[i]>largest){
        secondLargest = largest;
        largest = arr[i]
    }
    else if(arr[i]<largest && arr[i]>secondLargest){
            secondLargest = arr[i]
        }
}
console.log(secondLargest)

// this is the algorithm to find the second largest element in the array

// Time complexity is O(n)