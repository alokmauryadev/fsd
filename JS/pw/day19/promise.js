// // new Promise((res, rej) => res(1))
// //   .then((val) => val + 1)
// //   .then((val) => val + 2)
// //   .then((val) => val + 3)
// //   .then((val) => console.log(val))
// //   .catch((e) => console.log(e));

// function steps(){
//     let x = 1;
//     const p = new Promise((resolve,reject)=> resolve(x+1))

//     p.then((val)=>{
//         return val+2
//     }).then((val)=>{
//         console.log(val)
//     }).catch(error=>{
//         console.log(error)
//     })
// }

// steps()

