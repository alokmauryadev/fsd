let n = 4555000;
let reverse = "" // (bystring)

let reverN = 0; // (by number method)
while(n>0){
    d = n % 10;
    reverN = (reverN*10)+d;
    n = parseInt(n/10)
}
console.log(reverN);
