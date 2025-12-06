let arr = [1,2,3,4,5,6]

let d = 1000;
let n = arr.length
let ed = d % n

function rotate(arr,l,h){
    while(l<=h){
        [arr[l],arr[h]] = [arr[h],arr[l]]
        l++
        h--
    }
    return arr
}

console.log(rotate(arr,0,ed-1))
console.log(rotate(arr,ed,n-1))
console.log(rotate(arr,0,n-1))