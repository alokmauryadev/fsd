let arr = [4,1,2,94,34,23]

const hash={}
for (const num of arr) {
    hash[num] = (hash[num] || 0) + 1
}
let tofind="abcde"
for (const key in hash) {    
    const element = hash[key];
    console.log(element)
}
console.log("----------------")
for (const element of tofind) {
    console.log(hash[element] ?? 0)
}