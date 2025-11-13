let arr = [1,1,2,2,3,3,4,4,5]
let low = 0;
let high = arr.length-1

while(low<high){
    let mid = Math.floor(low+(high-low)/2);
    if(mid % 2 ===1){
       mid--
    }
    if(arr[mid]===arr[mid+1]){
        low = mid+2
    }
    else{
        high = mid;
    }
}
console.log(arr[low])