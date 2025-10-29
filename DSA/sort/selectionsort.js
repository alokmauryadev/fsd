let arr = [13,46,24,52,20,9]

for(let i=0;i<arr.length;i++){
    let minIndex = i;
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]<arr[minIndex]){
            minIndex = j;
        }}

        if(minIndex !== i){
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex]=temp;
        }
    }

console.log(arr)