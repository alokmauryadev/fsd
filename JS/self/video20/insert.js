console.log("Here we'll discuss about insert and delete element in js")
function print(fun){
    console.log(fun)
}
print(document.querySelectorAll(".box")[0].innerHTML)
print(document.querySelectorAll(".container")[0].innerHTML)
print(document.querySelectorAll(".container")[0].innerText)
print(document.querySelectorAll(".container")[0].outerHTML)
print(document.querySelectorAll(".container")[0].textContent)
document.querySelectorAll(".box")[0].innerHTML= "Hey This is Alok"
print(document.querySelectorAll(".box")[0].hasAttribute("style"))
print(document.querySelectorAll(".box")[0].getAttribute("style"))
print(document.querySelectorAll(".box")[0].setAttribute("style", "color:red"))

let div = document.createElement("div")
let div2 = document.createElement("div")
div.innerHTML = "I am another div, being inserted through js"
div.setAttribute("class", "box")
div.setAttribute("style", "background-color:red")
div2.innerHTML = "I am being inserted through js"
div2.setAttribute("class", "box")
div2.setAttribute("style", "background-color:red")

const cont = document.querySelector(".container").append(div)
const contnew = document.querySelector(".container").prepend(div2)


