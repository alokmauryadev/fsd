let nums = [4, 9, 2, 5, 1];
let k = 22;

function isSubArray(nums,target,index){
    if(target===0){
        return true
    }
    if(index===nums.length || target<0){
        return false
    }
    let isTaken = isSubArray(nums,target-nums[index],index+1)
    if(isTaken){
        return true
    }
    let isSkipped = isSubArray(nums,target,index+1)
    return isSkipped
}

console.log(isSubArray(nums,k,0))