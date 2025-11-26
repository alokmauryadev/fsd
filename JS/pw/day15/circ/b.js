const {funcA} = require("./a.js")
function funcB() {
  funcA();
    console.log("func B is running...")
}
module.exports = {funcB}