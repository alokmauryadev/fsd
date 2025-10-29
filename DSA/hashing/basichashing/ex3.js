// a simple way of using Map in Js
let data = new Map()
data.set("name","alok")
data.set("hobby","using laptop")
console.log(data)

data.delete("name")
console.log(data)


let arr = [10,22,23,10,4,32,34]
let hash = new Map()
for (const e of arr) {
    hash.set(e,(hash.get(e) || 0)+1)  
}
let queries = [1,10,34,23]
for (const q of queries) {
    console.log(hash.get(q) || 0)
}
console.log(hash)