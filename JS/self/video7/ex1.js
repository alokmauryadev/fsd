const number = 6;
let factorial =1;
    for(let i=number;i>=1;i--){
        factorial = factorial*i;
    }
console.log(factorial)
const arr = Array.from(Array(number+1).keys())
let fact = arr.slice(1).reduce((s,v)=>s*v)
console.log(fact)