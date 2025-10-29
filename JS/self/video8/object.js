// object literals


const mySym = Symbol("Key1")
const JsUser = {
    name: "Alok",
    isAdmin: true,
    age: 18,
    email: "alokmaurya1@gmail.com",
    isLoggedIn: false, 
    lastLoginDays: ["Monday", "Saturday"],
    [mySym]: "MyKey1",
}

console.log(typeof JsUser[mySym])

console.log(JsUser)


console.log(JsUser.name)
console.log(JsUser["name"])