let arr = [1,2,4,5,7];
// Index   0,1,2,3,4
// console.log(arr)
// arr[0] = 88
// console.log(arr)
// console.log(arr.length)
// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])
console.log(arr.toString())
console.log(arr.join(''))
console.log(arr.join(' and '))
console.log(arr.pop())
console.log(arr)
console.log(arr.push("Alok"))
console.log(arr.push(100))
console.log(arr) 
arr.shift()
arr.unshift("Harry")



// shift is just opposity to pop, it removes out one value from the left of the array and give it
// push is add to entery a new element into the array to the (n-1) place
// unshift is just opposite to push, it add the data as a new array element at the beginning of the array
// or at 0th index
delete arr[5];


let a1 = [1,2,3];
let a2 = [4,6,5];
let a3 = [7,8,9];

let a4 = a1.concat(a2,a3);
console.log(a4.sort());

let numbers = [1,2,3,4,5,6,7,8,9];
console.log(numbers.splice(5,4, "harry"))
console.log(numbers);
console.log(numbers.slice(2,3));
console.log(numbers);
numbers[6] = "ALok"
console.log(numbers);
let name = "alok";
const obj = {name};
console.log(obj)