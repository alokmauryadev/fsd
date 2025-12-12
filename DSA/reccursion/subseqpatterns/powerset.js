// function solve(str, index, current, result) {
//     if (index === str.length) {
//         result.push(current);
//         return;
//     }

//     solve(str, index + 1, current + str[index], result);
//     solve(str, index + 1, current, result);
// }
// let result = []
// let num = [1,2,3]
// solve(num,0,"",result)
// console.log(result)

function solve(nums, index, current, result) {
    if (index===nums.length) {
        result.push([...current]);
        return;
    }
    current.push(nums[index])
    solve(nums, index + 1, current, result);
    current.pop()
    solve(nums, index + 1, current, result);
}
let result = []
let num = [1,2,3]
solve(num,0,[],result)
console.log(result)