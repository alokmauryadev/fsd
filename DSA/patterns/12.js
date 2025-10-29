let n = 4;
for (let i = 1; i <=n; i++) {
    let p = ""
    for(let j=1;j<=(i);j++){
        p +=j
    }
        for(let j=1;j<=2*(n-i);j++){
            p += " "
    }
    for(let j=i;j>=(1);j--){
        p +=j
    }
    console.log(p)
}