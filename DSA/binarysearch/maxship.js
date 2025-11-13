let arr = [1,2,3,4,5,6,7,8,9,10]
let cap = 55;
let d = 1

let low = Math.min(...arr)
let high = cap;

function canShip(cap) {
    let days = 1;
    let currentWeight = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > cap) return false;
        if (currentWeight + arr[i] > cap) {
            days++;
            currentWeight = arr[i];
        } else {
            currentWeight += arr[i];
        }
    }
    return days <= d;
}

while(low<=high){
    let mid = low + ((high - low) >> 1);
    if(canShip(mid)){
        high = mid-1
    }
    else{
        low = mid+1
    }
}

console.log(low)