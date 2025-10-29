let a = [1,12,34,53,34];

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
    
}
let data = a.forEach((index,alok)=>{
    console.log(index**2);
    console.log(alok**2);
})
newobj();
function newobj(){
    const obj = {
    "name":"alok",
    "class":"10",
    "sec":"A",
    course:"Full Stack"
    }
    console.log(obj)
}

// console.log(newobj());

for (let c in newobj) {
    let element = (newobj[c])
    console.log(c, element)
    c = "alokhhhhh";
    console.log(c)
}
let stdName = "alka";
for (let i = 0; i < name.length; i++) {
    console.log(name)
    name = "alok";
}
for (const element of stdName) {
    console.log(element)
}
