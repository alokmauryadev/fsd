// let d = "2"
// for(let i = 0;i<arr.length;i++){
    //     if(arr[i]==2){
        //         console.log("found")
        //         break
        //     }
        // }
        
        // binary search, we do it for sorted search, it divide into half, and then decide whether to seach left of right
// let hi = arr[0]
// let lo = arr[arr.length-1]
let arr = [1,2,3,4,5,6]

function binarySearch(arr,val){
let low=0
let high = arr.length
while(low<high){
    let mid = Math.floor(low+(high-low)/2)
    if(arr[mid]===val){
        return true;
    }
    else if(val>arr[mid]){
        low = mid+1
    }
    else{
        high = mid
    }
}}
console.log(binarySearch(arr,9) ?? false)