let child = document.querySelector(".child")
let childcontainer = document.querySelector(".child-container")
let container = document.querySelector(".container")
let alertmessage = document.getElementById("alertmessage")

child.addEventListener("click",(e)=>{
    console.log(alertmessage)
    e.stopPropagation();
    alert(`${child.className} is clicked<b>`)
})

childcontainer.addEventListener("click",(e)=>{
    console.log(alertmessage)
       e.stopPropagation();
    alert(`<b>${childcontainer.className} is clicked<b>`)
})
container.addEventListener("click",(e)=>{
    console.log(alertmessage)
       e.stopPropagation();
   alert(`<b>${container.className} is clicked<b>`)
})