const candidates = [10,1,2,7,6,1,5]
const target = 8
let result = []
function combinationsum2(current,target,index){
    if(target===0){
        result.push([...current])
        return
    }
    if(candidates.length===index || target<0){
        return
    }
    current.push(candidates[index])
    combinationsum2(current,target-candidates[index],index+1)
    current.pop()
    combinationsum2(current,target,index+1)
}

combinationsum2([],target,0)
console.log(result)