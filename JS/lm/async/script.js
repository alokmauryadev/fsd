console.log("A");

const myPromise = new Promise((resolve, reject) => {
  console.log("B");
  resolve("D");
});

setTimeout(() => {
  console.log("E");
}, 0);

myPromise.then(result => {
  console.log(result);
});

console.log("C");