// javscript

// let's get more understanding of synchronous(blocking) code

/* 
Imagine making a sandwich. We do each step in a order.
Get bread.

Get peanut butter.

Spread peanut butter on bread.


*/
console.log("First: Getting the bread.");
console.log("Second: Getting the peanut butter.");
console.log("Third: Making the sandwich.");


// above is a example of a asynchronous js, it means, second step will will only happen when the fisrt function is completed


// it means output will always be in a same order, as the given. 

// imagine we are doing a task which will take some time, so we don't have to wait and watch for that one to finish and the executing next task

// in javascript we do something called setTimeout, which runs a specific task for a fixed interval of time
console.log("First: Put water on the stove.");

// This will happen later, after a 2-second "delay"
setTimeout(() => {
  console.log("Third: Water has boiled! Put pasta in.");
}, 2000); // 2000 milliseconds = 2 seconds

console.log("Second: Chop vegetables for the sauce.");


/*
When JavaScript encounters setTimeout, it doesn't wait. It says, "Okay, browser/environment, you handle this timer. I'm moving on." It hands the task off and immediately executes the next line, which is console.log("Second: ...").
*/