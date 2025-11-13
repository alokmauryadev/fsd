let arr = [7, 15, 6, 3]
let h = 8;

function canFinish(speed, arr, hour){
    let totalHours = 0;

    for (const e of arr) {
        totalHours += Math.ceil(e/speed)
    }

    return totalHours <= hour;
}

let low = 1
let high = 0;
for (const e of arr) {
    high = Math.max(e,high)
}
let minSpeed = 1
while(low<=high){
   let mid = Math.floor(low+(high-low)/2)
   if(canFinish(mid,arr,h)){
    minSpeed = mid
    high = mid-1
   }
   else{
    low = mid+1
   }
}

console.log(minSpeed)