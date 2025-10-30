// function countForme(){
//     let c=0;
//     return function(){
//         c++
//         console.log(c);
//     }
// }
// let fnc = countForme();
// fnc();
// fnc();
// fnc();
// let fnc2 = countForme();
// fnc2();
// fnc2();
// fnc2();
// fnc2();
// fnc2();

function clickLimiter(){
    click = 0;
    return function(){
        if(click<5){
            click++
            console.log("Clicked for",click,"times")
        }
        else{
            console.error("Rate limit exceeded")
        }
    }
}
let fnc = clickLimiter();
fnc();
fnc();
fnc();
fnc();
fnc();
fnc();

// we can't access the value of click and change it outside the function

// so it can only be accessible and used by the function return inside the function

