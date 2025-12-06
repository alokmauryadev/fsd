// lower bound is smallest index where value is larger or equal to x

let arr = [1, 2, 3,5, 6, 8];
let k =7

let low = 0
let high = arr.length-1
let ans = -1

while(low<=high){
    let mid = Math.floor(low+(high-low)/2)
    if(arr[mid]>=k){
        ans = mid
        high = mid-1
    }
    else{
        low = mid+1
    }

}

console.log(ans)