// promises

// aap ek promise banaate ho ji ki do states mein se ek state me jaa sakta hai, and wo yaa to resolve hoga ya to reject hoga, ab wo kya hoga ye to wakt btayega. par hme dono ke liye code likhna padta hai


let pr = new Promise(function(res,rej){
    setTimeout(()=>{
        let rn = Math.floor((Math.random()*10));
        if(rn>5){
            res("value resolved " + rn)
        }
        else{
            rej("value rejected " + rn);
        }
        res("Alok");
    },3000);
});

async function abcd(){
    try{
    let val = await pr;
    console.log(val)
}
catch(err){
    console.error(err)
}

}
abcd();