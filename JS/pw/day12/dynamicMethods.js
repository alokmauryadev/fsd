let un = document.getElementById("un")
let newLi = document.createElement('li')
newLi.textContent = "Third"
un.appendChild(newLi)

let newLi2 = document.createElement("li")
newLi2.textContent = "New Third!"
un.replaceChild(newLi2,newLi)