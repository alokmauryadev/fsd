function log (message){
    console.log(`[LOG]: ${message}`)
}
// let obj = {
//     name: "Alok"
// }
let PI = "3.15"
// module.exports = {log, obj}

module.exports = {log}
exports = {PI}
console.log(module.exports)
console.log(exports)
// console.log(module.exports)


