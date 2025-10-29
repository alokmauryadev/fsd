let n = [4,6,2,5,7,9,1,3]

function quickSort(arr, lo,hi){ 
    if(lo<hi){
    pivotIndex = helper(arr,lo,hi)
    quickSort(arr, lo, pivotIndex-1)
    quickSort(arr,pivotIndex+1,hi)
    
    }
    return arr;
}

function helper(arr,lo,hi){
   let pivot = arr[lo];
    let i = lo;
    let j = hi;
    while(i<j){
        while(arr[i]<=pivot && i<=hi-1){
            i++
        }
        while(arr[j]>=pivot && j>=lo+1){
            j--
        }
        if(i<j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        else{
            let temp = arr[j]
            arr[j] = pivot
            arr[lo] = temp
        }
    }
    return j;
}

console.log(quickSort(n,0,n.length-1))
