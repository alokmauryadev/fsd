let arr = [32,45,4,23,98]
function bubbleSort(arr){   
    let wasSwapped;
    for(let i = 0; i<arr.length-1;i++){
        wasSwapped = false;
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp
                wasSwapped = true;
                     }}
        if(!wasSwapped){
            break
        }
    }
    return arr
}
function bubbleSortR(arr,n){
    if(n==1){
        return
    }
    for(let j=0;j<n-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp
                wasSwapped = true;
                     }}
    bubbleSortR(arr,n-1)
    return arr
}

console.log(bubbleSortR(arr,arr.length))
// what do we do in bubble sort, 