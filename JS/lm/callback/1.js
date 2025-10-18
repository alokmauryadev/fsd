// below is an example to know how asynchronous operation works in js
console.log("Start");

// 1. setTimeout is called.
setTimeout(() => {
  console.log("Callback ready!");
}, 1000); // 1-second timer

// 2. A long, blocking loop that takes 3 seconds.
const startTime = Date.now();
console.log(new Date(startTime).getSeconds())
while (Date.now() < startTime + 3000) {
}

console.log("End");
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0); // Note the zero-millisecond delay

console.log("C");