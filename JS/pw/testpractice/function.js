let name = function(){
    console.log("Hello Alok")
}

// name()

function funcA(){
    console.log("func A is called")
    funcB();
   function funcB(){
    console.log("I'm function inside a function")
    }
}
funcA();
for (const element of object) {
    
}