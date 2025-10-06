/* create a fault calculator using javascript

this faulty calculator does following:
1-  it takes two numbers as input from the user
2- it performs wrongs operations as follows:

+ ----> -
* ----> + 
- -----> /
/ -----> **
-
it performs wrong operation 10% of the times.  
*/  


// function add(a,b){
//     if(Math.random()>0.1){
//         return a+b;
//     }
//     else{
//         return a-b;
//     }
// }
// function sub(a,b){
//     if(Math.random()>0.1){
//         return a-b;
//     }
//     else{
//         return a / b;
//     }
// }
// function mul(a,b){
//     if(Math.random()>0.1){
//         return a * b;
//     }
//     else{
//         return a + b;
//     }
// }

// function divide(a,b){
//     if(Math.random()>0.1){
//         return a / b;
//     }
//     else{
//         return a ** b;
//     }
// }




// let result = divide(10,5);
// console.log(result)

// function calculate(a,b){
//     if (Math.random()>0.1 && a+b) {
        
//     }
// }

// new way to do the same thing

const isfaulty = function(){
    return Math.random() < 0.1;
}

function add(a,b){
    return isfaulty() ? (a-b):(a+b);
}
function sub(a,b){
    return isfaulty() ? (a*b):(a-b);
}
function mul(a,b){
    return isfaulty() ? (a/b):(a*b);
}
function divide(a,b){
    return isfaulty() ? (a**b):(a/b);
}
let a = 50;
let b = 10;
console.log("sum of a+b is " + add(a,b))