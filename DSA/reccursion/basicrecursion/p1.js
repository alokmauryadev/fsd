// print name 5 times

// solution is implemented without count variable.
// let count = 0

let n = 5;
function printName(i,n,name){
    if(i>n){
        return 
    }
    console.log(`Your name is ${name}`)
    // count++
    printName(i+1,n,name)
}
printName(1,n,"Alok")