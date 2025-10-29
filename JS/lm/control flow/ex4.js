const arr1 = [1, 2, 3, 4, 5];
const arr2 = [10, 9, 8, 7, 5];
const commonElements = [];
// for (const element1 of arr1) {
//     for (const element2 of arr2) {
//         if(element1===element2){
//             commonElements.push(element1)
//         }
//     }
// }
console.log(commonElements)
const lookup = new Set(arr1); // Use a Set for instant lookup
for (const item2 of arr2) {
  if (lookup.has(item2)) { // .has() is O(1) - instant!
    commonElements.push(item2);
  }
}
console.log(commonElements)