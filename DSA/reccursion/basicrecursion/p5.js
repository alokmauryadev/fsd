// let's print form N to 1, without 
let n = 10;

function printN(i,num){
    if(i>n){
        return
    }
    printN(i+1,num)
    console.log(i)

}
printN(1,n)