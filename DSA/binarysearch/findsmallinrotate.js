let arr = [5,6,7,2,3]
let low = 0
let high = arr.length-1

while(low<high){
    let mid = Math.floor(low+(high-low)/2)
    if(arr[mid]>arr[high]){
        low = mid+1
    }
    else if(arr[mid]>arr[high]){
        high = mid
    }
    else{
        high -= 1;
    }

}
console.log(low)