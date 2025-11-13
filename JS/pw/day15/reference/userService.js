let user = ["Alok"]

let addUser = function(name){
    user.push(name)
}

let listUser = function(){
    return user
}
console.log(user)

module.exports = {
    user,addUser, listUser
}