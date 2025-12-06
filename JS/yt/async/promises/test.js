console.log('1: Script Start');

setTimeout(() => {
  console.log('5: setTimeout (Macrotask)');
}, 2000);

Promise.resolve().then(() => {
  console.log('3: Promise .then() (Microtask 1)');
  setTimeout(()=>{
    console.log("Hello this is promise in 1 then")
  },2000)
}).then(() => {
  console.log('4: Chained .then() (Microtask 2)');
  setTimeout(()=>{
    console.log("This is ptime in microtask 2")
  },2000)
});

console.log('2: Script End');