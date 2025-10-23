n=10;
let n1 = (n/2)
for(let i = 0; i<n1;i++){
    let p ="";
    for(let j=0;j<n1-i;j++){
        p += "*"
    }
        for(let j=0;j<(2*i);j++){
        p += " "
    }
        for(let j=0;j<n1-i;j++){
        p += "*"
    }
        console.log(p)
}
for(let i = 0; i<n1;i++){
    let p ="";
    for(let j=0;j<=i;j++){
        p += "*"
    }
        for(let j=0;j<(n-2*(i+1));j++){
        p += " "
    }
    for(let j=0;j<=i;j++){
        p += "*"
    }
        console.log(p)
}