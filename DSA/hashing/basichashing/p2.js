// Problem Statement: Given an array of size N. Find the highest and lowest frequency element.
let n = [10,5,10,15,10,5];
let hash = {};
for (const e of n) {
    hash[e] = (hash[e] || 0) + 1
}

let maxCount = 0;
let minCount = n.length;
let maxel = 0;
let minel = 0;

for (const k in hash) { 
    if(hash[k]>maxCount){
        maxCount = hash[k]
        maxel = k
    }
        if(hash[k]<minCount){
        minCount = hash[k]
        minel = k
    }
}
console.log(maxel)
console.log(minel)
// let lfreq = hash.indexOf(min)

// console.log(`Highest frequence is ${hfreq} and Lowest is ${lfreq}`)