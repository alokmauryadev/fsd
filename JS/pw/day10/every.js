let arr = [3,7,9,11]

function isEven(arr){
    return arr.some((e)=>{
        return e%2==0;
    })
}
console.log(isEven(arr));




let marks = [60,51,60,70,80]

function checkfail(arr){
    let isFail = arr.some((e)=>{
        return e<=50;
    })
    if(!isFail){
        return "Everyone Pass"
    }
    else{
       return  "Eveyone Fail"
    }
}


console.log(checkfail(marks));