let n=4;
for (let i = 0; i < n; i++) {
    let p = ""
    for(let j = 0;j<(n-i-1);j++){
        p+= " "
    }
    for(let j=0;j<=i;j++){
         p+= (String.fromCharCode(65 + j))
    }
    for(let j=i;j>=1;j--){
         p+= (String.fromCharCode(65 + j -1))
    }
    console.log(p)
}