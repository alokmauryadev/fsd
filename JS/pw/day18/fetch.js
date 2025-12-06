fetch("https://api.adviceslip.com/advice").then((data)=>{
    return data.json()
}).then((res)=>{
    console.log(res)
}).catch((error)=>{
    console.log(error)
})