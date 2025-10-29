// let n = 10;
// function backtrack(n){
//     if(n<=0){
//         return
//     }
//     backtrack(n-1)
//     console.log(n)
// }
// backtrack(n)
// basic hashing
let num = [1,1,2,3,4,5,6,6,7]
let hash = new Map()
for(let i =0;i<num.length;i++){
    hash.set(num[i],(hash.get(num[i]) || 0)+1)
}

console.log(hash)