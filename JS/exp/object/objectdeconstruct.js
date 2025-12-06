let user = {
    name: "Rahul",
    age: 24,
    address: {
        city: "Lucknow",
        pincode: "226020"
    }
}

function printProfileDetail({name:username, age, address:{city, pincode:pin}} = user){
    console.log(username)
    return `User name is ${username}, his age is ${age}, he is from ${city} and his pincode is ${pin}`
}

console.log(printProfileDetail(user))
// console.log("city", city)