let n = 5;
for (let i = 0; i <n; i++) {
    let p ="";
    //space
for(let j = 0;j<i;j++){
    p += " "
}
    //star
for(let j = 0;j<2*(n-i)-1;j++){
    p += "*"
}
    //space
for(let j = 0;j<i;j++){
    p += " "
}
console.log(p)
}

