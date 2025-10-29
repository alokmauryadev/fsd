let n = 6;
// let fs = ""
// function fibonacci(n,a=0,b=1){
//     if(n<0){
//         return
//     }
//     fs += `${a} `;
//     return fibonacci(n-1,b,a+b)
// }
// fibonacci(n)
// console.log(fs)

// let n = 6;
function fibonac(n){
    if(n <= 1) return n;
    let d = fibonac(n-1) + fibonac(n-2)
    console.log(d)
    return d
}
console.log(fibonac(n))