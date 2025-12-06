// task1
console.log("Start");

/**
 * in real life web applications we work with lot of different use cases, there are multiple tasks which takes a lot of time, like
 * making a network call, databsecall, in-code data processing, interaction with some packages, etc
 * as we know javascript is a single threaded language
 * 
 */

setTimeout(()=>{
    console.log("I am asynchronous js")
})
function longTask(timetoWait){
    const start = Date.now();
    while(Date.now()-start<timetoWait){
    }
    console.log("HI")
}
longTask(2000)

console.log('End')