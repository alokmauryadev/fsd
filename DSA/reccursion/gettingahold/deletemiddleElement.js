function deleteMid(stack, currentDepth, targetDepth){
    if(currentDepth===targetDepth){
        stack.pop()
        return
    }
    const num = stack.pop()
    deleteMid(stack,currentDepth-1,targetDepth)
    stack.push(num)
}

let arr = [4,1,3,2,5]
let n = arr.length
deleteMid(arr,n,Math.ceil(n/2))
console.log(arr)