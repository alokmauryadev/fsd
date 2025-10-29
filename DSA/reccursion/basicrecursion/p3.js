// print from n to 1
let n = 10;

count = n+1;

function printInt(num){
    if(count<=1){
        return
    };
    count--
    console.log(count)
    printInt(num)
}
printInt(n)