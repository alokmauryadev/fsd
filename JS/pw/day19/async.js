// // async function betterSteps(){
// //     try{
// //         let x = 1;
// //         x = await Promise.reject((x+1))
// //         x = await Promise.resolve((x+2))
// //         console.log(x)
// //     }
// //     catch(e){
// //         console.log("First promise failed")
// //     }
// // }
// // betterSteps()

// // ❌ DANGEROUS
// // new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         throw new Error("I will crash the program!"); // The Promise can't see this!
// //     }, 1000);
// // }).catch(e => console.log(e)); // This catch will NEVER fire.

// Promise.reject("ok").finally(()=>{
//     console.log("inside the second finally block")
// })
// .then(msg=>console.log(msg)).then(()=>{
//     console.log("Second then function")
// }).catch(error=>console.log(error)).finally(()=>{
//     console.log("Inside the finally block!")
// }).then(()=>{
//     console.log("Inside the third then block")
// }).finally(()=>{
//     console.log("Inside new funtion")
// })

