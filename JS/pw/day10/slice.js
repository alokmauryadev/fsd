let arr = [1,2,3,4,5];
let newarr = arr.slice(-1,-3);
let newarr2 = arr.slice();
// console.log(newarr);
// console.log(newarr2);
// console.log(arr)

// splice is a  mutatable method of an array, it change the array itself

console.log(arr.splice(-2,2))
console.log(arr)
