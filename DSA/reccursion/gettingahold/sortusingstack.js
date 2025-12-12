function sortStack(stack){
    if(stack.length===0){
        return;
    }
    const num = stack.pop();
    sortStack(stack);
    sortedInsert(stack,num);
}
function sortedInsert(stack,element){
    if(stack.length===0 || element<stack[stack.length-1]){
        stack.push(element)
        return
    }
    const temp = stack.pop();
    sortedInsert(stack,element)
    stack.push(temp)
}

let myStack = [4,1,3,2]
console.log([...myStack])
sortStack(myStack)
console.log(myStack)