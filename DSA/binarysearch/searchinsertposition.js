
let arr = [1, 2, 3, 6, 8];
let k = 2;

let low = 0;
let high = arr.length-1
let ans = arr.length;

while(low<=high){
    let mid = Math.floor(low+(high-low) / 2)
    if(arr[mid]>=k){
        ans = mid
        high = mid-1
    }
    else{
        low = mid+1
    }
}
console.log(ans)
arr.splice(ans,0,k)
console.log(arr)

