let asteroid =  [10, 20, -10,40,-50]
let stack  = [];
for(let i=0;i<asteroid.length;i++){
    let current = asteroid[i]
    let exploded = false;
    while(stack.length>0 && current<0 && stack[stack.length-1]>0){
        let top = stack[stack.length-1]
        if(Math.abs(current)>top){
            stack.pop()
        }
        else if(Math.abs(current)===top){
            stack.pop()
            exploded = true;
            break
        }
        else{
            exploded = true
            break
        }
  } 
  if(!exploded){
        stack.push(current)
    }
}
console.log(stack)