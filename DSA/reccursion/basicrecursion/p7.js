//parameterised recursion
function factorN(n,mul=1){
    if(n<=1){
        console.log(mul)
        return;
    }
    factorN(n-1,n*mul)
}

factorN(6)

//functional recursion

function factorialN(n){
    if(n===1){
        return 1;
    }
    return n * factorialN(n-1)
}
let e= factorialN(6)
console.log(e)