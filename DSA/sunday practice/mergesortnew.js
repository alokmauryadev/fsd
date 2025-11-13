let arr = [5,3,7,8]

function merge(leftArr, rightArr){
    let result =[]
    let i =0;
    let j=0;
    while(i<j){
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
    return result
}

function mergeSort(arr){
    if(arr.length<=1){
        return arr
    }
    let mid = arr.length/2
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)

    let leftSorted = mergeSort(left)
    let rightSorted = mergeSort(right)

    return merge(leftSorted,rightSorted)

}
mergeSort(arr)
console.log(arr)