let n = [4,2,4,53,89,12,9]

for (let i = 1; i < n.length; i++) {
    let key = n[i]
    let j=i-1
    while(j>=0 && n[j]>key){
        n[j+1] = n[j]
        j--
    }
    n[j+1] = key
}
console.log(n)