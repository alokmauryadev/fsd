let arr = [1,1,2,2,2,3,3]
let j=0
for (let i = 1; i < arr.length; i++) {
    if(arr[i]!=arr[j]){
        arr[j+1] = arr[i]
        j++
        }
}
arr.splice(j+1)
console.log(arr)