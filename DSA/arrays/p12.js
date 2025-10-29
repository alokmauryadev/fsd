//using hash method
let arr = [4,1,2,1,2]
let hash ={}
for(let i=0;i<arr.length;i++){
    hash[arr[i]]= (hash[arr[i]] || 0) +1
}
for (const key in hash) {
    if(hash[key]==1){
        console.log(key)
    }
}

// using xor method
let arr2 = [4, 1, 2, 1, 2];
let single = 0;

for (let i = 0; i < arr2.length; i++) {
    single = single ^ arr2[i];
}

console.log(single); // Output: 4
