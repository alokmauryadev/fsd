let arr = [1,0,0,3,5,8,1]

let w = 0;

for (let i = 0; i < arr.length; i++) {
    if(arr[i]!==0){
        arr[w] = arr[i]
        w++
    }
}
for (let i = w; i < arr.length; i++) {
    arr[i] = 0
}

console.log(arr)