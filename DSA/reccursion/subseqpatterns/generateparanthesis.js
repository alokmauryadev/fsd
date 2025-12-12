function generate(n,currentString,openCount,closeCount,result){
    if(currentString.length===2*n){
        result.push(currentString)
        return
    }
    if(openCount<n){
        generate(n,currentString+"(",openCount+1,closeCount,result)
    }
    if(closeCount<openCount){
         generate(n,currentString+")",openCount,closeCount+1,result)
    }
}

let result = []
generate(3,"",0,0,result)
console.log(result)