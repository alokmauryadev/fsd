var msg = "I am a global variable"

// msg- buddle, are you a global variable?

// for(;;){
//    let msg = ("message")
//    console.log(msg)
// }
// function testScope(){
//     var a = "inside the messaeg"
//     console.log(a)
// }
// for (1<2){
//     var b = "name";
// }
// for (let i = 0; i < 2; i++) {
//     // const element = array[i];
//     var b = "inside the for loop"
//     console.log(b)
    
// }
// console.log(b)
// testScope()

// console.log(a)
// let a = "message hu"
// let a = 10;

try{
if(true){
    if(true){
        let b = 20;
        console.log(b)
        console.log(c)
        if(true){
            let c = 10;
            console.log(a)
            console.log(b)
        }
    }
}
}
catch(error){
    // let errorM = new Error("Error messoge")
    console.error(error.message)
}

console.log("end of the program")