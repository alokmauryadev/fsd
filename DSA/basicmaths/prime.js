const n=442;
let isPrime = true;
    if(n<=1){
        console.log(n," is not a prime number")
    }
    else if(n==2){
        console.log(n," is a prime number" )
    }
for(let i=2;i*i<=n;i++){
    if(n%i==0){
        isPrime = false;
        break
    }
}
if(isPrime==true){
    console.log("It's a prime number")
}
else{
console.log("It's nota prime Number")}