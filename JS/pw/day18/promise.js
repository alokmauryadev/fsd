 function httpCall() {
    return new Promise((resolve, reject) => {
        console.log("Hi");

        setTimeout(() => {
            // resolve("Done");
            reject(new Error("Manual reject"));
        }, 3000);
    });
}

console.log("Start!");

httpCall()
    .then(null,()=>{
        console.log("Promise Rejected")
    })
    