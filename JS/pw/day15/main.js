const add = require("./math.js");
console.log(add(4, 5));
// console.log(math.add(4,5))
// console.log(math.add(3,4))
// console.log(math.subtract(3,4))
console.log(this === module.exports)