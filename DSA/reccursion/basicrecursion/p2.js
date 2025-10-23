// print from 1 to n
let n = 10;

count = 0;

function printInt(num){
    if(count>=num){
        return
    };
    count++
    console.log(count)
    printInt(num)
}
printInt(n)