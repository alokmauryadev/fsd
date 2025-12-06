function kuchhDerBadChalunga(fnc){
    let time = Math.floor(Math.random()*10)*1000
    setTimeout(()=>{
        fnc(time)
    },time)
}
kuchhDerBadChalunga(function(time){
    console.log("Hey")
    console.log(time/1000)
})

// when we send a function inside a function, it's called a callback

