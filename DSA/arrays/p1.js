// finding the largest element in an array
// brute force method;
const numbers = [2,10,4,5,54,80]

let largest = numbers[0]

for (let i = 1; i <= numbers.length; i++) {
    if(numbers[i]>largest){
        largest = numbers[i]
    }
}

// console.log(largest)

// recursive method

function bubbleSort(arr){
    do{
         for (let j = 0; j < arr.length -1; j++) {
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
        }
    }while(2<1)
    
    return arr[arr.length-1]
}
console.log(bubbleSort(numbers))
// console.log(findLargest(numbers,1,numbers[0]))

//to find the smallest in the list of array
// const numbers = [8,10,4,5,54,80]

let smallest = numbers[0]

for (let i = 1; i <= numbers.length; i++) {
    if(numbers[i]<smallest){
        smallest = numbers[i]
    }
}

console.log(smallest)

// recursive method

function bubbleSortDescending(arr){
    // do{
    for (let i = 0; i < arr.length; i++) {

                 for (let j = 0; j < arr.length -1; j++) {
            if(arr[j]<arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
        }

    }    
    return arr;
}
console.log(bubbleSortDescending(numbers))
// console.log(findLargest(numbers,1,numbers[0]))