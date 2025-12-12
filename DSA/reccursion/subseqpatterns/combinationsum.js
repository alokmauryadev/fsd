let nums = [2, 3, 6, 7];
let k = 7;

function printSub(nums,current,target,index,result){
    if(target===0){
        result.push([...current])
        return
    }
    if(index===nums.length || target<0){
        return
    }
    current.push(nums[index])
    printSub(nums,current,target-nums[index],index,result)
    current.pop()
    printSub(nums,current,target,index+1,result)
}
let result = [];
printSub(nums, [], k, 0, result);
console.log(result);

/**
//  * @param {number[]} candidates
//  * @param {number} target
//  * @return {number[][]}
//  */
// var combinationSum = function(candidates, target) {
//     const result = [];
    
//     // 1. Sort to enable pruning (Critical: JS sort is string-based by default!)
//     candidates.sort((a, b) => a - b);

//     function findCombinations(index, currentTarget, currentPath) {
//         // --- BASE CASES ---

//         // Success: We hit the bullseye 🎯
//         if (currentTarget === 0) {
//             // CRITICAL STEP:
//             // We must create a "Shallow Copy" using the spread operator [...currentPath].
//             // If we just pushed 'currentPath', we would be pushing a reference.
//             // As recursion continues and modifies 'currentPath', 
//             // the values inside 'result' would also change!
//             result.push([...currentPath]); 
//             return;
//         }

//         // Failure: Ran out of numbers
//         if (index === candidates.length) {
//             return;
//         }

//         // Optimization (Pruning)
//         if (candidates[index] > currentTarget) {
//             return;
//         }

//         // --- RECURSIVE STEPS ---

//         // Choice 1: INCLUDE the number
//         currentPath.push(candidates[index]);
//         // Recurse with same index, reduced target
//         findCombinations(index, currentTarget - candidates[index], currentPath);
        
//         // BACKTRACK (The Undo)
//         currentPath.pop();

//         // Choice 2: EXCLUDE the number
//         // Recurse with next index, same target
//         findCombinations(index + 1, currentTarget, currentPath);
//     }

//     // Kick off the recursion
//     findCombinations(0, target, []);
    
//     return result;
// };

