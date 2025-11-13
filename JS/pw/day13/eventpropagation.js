// let's learn event bubbling or event propagation 
let main = document.querySelector(".main");
let sidebar = document.querySelector(".sidebar")
let btn = document.getElementById("btn")
let userInput = document.getElementById("username")
let spanChild = document.getElementById("littlechild")
let span = document.querySelector(".para")
let spandiv = document.querySelector(".spandiv")
let spnChild = document.getElementById("spanchild")
spandiv.addEventListener("mouseover",(event) => { 
//   if (event.target === spandiv) {
//     event.stopPropagation();
//     console.log("You know I have been hovered over");
//   }
    console.log("You know I have been hovered over");

 })

spnChild.addEventListener("mouseover",(e) => {
    e.stopPropagation(); 
    console.log("You are hovering on the last child in the div")
 })