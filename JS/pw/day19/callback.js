setTimeout(()=>{
    console.log("I am th efirst callback")
    setTimeout(()=>{
        console.log("I'm the second callback")
        setTimeout(()=>{
            console.log("I'm the third calllback")
        },3000)
    },2000)
},1000)

// when we have multiple nested callbacks is called a callback hell