// let number = 214785

// function getDigits(number){
//     if(number<=0){  
//         return
//     }
//     let d = number%10
//     number =  Math.floor(number/10)
//     getDigits(number)
//     console.log(d)
// }
// getDigits(number)

// let num2 = 7;
// isPrime = true;
//     if(num2<=1){
//         console.log("It's not a prime number")
//     }
//     else if(num2===2){
//         "It's a prime number"
//     }
// for(let i=2;i<num2-1;i++){
//     if(num2%i==0){
//         console.log("It's not a prime number")
//         isPrime = false;
//         break
//     }}
//     if(isPrime){
//         console.log("It's a prime number")
//     }

// armstrong number
// let num = 153
// let num2 = num
// let sum = 0
// while(num2>0){
//     d = num2%10
//     sum += d*d*d
//     num2 = Math.floor(num2/10)
// }
// if(num2===sum){
//     console.log("It's a armstrong number")
// }
// else{
//     console.log("It's not a armstrong number")
// }

// console.log(sum)

// printing all divisors or factors of a number
let number = 36;
for(let i=1;i<=Math.floor(Math.sqrt(number));i++){
    if(number%i==0){
        console.log(i)
        if(i != (number/i)){
    console.log(number/i)}
}
}


// finding the GCD of a two number

let a = 12;
let b = 6;

