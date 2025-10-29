//brute force method
let numbers = [23,241,12,3,4,23,42]
let i = numbers[0]
numbers.shift()
numbers.push(i)
for (let i = 1; i < numbers.length; i++) {
    numbers[i-1] = numbers[i]
}
numbers.push(i)
console.log(numbers)

// function leftRoate(arr,i){
//     arr[i-1] = arr[i]
// }