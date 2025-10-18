const today =  new Date()
console.log(typeof today)
console.log(today)
console.log(`String Format ${today.toISOString()}`)
console.log(`In Locale Date String Format ${today.toLocaleDateString()}`)
console.log(`In Locate String Format ${today.toLocaleString()}`)
console.log(`In date string fomrat String Format ${today.toDateString()}`)
console.log(`in ISO string format String Format ${today.toISOString()}`)

const year = new Date();

console.log(year.getSeconds())
let myDate = new Date("August, 25 ,2006 15:00:00")
console.log(myDate.getDay())

let myTimeStamp = Date.now()
const date = new Date(myTimeStamp);

console.log(Math.floor(Date.now()/1000))
console.log(date.toLocaleString())


// console.log(myTimeStamp.toString())
// console.log(myDate.getTime())
