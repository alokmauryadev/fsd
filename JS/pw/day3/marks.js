// examples of ternary operator

let marks = 51;
const grade = marks < 33 ? "Oops Failed" : marks <= 50 ? "C grade" : marks <= 70 ? "B grade" : marks <= 90 ? "A grade" : "A+";
console.log(grade);


let age = 40;
const isAdult = age > 18 ? console.log("You are an adult"):console.log("You are not an adult")
// if(age>18){
//     console.log("You are an adult")
// }
// let y = 10;
// console.log("You are not an adult")
// let x = (x, y, 5);
// console.log(x)