// let now = new Date();
// console.log(now.toLocaleString('default',{month:"short"}))
// // console.log(now)

// // console.log(now.now())

let setTimer = ()=>{
    let startTime = Date.now();

    const tick = () => {
        let currentTime = Date.now();
        let timePassed = Math.floor((currentTime - startTime) / 1000);

        console.log(timePassed);

        if (timePassed >= 3) clearInterval(timer);
    };

    tick();

    let timer = setInterval(tick, 1000);
}

setTimer();
