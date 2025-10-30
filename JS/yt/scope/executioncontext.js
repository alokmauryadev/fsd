// execution context - 


// js sabse pahle jais hi aapka function dekhta hai sabse pahle js banaata hai exectution context, ye ek process hai jo ki do different phases mein chlta hai, memory phase and doosre ka naam hai execution phase



let vari =  function(){
    var a = 10;
    var b = 20;
    var c = 10;
    console.log(a)
    console.log(b)
    console.log(c)
}

vari();

let arr = ()=>{
    console.log("This is a arrow function","abdsfs",10,20,2023,3221,"asfasdfs")
}

arr();

