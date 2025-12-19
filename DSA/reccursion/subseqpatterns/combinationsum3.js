k=3
n=7
let nums = Array.from(new Array(10).keys()).splice(1)
let result = []
function combinationsum3(curr,k,target,index){
    if(target===0 && curr.length===k){
        result.push(curr)
        return
    }
    if(nums.length===index){
        return
    }
    console.log(k,target)
    curr.push(nums[index])
    combinationsum3(curr,k,n-nums[index],index+1)
    combinationsum3(curr,k,n,index+1)
}
combinationsum3([],k,n,0)
console.log(result)