const {funcB} = require("./b.js")

function funcA() {
  funcB();
  console.log("func A is running...")
}
module.exports = {funcA}
