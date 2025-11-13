// floor - largest number in an array which is either equal or less than x

let arr = [3, 4, 4, 7, 8,8,8,8,10]
let k = 8
let llow = 0
let lhigh = arr.length-1
let lOccur = -1;
let hOccur = -1;
while(llow<=lhigh){
    let mid = Math.floor(llow+(lhigh-llow)/2)
    if(arr[mid]==k){
        lOccur = mid
        llow = mid+1
    }
    else{
        lhigh = mid-1
    }
}
console.log(lOccur)
let low = 0;
let high = arr.length-1;
while(low<=high){
    let mid = Math.floor(low+(high-low)/2)
    if(arr[mid]==k){
        hOccur = mid
        high = mid-1
    }
    else{
        low = mid+1
    }
}
console.log(hOccur)

let count = (lOccur-hOccur)+1

console.log(count)