let n = 6;
let fs = ""
function fibonacci(n,a=0,b=1){
    if(n<0){
        return
    }
    fs += `${a} `;
    return fibonacci(n-1,b,a+b)
}
fibonacci(n)
console.log(fs)