let a = 60;
let b = 30;
// a better logic
while(a>0 && b>0){
    if(a>b){
        a = a %b
    }
    else{
        b = b%a
    }
    if(a==0){
        console.log(b)
    }
    else if(b==0){
        console.log(a)
    }
}


//brute force logic

let a1 = 60;
let b1 = 30;
let gcd = 1
for(let i=1; i<=Math.min(a1,b1);i++){
    if(a1%i===0 && b1%i===0){
        gcd = i
    }
}
console.log(gcd)