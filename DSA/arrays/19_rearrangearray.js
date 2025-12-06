// There’s an array ‘A’ of size ‘N’ with an equal number of positive and negative elements. Without altering the relative order of positive and negative elements, you must return an array of alternately positive and negative values.

// let arr = [1,2,-3,-1,-2,3]
// let parr = arr.filter(e=>e>0)
// let narr = arr.filter(e=>e<0)
// let newarr = []
// for (let i = 0; i < parr.length; i++) {
//     newarr.push(parr[i])    
//     newarr.push(narr[i])  
// }
// console.log(newarr)
// let arr = [1,-2,-3,-1,2,3]

// let newarr = []
// let i=0;
// let j=0;
// while(i<arr.length && j<arr.length){
// while(arr[i]<0){
//     i++}
// while(arr[j]>0){
//     j++}
//     newarr.push(arr[i])
//     newarr.push(arr[j])
//     i++
//     j++
// }
// console.log(newarr)


// now let's build the optimal solution for this problem

/**
 * for each eindex i I have to check if the element has correct sign, if it does move on, if it doesn't
 * find the nearest element to ther right that does have the correct sign, 
 * right rotate the subarray from i to that position
 * continue
 */

let arr = [1,2,-3,-1,-2,-5,3,6]


for (let i = 0; i < arr.length; i++) {
    if(i%2==0 && arr[i]<0){
        let k=i+1;
        while(arr[k]<0){
            k++
        }
        rotate(arr,i,k)
    }
    else if(i%2==1 && arr[i]>0){
        let k=i+1;
        while(arr[k]>0){
            k++
        }
         rotate(arr,i,k)
    }
}
function rotate(arr,i,k){
        let temp = arr[k]
        for (let j = k; j>i; j--) {
           arr[j] = arr[j-1]
        }
        arr[i] = temp
}

console.log(arr)