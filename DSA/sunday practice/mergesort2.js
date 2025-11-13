const arrData = [5,3,7,8]

function merge(leftArr, rightArr){
    let result =[]
    let i =0;
    let j=0;
    console.log(leftArr)
    console.log(rightArr)
    while(i < leftArr.length && j < rightArr.length){
        if(leftArr[i]<rightArr[j]){
            result.push(leftArr[i])
            i++
        }
        else{
            result.push(rightArr[j])
            j++
        }
    }
    while(i<leftArr.length){
            result.push(leftArr[i])
            i++   
         }
    while(j<rightArr.length){
        result.push(rightArr[j])
         j++
    }
    console.log(result)
    return result
}

function mergeSort(arr){
    if(arr.length<=1){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)

    const leftSorted = mergeSort(left)
    const rightSorted = mergeSort(right)

    return merge(leftSorted,rightSorted)

}
mergeSort(arrData)
console.log(arrData)