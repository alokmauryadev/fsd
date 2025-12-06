// promises

// aap ek promise banaate ho ji ki do states mein se ek state me jaa sakta hai, and wo yaa to resolve hoga ya to reject hoga, ab wo kya hoga ye to wakt btayega. par hme dono ke liye code likhna padta hai

let pr = new Promise(function(res,rej){
    setTimeout(()=>{
        let rn = Math.floor((Math.random()*10));
        if(rn>5){
            res(rn)
        }
        else{
            rej(rn);
        }
        res("Alok");
    },1000);
});

pr.then(function(value){
    console.log(`Promise Resolved ${value}`)
}).catch(function(value){
    console.log(`Promise Rejected ${value}`)
})