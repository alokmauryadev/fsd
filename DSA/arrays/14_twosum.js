//two sum problem

// brute force method

// let arr = [1,3,7,5,8,9,8]
// let k = 6;

// for(let i=0;i<arr.length;i++){
//     for(let j=i;j<arr.length;j++){
//         if((arr[j]!=arr[i] && arr[j]+arr[i])===k){
//             console.log(arr[i],arr[j])
//             break
//         }
//     }
// }

// now let's see hash map method
let arr = [1, 3, 7, 5, 8, 9, 8];
let k = 6;
let hash = new Map();

for (let i = 0; i < arr.length; i++) {
  let currentNum = arr[i];
  let complement = k - currentNum;

  // 1. CHECK FIRST: Does the complement I need already exist in the map?
  if (hash.has(complement)) {
    // Found it. The pair is the current index 'i' and the stored index.
    console.log(i, hash.get(complement));
    break; // Found the solution, no need to continue
  }

  // 2. ADD LATER: The complement wasn't found, so add the *current*
  //    number to the map to be found by a *future* element.
  hash.set(currentNum, i);
}