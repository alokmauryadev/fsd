function timer(time){
    let startTime = Date.now()
    let timer = setInterval(()=>{
        let currentTime = Date.now()
        let diff = currentTime-startTime
        if(diff>3000){
    clearInterval(timer)
    return;
}
console.log(currentTime-startTime)
 },1000)
}

// fundamental - js

// this - value, 
// fetch
// async/await = promises - then
// fundamental js 

// snake game = 


timer()