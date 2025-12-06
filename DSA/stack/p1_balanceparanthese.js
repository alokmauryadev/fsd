let str = "(]"
for (const c of str) {
    console.log(c)
}

function checkBalance(str){
    let s1 = []
for (const e of str) {
    console.log(s1)
    if(e === "(" || e === "{" || e==="["){
        s1.push(e)
    }
    else{
        s1.pop()
    }
}

return s1.length
}
console.log(checkBalance(str))

