// Problem Statement: A monkey Koko is given ‘n’ piles of bananas, whereas the 'ith' pile has ‘a[i]’ bananas. An integer ‘h’ is also given, which denotes the time (in hours) for all the bananas to be eaten.

// Each hour, the monkey chooses a non-empty pile of bananas and eats ‘k’ bananas. If the pile contains less than ‘k’ bananas, then the monkey consumes all the bananas and won’t eat any more bananas in that hour.

// Find the minimum number of bananas ‘k’ to eat per hour so that the monkey can eat all the bananas within ‘h’ hours.

let piles = [7, 15, 6, 3]
let h = 8;

let low = 1;
let high = Math.max(...piles)

function canFinish(n,h){
    let totalTime = 0;
    for (const element of piles) {
        totalTime += Math.ceil(element/n)
    }
    return totalTime<=h
}

while(low<=high){
    let mid = Math.floor(low+(high-low)/2)
    if(canFinish(mid,h)){
        high = mid-1
    }
    else{
        low = mid+1
    }
}

console.log(low)