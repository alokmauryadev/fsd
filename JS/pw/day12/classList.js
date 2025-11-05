let box1 = document.querySelector(".box1")
console.log(box1)
let btn = document.createElement("button")
btn.classList.add("btn","btn2")
btn.classList.toggle("btn")
btn.textContent = "Click Me"
btn.addEventListener("click",()=>{
    alert("I am being clicked")
})
box1.appendChild(btn)

let box2 = document.createElement("div")

box1.appendChild(box2)
box2.textContent = "I am lu lu child"
box2.className = "box2"
box2.classList.add = ("childBox") 
box2.classList.toggle("red")
