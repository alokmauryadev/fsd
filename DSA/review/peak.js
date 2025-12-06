let arr = [1,2,1,3,5,6,4]


// find peak, or at any place where my element is previous element and next element are smaller than me

let left = 0
let right = arr.length-1

while(left<right){
    let mid = Math.floor(left+(right-left)/2)
 
    if(arr[mid]<arr[mid+1]){
        left = mid+1
    }
    else{
        right = mid
    }
}

console.log(arr[left])
