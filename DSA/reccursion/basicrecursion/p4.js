let n = 10;

function printN(i,num){
    if(i<1){
        return
    }
    printN(i-1,num)
    console.log(i)

}
printN(n,n)