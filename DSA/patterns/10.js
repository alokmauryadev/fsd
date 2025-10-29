let n = 5;
for (let i = 1; i <(2*n); i++) {
    let p ="";
    if(i<=n){
    for(j=1; j<=i;j++){
        p+="*"
    } 
    }
    else if(i>n){
        for(j=1;j<=((2*n)-i);j++){
               p+="*"
        }
    }
    console.log(p)
}
