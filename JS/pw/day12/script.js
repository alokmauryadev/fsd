// let div = document.getElementById("demo")

// let p1 = div.children[0]
// console.log(demo.innerText)
// console.log(demo.textContent)
// console.log(demo.innerHTML)
// console.log(p1.textContent)


let singer = document.getElementsByClassName("singers")
console.log(singer[0].getAttribute('src'))
// document.body.children[0].remove()
singer[0].setAttribute('src',"https://images.unsplash.com/photo-1761839257469-96c78a7c2dd3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169")

singer[0].style.width = "40vw"

const anchorTag = document.querySelector('a');
singer[0].addEventListener("mouseover",()=>{
setTimeout(()=>{
console.log(anchorTag.getAttribute("href"))
console.log(anchorTag.setAttribute("href","https:amazon.com"))
anchorTag.textContent = "Visit Amazon"
console.log(anchorTag.setAttribute("target","_blank"))
},1000)

})

