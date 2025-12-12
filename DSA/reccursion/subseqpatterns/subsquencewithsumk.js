let nums = [4, 9, 2, 5, 1];
let k = 10;

function printSub(nums,current,target,index,result){
    if(target===0){
        result.push([...current])
    }
    if(index===nums.length || target<0){
        return
    }
    current.push(nums[index])
    printSub(nums,current,target-nums[index],index+1,result)
    current.pop()
    printSub(nums,current,target,index+1,result)
}
let result = [];
printSub(nums, [], k, 0, result);
console.log(result);