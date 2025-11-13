let arr = [1, 10, 3, 10, 2]
let m = 2;
let k=3;

function canMakeBanquet(arr,m,k,days){
    let banquetMade = 0;
    let rosesBloomed = 0;
    for (const e of arr) {
        if(e<=days){
            rosesBloomed++
        }
        else{
            rosesBloomed = 0
        }
        if(rosesBloomed===k){
            banquetMade++;
            rosesBloomed = 0;
        }
    }
    return banquetMade >=m
}

let low = 0;
let high = 0;
for (const e of arr) {
    low = Math.min(e,low)
    high = Math.max(e,high)
}

let ans = -1;
while(low<=high){
    let mid = Math.floor(low+(high-low/2))
    if(canMakeBanquet(arr,m,k,mid)){
        ans = mid
        high = mid-1
    }
    else{
        low = mid+1
    }
}

console.log(ans)