// longest subarray with sum k

// let's do start with the brute force method


// const k = 3;
// let maxlength = 0;
// for (let i = 0; i < arr.length; i++) {
    //     let sum = 0;
    //     for (let j = i; j < arr.length; j++) {
        //       sum += arr[j]
        //     if(sum===k){
            //     let length = j-i+1
            //        maxlength = Math.max(length,maxlength)
            //     }
            //     }
            // }
            // console.log(maxlength)
            
            // sliding widndow method
let arr = [3, 1, 1, 1, 5]
let left = 0;
let right = arr.length-1;
let k = 3;
let current = 0;
let maxlength = 0;
for (let right = 0; right < array.length; right++) {
    current += arr[right]

    while(current >k && left <=right){
        current -= arr[left];
        left++
    }
    if (current===k){
        let length = (right-left)+1;
        maxlength = Math.max(maxlength,length)
    }
}