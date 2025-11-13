//finding hte maximum consecutive one

let prices = [1, 1, 0, 1, 1, 1]
let currentStreak = {0:0,1:0}
let maxStreak = {0:0,1:0}
for(let i=0;i<prices.length;i++){
    if(prices[i]===1){
        currentStreak[1]++
        currentStreak[0] =0;
    } else{
        currentStreak[0]++
        currentStreak[1] =0;
    }
    maxStreak[0] = Math.max(maxStreak[0], currentStreak[0]);
    maxStreak[1] = Math.max(maxStreak[1], currentStreak[1]);
}

console.log(maxStreak)