//movie all 0 the end of the array
let arr = [1,0,2,4,0,0,12,0]
let w = 0;
for (let i = 0; i < arr.length; i++) {
    if(arr[i]!==0){
        arr[w] = arr[i]
        w++
    }
}
for(let i=w;i<arr.length;i++){
    arr[i] = 0
}
console.log(arr)
// this solution is good, but it doesn't maintain the order
// let i = 0
// let j = arr.length-1
// while(i<j){
//     while(arr[j]==0){
//         j--
//     }
//     if(arr[i]==0){
//         let temp = arr[j]
//         arr[j] = arr[i]
//         arr[i] = temp;
//         i++
//         j--
//     }
//     i++
// }
// console.log(arr)