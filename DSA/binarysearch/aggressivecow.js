let stalls = [0,3,4,7,10,9]
let k=4
let sortedStall = stalls.sort((a,b)=>a-b)

let low = 1;
let high = sortedStall[sortedStall.length-1]-sortedStall[0]

function canPlace(distance){
    let count = 1;
    let last_position = sortedStall[0]

    for (let i = 1; i < sortedStall.length; i++) {
        if((sortedStall[i]-last_position)>=distance){
            count++
            last_position = sortedStall[i]
        }
        if(count===k){
            return true
        }
    }
    return false
}
let ans = 0
while(low<=high){
    let mid = Math.floor(low + (high-low)/2)
    if(canPlace(mid)){
        ans = mid
        low = mid+1
    }
    else{
        high = mid-1
    }
}
console.log(ans)