//1st Method
let n = 1;

//1st method by division by 10
let count = 0;
while(n>0){
    // let d = n % 10;
    count++
    n = Math.floor(n/10)
}
console.log(count)

//2nd Method by using log10
let count1 = 0;
if(n>1){
    count1 = Math.ceil(Math.log10(n));
}
else{
    count1 = 1;
}
console.log(count1)

//3rd Method, by converting it to string
let x = 2443;
let z = 0;
for (const y of String(x)) {
    z++
}
console.log(z)