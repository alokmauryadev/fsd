let arr = [1,2,1,3,5,6,4]

let left = 0
let right = arr.length-1

while(left<right){
    let mid = Math.floor((right+left)/2)
    if(arr[mid]<arr[mid+1]){
        left = mid+1
    }
    else{
        right = mid
    }
}


console.log(left)
