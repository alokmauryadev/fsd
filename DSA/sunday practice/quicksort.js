let arr = [10,5,3,2,19,7,19]

function quickSort(arr,low,high){
if(low<high){
    let pivot = helper(arr,low,high)
    quickSort(arr,low,pivot-1)
    quickSort(arr,pivot+1,high)
}
    return arr
}

function helper(arr,low,high){
    let piv = low
    let i = low;
    let j = high;
    while(i<j){
        while(arr[i]<=arr[piv] && i<=high-1){
            i++
        }
        while(arr[j]>=arr[piv] && j>=low+1){
            j--
        }
        if(i<j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        else{
            let temp = arr[j]
            arr[j] = arr[piv]
            arr[low] = temp
        }
    }
    return j
}
quickSort(arr,0,arr.length-1)
console.log(arr)