let n=5
for (let i = 0; i < n; i++) {
    let p = ""
    for(let j = 0;j<=i;j++){
        p+= (String.fromCharCode(65 + i))
    }
    console.log(p)
}

