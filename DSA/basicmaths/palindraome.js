let n = 1331;
let dup = n;
let reverse = "" // (bystring)

let reverN = 0; // (by number method)
while(dup>0){
    d = dup % 10;
    reverN = (reverN*10)+d;
    dup = parseInt(dup/10)
}
if(reverN===n){
    console.log(true)
}
else{
    console.log(false)
}
console.log(reverN);
