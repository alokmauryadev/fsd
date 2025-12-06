let arr = [30,-2,12,294,12,323]

let largest = arr[0]
let secondLargest = -Infinity

for (let i = 0; i < arr.length; i++) {
    if(arr[i]>largest){
        secondLargest = largest
        largest = arr[i]
    }
    else if(arr[i]<largest && arr[i]>secondLargest){
        secondLargest = arr[i]
    }
}

console.log(secondLargest)