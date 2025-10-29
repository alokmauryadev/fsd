//bubble sort


//  Bubble Sort

// for(let i=0;i<arr.length-1;i++){
//     for(let j=0;j<arr.length-i;j++){
    //         if(arr[j]>arr[j+1]){
        //             let temp = arr[j+1]
//             arr[j+1] = arr[j]
//             arr[j] = temp
//         }
//     }
// }
// console.log(arr)


// Insertion Sort

// for(let i = 1;i<arr.length;i++){
    //     let curr_ele = arr[i]
    //     let j = i-1
    //     while(j>=0 && arr[j]>curr_ele){
        //         arr[j+1]=arr[j]
        //         j--
        //     }
        //     arr[j+1]=curr_ele
        // }
        // console.log(arr)
        
        //selection sort


let arr = [3,2,4,6,7,9,8]


for(let i = 0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
    if(arr[j]<arr[i]){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp;
    }
   }
}
console.log(arr)