const numbers = [1,2,3,4,5,6]
const numbers2 = [4,5,6]
let set1 = new Set(numbers)
let set2 = new Set(numbers2) 

let set3 = set1.isSupersetOf(set2)
console.log(set3)
// const data = [...setdata]
// console.log(data)
// const symmetricDifference = (a, b) => {
//   const setA = new Set(a);
//   const setB = new Set(b);
//   return [...b.filter(x => !setA.has(x))];
// };

// const newNum = symmetricDifference(numbers,numbers2)
// console.log(newNum)
// // const nums = new Set(numbers);
// // console.log(nums)
// numbers.union()