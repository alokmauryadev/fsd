let arr1 = [4,10,15,18,21,28,30]
let arr2 = [3,4,5,8,10,21]

// let union = new Set([...arr1,...arr2])
// console.log(union)

// let i = 0;
// let j = 0;
// while(i<arr.length&&j<arr.length){

// }
let m = arr1.length;
let n = arr2.length;
let i = 0;
let j = 0;
let union = []

// here we have some sorted arrays/ we are trying to find union, so here we use a two pointer approach, we take our first pointer at first 
// array and then the second pointer and start of second array, and then we compare them, the one who is smaller goes first, and if equal, we just push any, and then after that we do the final cleanup
// Be humble, try it, even if you fail, learn from the failure, do not repeat them


while(i<m && j<n){
    if(arr1[i]<=arr2[j]){
        if(union.length == 0 || union[union.length-1] !== arr1[i] ){
            union.push(arr1[i])
        } 
        i++
      }
        else{
            if(union.length == 0 ||  union[union.length-1] !==arr2[j]){
            union.push(arr2[j])
        }
        j++
        }
}

while(i<m){
            if(union.length == 0 || arr1[i] !== union[union.length-1]){
            union.push(arr1[i])
        }
        i++
}
while(j<n){
                if(union.length == 0 || arr2[j] !== union[union.length-1]){
            union.push(arr2[j])
        }
        j++
}

console.log(union)