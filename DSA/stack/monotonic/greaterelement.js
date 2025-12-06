let arr = [4,12,5,3,1,2,5,3,1,2,4,6]
let stack = []
let ans = Array(arr.length).fill(1)

for(let i=arr.length-1;i>=0;i--){
   while(stack.length>0 && stack[stack.length-1]<=arr[i]){
    stack.pop()
   }
   if(stack.length===0) ans[i] = -1;
   else{
    ans[i] = stack[stack.length-1]
   }
   stack.push(arr[i])
}
console.log(ans)