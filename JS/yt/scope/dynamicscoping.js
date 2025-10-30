// variables are scoped based on the calling sequence at runtime, not their position in the code

// when a function executes, it looks for the variables first in it local scope, then searches ip through the call stack (the chain fo functions that led to this function being called, ) not up to the code structure

// this doesn't exist in js, it's use in some older language like Lisp, Bash scripts, etc

// this is  pseudocode

var x = 5;
function foo(){
    console.log(x)
}

function bar(){
    x = 10;
    foo();
    //with dynamic programming it'll print x  = 10, it'll check it's local scope and value of variable in call stack
}
bar();
// with lexical scoping it'll print 5, first it'll call foo to check if value of x is presentin local or global scope and then it'll print