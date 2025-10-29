n=4
for(let i=0;i<2*n-1;i++){
    let p = ""
    for(let j=0;j<2*n-1;j++){
    let top=i
    let left=j
    let bottom=2*n-1-1-i
    let right=2*n-1-1-j
    value =  n-Math.min(top,left,bottom,right)
    p += value;
}
console.log(p)
}