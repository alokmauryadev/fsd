// scope = functional scope, global scope and blockscope
// scope- koi bhi variable ya function ko code mein kha tk use kr sakte hai??

// functional scope =function ke andar hi youse ho sakti hai
// global scope = poore code mein kahi bhi youse kr sakte hai
// block scope = {} curly braces mein hi youse ho sakti hai


// agar aapka code kisi bhi {} ke andar nahi hai to aapka code global hai

// if curly braces are without function, like it is being used with a if, for, while or any other loop or only curly braces itself are block scope

console.log("Global Scope Example")
var a = 100;
console.log(a)
{
    var a = 200;
    console.log(a)
}
console.log(a)

// var is a always global scope or functional scope

// variables defined using let or const are blocked scope
console.log("Blocked Scope Example")

let b = 100
console.log(b)
{
    let b = 200
    console.log(b)
}
console.log(b)