let arr = [4,8,5,2,25]
let stack = []
let ans = new Array(arr.length).fill(-1)
for(let i=arr.length-1;i>=0;i--){
    while(stack.length>0 && arr[i]<=stack[stack.length-1]){
        stack.pop()
    }
    if(stack.length>0){
        ans[i]=stack[stack.length-1]
    }
    stack.push(arr[i])
}

console.log(ans)