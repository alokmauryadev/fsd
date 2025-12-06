// Date 

// what is date?

// dharti suraj ke chakkar 0000 1 365 - 1/4 - 1 year

// js - date (), 20-11-2025, 18-11-2025

// js - object Date()

let date1 = new Date()

// date object

// Univeral Time Zone

// Coordinated Universal Time


// year: 2025, month: feb, date: 23

let date2 = new Date("2025-02-23")
let date3 = new Date(2025,1,30)




// interstaion standard organisation 
console.log(date2)
// console.log(date3)


//  1 Jan 1970 - epoch 
// console.log()
let currentTime = Date.now()

// timer - 5 minute

// 5 minute

// how can I create a time in JS

// start = Date.now()
// time = 5*60*1000
// 
//  current time - start < 5*60*1000

function timer(time){
    let startTime = Date.now()

    let timer;

    timer = setInterval(()=>{
        let currentTime = Date.now()
        console.log(currentTime-startTime)
    },1000)
}

