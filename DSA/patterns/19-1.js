let n = 10;
for (let i = 0; i <n; i++) {
    let p ="";
    if(i<5){
        for(let j = 0;j<(n-i-1);j++){
    p += "*"
}
    //star
for(let j = 0;j<(2*i+1);j++){
    p += " "
}
    //space
for(let j = 0;j<(n-i-1);j++){
    p += "*"
}
    }
    if(i>=5){
            if(i==5){
        continue
    }
for(let j = 0;j<i;j++){
    p += "*"
}
    //star
for(let j = 0;j<2*(n-i)-1;j++){
    p += " "
}
    //space
for(let j = 0;j<i;j++){
    p += "*"
}
    }
    //space
console.log(p)
}
