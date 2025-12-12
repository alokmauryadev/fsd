function generate(n,currenString,result,){
    if(currenString.length===n){
        result.push(currenString)
        return
    }
    generate(n,currenString+"0",result)
    if(currenString.length===0 || currenString[currenString.length-1]==="0"){
        generate(n,currenString+"1",result)
    }
}

// function generate(n,currenString,result,lastChar){
//     if(currenString.length===n){
//         result.push(currenString)
//         return
//     }
//     generate(n,currenString+"0",result,"0")
//     if(currenString.length===0 || lastChar==="0"){
//         generate(n,currenString+"1",result,"1")
//     }
// }


let result = []
let n=3;
generate(n,"",result)
console.log(result)