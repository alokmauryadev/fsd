// // this keyword speacial keyword hai, kyuki jaise 
// // ki baaki saare keyword ki value ya unka nature same reahta hai

// // this keyword ki value ya naturure badal ata hai is baat se ki aap usey 
// // kaha youse kr rhe ho


// // global scope

// console.log("-----Global scope-----")
// console.log(this)

// // functional scope
// console.log("-----Functional scope-----")
// function abcd(){
//     console.log(this)
// }
// abcd();

// // inside a method
// console.log("-----Insite method of an object-----")
// let obj = {
//     name: "harsh",
//     age: "26",
//     sayName: function(){
//         console.log(this.age)
//     },
// };
// console.log(obj.age)// here it's not window, because inside the method, the value of this is object itself

// // event handler

// // document.querySelector("h1").addEventListener("click",function(){
// //     console.log(this.style.color = "red");
// // })

// // inside a class

// class Abcd{
//     constructor(){
//         this.a = 12;
//         console.log("Hello")
//     }
// }
// let val = new Abcd();

// call apply bind


// it means we can set the value of this
// when calling the function

let obj = {
    name: "harsh",
    greet: function(){
        console.log(`Good Morning, My name is ${this.name}`)
    }
}
function abcd(a,b,c){
    console.log(this,a,b,c)
}
// abcd.call(obj,1,2,3);
// abcd.apply(obj,[1,2,3]);
let greetfnc = abcd.bind(obj,1,2,3)
greetfnc();

