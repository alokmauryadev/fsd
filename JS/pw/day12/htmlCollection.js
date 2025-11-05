let list = document.getElementById("list")
let li = document.getElementsByTagName("li")

let queryList = document.querySelectorAll("li")
console.log(queryList.length)
console.log(queryList)

console.log("queryselect ")

console.log(li.length)
for (const eachList of list.children) {
    console.log(eachList.textContent)
}

let newLi = document.createElement('li');

newLi.textContent = "newli"
console.log(li.length)
list.appendChild(newLi)
console.log(li.length,"live or dynamic change")
console.log(queryList.length, "static, it's does not change, even after updating the list")
