let n = 8;
let div = [];
// for(let i=1;i<=36;i++){
//     if(n%i===0){
//        div.push(i)
//     }
// }
console.log(div)

// new method,
for(let i=1;i*i<=n;i++){
    if(n%i===0){
        div.push(i)
        if(n/i!=i){
            div.push(n/i)
        }
    }
}
console.log(div.sort((a,b)=>a-b))
