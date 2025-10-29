let arr = [5,2];
// let sorted = [];

for (let i = 1; i < arr.length; i++) {
    let curr_ele = arr[i]
    let j = i-1
    while(j>=0 && arr[j]>curr_ele){
        arr[j+1] = arr[j]
        j--
    }
    arr[j+1]=curr_ele;
}

console.log(arr); // [1, 2, 4, 5]
