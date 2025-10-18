const alok = "alok maurya";
const repocount = 50;
console.log(`${alok} have ${repocount} Repo Count on github`);

// above method is creating strings using string interpolation method.

// another method to create a string using a string class

const greet = new String("Hello Everyone, Myself Alok Maurya");

console.log(greet[5])

console.log(greet.__proto__)

console.log(greet.length)
console.log(greet.toUpperCase())
console.log(greet.toLowerCase())


console.log(greet.charAt(0))
console.log(greet.indexOf("A"))

// methods of string
const newString = greet.substring(0,4)
console.log(newString);

const anotherString = greet.slice(-33,4)
console.log(anotherString);


const newStringONe = "  alok   "
console.log(newStringONe)
console.log(newStringONe.trim())

const newstring = "alokmaurya"
const spt = newstring.split(" ")
console.log(spt)