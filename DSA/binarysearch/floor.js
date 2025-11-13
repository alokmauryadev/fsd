// floor - largest number in an array which is either equal or less than x

let arr = [3, 4, 4, 7, 8, 10]
let k = 5
let low = 0
let high = arr.length-1
let ans = arr.length;
while(low<=high){
    let mid = Math.floor(low+(high-low)/2)
    if(arr[mid]<=k){
        ans = mid
        low = mid+1
    }
    else{
        high = mid-1
    }
}
console.log(arr[ans-1])

// ceil

