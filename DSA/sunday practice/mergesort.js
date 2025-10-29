let arr = [3,2,4,6,7,9,8]

function merge(leftArray, rightArray){
    let result = [];
    let i=0;
    let j=0;
    while(i < leftArray.length && j <rightArray.length){
        if(leftArray[i]<=rightArray[j]){
            result.push(leftArray[i])
            i++
        }
        else{
             result.push(rightArray[j])
            j++
        }
    }
    while(i<leftArray.length){
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
    if(arr.length<=1){
        return arr;
    }
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);
    return merge(leftSorted,rightSorted)
}
// mergeSort(arr)
console.log(mergeSort(arr))