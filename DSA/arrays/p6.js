// given an array of Natural numbers, rotate the array by k elements either left of right





// this is the best first method which comes to mind
// function shift(arr,k,i,dir){
    //     if(i>=k){
        //         return
        //     }
        //     if(dir==="left"){
            //     arr.push(arr.shift())
            //     i++
            //     return shift(arr,k,i,dir)
            // }
            //     else if(dir==="right"){
                //         arr.unshift(arr.pop())
                //         i++
                //         return shift(arr,k,i,dir)
                //     }
                // }
                // shift(arr,k,0,"right")
                // console.log(arr)
                
                // right
                
                // It takes O(N) operation but takes a extra O(N) space
                let arr = [23,241,12,3,4,23,42]
                // console.log(arr)
                let k = 2;

// k = k % arr.length

// let start = arr.slice(-k)
// let end = arr.slice(0,arr.length-k)
// console.log(start)
// console.log(end)

// let finalarray = [...start, ...end]
// console.log(finalarray)

// let's make a more better and optimal approach to solve this problem

// let's do a standar two pointer approach

function reverse(arr, start, end){
    while(start<end){
    [arr[start],arr[end]]=[arr[end],arr[start]]
    start++
    end--
   }
}

function rotateRight(arr,k){
    const n = arr.length;
    if (n===0) return;
    k = k%n
    if(k===0) return

    reverse(arr, 0, n-1)
    reverse(arr, 0, k-1)
    reverse(arr, 0, n-1)
}
let arr_optimal = [23, 241, 12, 3, 4, 23, 42];
let k_optimal = 2;

console.log("Original:", arr_optimal);
rotateRight(arr_optimal, k_optimal);
console.log("Rotated Right:", arr_optimal); // [23, 42, 23, 241, 12, 3, 4]
// console.log(arr)