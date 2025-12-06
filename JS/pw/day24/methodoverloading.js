function greet(){
    console.log("Hello")
}
// function greet(name){
//     console.log(`Hello ${name}`)
// }

// method overload: having multiple function with same name
// but different return type or different parameters

function add(num1,num2){
    return num1+num2
}
function add(num1,num2,num3){
    return num1+num2+num3
}
function add(num1,num2,num3,num4){
    return num1+num2+num3+num4
}
console.log(add(1,2,3))