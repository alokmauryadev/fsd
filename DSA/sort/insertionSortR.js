function insertionSortR(arr,i){
        if(i>=arr.length) return
        let curr_value = arr[i];
        let j = i-1
        while(j>=0 && curr_value<arr[j]){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=curr_value
    insertionSortR(arr,i+1)
    return arr
}
const numbers = [23,32,4,5,35,3,85,30,57]
console.log(insertionSortR(numbers,1))