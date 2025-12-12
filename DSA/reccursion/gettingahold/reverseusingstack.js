function reverseStack(stack){
    if(stack.length===0){
        return
    }
    let num = stack.pop();
    reverseStack(stack)
    insertatBottom(stack,num)
}

function insertatBottom(stack,element){
    if(stack.length===0){
        stack.push(element)
        return
    }
    const temp = stack.pop()
    insertatBottom(stack,element)
    stack.push(temp)
}

let stack = [4,3,1,2]
reverseStack(stack)
console.log(stack)