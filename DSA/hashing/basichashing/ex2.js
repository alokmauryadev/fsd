let str = "aabcdefgnh"

// using array to store string in a hash map and access them
let hash = [];
for (const i of str) {
    hash[i.charCodeAt(0)-97] = (hash[i.charCodeAt(0)-97] || 0) +1;
}

// pre loading of data

console.log(hash)


let queries = ["a","d","g","h"]
for (const q of queries) {
    console.log(hash[q.charCodeAt(0)-97])
}