let arr = [3,2,8,5,1,4,23]

function merge(leftArr, rightArr){
    let result = []
    let i = 0;
    let j = 0;

    while(i<leftArr.length && j<rightArr.length){
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
    if(arr.length <=1){
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0,mid)
    const right = arr.slice(mid)

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight)
}

console.log(mergeSort(arr))

// I have correctly implemented a functon for mergeSort;
