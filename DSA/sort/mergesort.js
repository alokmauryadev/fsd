// logic behind merge sort

// const { Constraint } = require("p2");

// it's basically divide and conquer, every single elemen is already sorted, so we'll divide every single element, till
// we have divided all the elments in single element, then we'll compare two arrays and will merge them in sorted order

// let's do it via code, let's first write the merge code

function merge(leftArray, rightArray){
    let result = [];
    let i = 0;
    let j = 0;

    while(i<leftArray.length && j<rightArray.length){
        if(leftArray[i]<rightArray[j]){
            result.push(leftArray[i]);
            i++
        }
        else{
            result.push(rightArray[j]);
            j++
        };
    };

    while(i < leftArray.length){
        result.push(leftArray[i])
        i++
    }
    while(j<rightArray.length){
        result.push(rightArray[j])
        j++
    }
    return result
}

function mergeSort(arr){
if (arr.length <= 1) {
    return arr;
  }
    const mid = Math.floor(arr.length /2)
    const left = arr.slice(0,mid);
    const right = arr.slice(mid)

    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);

    return merge(leftSorted,rightSorted)
}

const numbers = [5, 1, 4, 2, 8];
console.log(mergeSort(numbers))