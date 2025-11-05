let fetchUser = () =>{
    return new Promise((resolve,reject)=>{
        // resolve("HELLO WORLD")
        reject("You have failed me buddy!")
    }).then((text)=>{
        console.log(text)
    }).catch((text)=>{
        console.log(text)
    })
}
fetchUser()