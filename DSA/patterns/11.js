let n = 5;
for(let i=1;i<=n;i++){
    let p=""
    for (let j = 1; j <=i; j++) {
        if(i%2==0&&j%2==1){
            p+="0";
        }
        else if(i%2==1&&j%2==0){
            p+="0";
        }
        else if(i%2==0&&j%2==0){
            p+="1";
        }
        else if(i%2==1&&j%2==1){
            p+="1";
        }
        
    }
    console.log(p)
}
// 2nd logic
for(let i=1;i<=n;i++){
    let p=""
    for (let j = 1; j <=i; j++) {
        if(i%2==j%2){
            p+="1";
        }
        else{
            p+="0";
        }
    }
    console.log(p)
}

//3rd logic
for(let i=1;i<=n;i++){
    let p=""
    for (let j = 1; j <=i; j++) {
if (((i + j) & 1) === 0) {
    p += "1";
} else {
    p += "0";
}
    }
    console.log(p)
}
