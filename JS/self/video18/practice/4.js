const listdata = document.getElementsByClassName("listitem")
const listdata2 = document.querySelectorAll(".listitem")
let newlist = Array.from(listdata)
for (const e of listdata) {
    e.style.backgroundColor = "green";
}
newlist.forEach(e=>e.style.backgroundColor="cyan")
console.log(listdata)
console.log(listdata2)
