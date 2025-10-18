// it's a block of code used to performa  specifc task and can be used throughout the program.

// basic syntax of a function

/* 
function funcName(paramateter){ |
    // logic code               | This ist he body of the function
}                               |

*/

function greetHello(){
    console.log("Hello World")
}
greetHello();
function greetName(name){
    console.log(`Hello ${name}`)
}
greetName("Alok");

function greet(name,time){
    console.log(`Hello ${name}, Time is ${time}`)
}
let time = new Date();

greet("Alok",time.toLocaleTimeString())
// rest operator create a array of all the extra paramters passed by a function, it's always given in the last

function add(...nums){
    let total = 0;
    for (const num of nums) {
        total+=num;
    }
    return total
}

// a function can accept any type of values, let's take an example by giving a functions as a paramenter inside a function

//callback function - a function which is passed as a parameter in any other function is called a callback function.

function hello(func){
    console.log(func);
    greet("alok",time);
}
hello(greet());

console.log(add(10,20,20,50,50));



