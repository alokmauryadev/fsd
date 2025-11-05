// let obj = {
//     name: "Alok",
//     course: "Full Stack Development"
// }

// for (const [key,value] of Object.entries(obj)) {
//     console.log(key,value)
// }

// // console.log(NaN===NaN)


// const user = {}


// let arrofKeys = Object.keys(user);
// let arrofValue = Object.values(user);
// let arrofKeyvalue = Object.entries(user);
// console.log(arrofKeys);
// console.log(arrofValue);
// console.log(arrofKeyvalue);

const user = {
    name: "Alok",
    class: undefined,
}
console.log(user)
if(user["class"] != undefined){
    console.log(user["isStudent"])
} else{
    console.log("Property does not exist")
}
if("class" in user){
    console.log(user["class"])
} else{
    console.log("Property does not exist")
}
// console.log(user)