let n = 180;
let dup = n;
let sum = 0; // (bystring)

let reverN = 0; // (by number method)
while(dup>0){
    d = dup % 10;
    sum += (d*d*d);
    dup = parseInt(dup/10)
}
if(sum===n){
    console.log(true)
}
else{
    console.log(false)
}
console.log(sum);
