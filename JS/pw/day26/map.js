// // let obj = {
// //     k
// // }
// let userSession = new Map();

// let data = new Map([
//     ["name","alok"],
//     ["course","full stack"]

// ])

// console.log(data.get("name"))

// let userObj = {
//     userId: 123,
//     userName: "Alok"
// }
// let tokenObj = {
//     token: "abcd123",
//     loginTime: Date.now()
// }

// // userSession.set(userObj,tokenObj)
// let newSession = new Map([
//     [{userId:123},tokenObj]
// ])

// // console.log(newSession.get({userId:123}))
// console.log(newSession)

// const roles = new Map([
//     ["admin",1],
//     ["manager",2]
// ])

// console.log(roles)

// let rolesPermissions = new Map([
//     ["admin",["create","read","update","delete"]],
//     ["viewer",["read"]],
//     ["owner",["create","read","update","delete"]],
//     ["editor",["update","read"]]
// ])





// // console.log(rolesPermissions)
// for (const [key,value] of rolesPermissions) {
//     console.log(key)
//     console.log(value)
// }
// for (const eachkeys of rolesPermissions) {
//     console.log(eachkeys[0])
//     console.log(eachkeys[1])
// }
// // for (const keys of rolesPermissions.keys()) {
// //     console.log(keys)
// // }

// if(rolesPermissions.has('admin'))
//     console.log(rolesPermissions.get('admin'))