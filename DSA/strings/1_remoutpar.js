let s = "(())()";
let result = "";
let count = 0;

for (const e of s) {
    if(e == "("){
        if(count!==0){
            result += e
        }
        count++
    }
    else if(e == ")"){
        if(count!==1){
            result += e
        }
        count--
    }
    else{
        result += e
    }
}
console.log(result)

// var removeOuterParentheses = function(s) {
//     let result = "";
//     let depth = 0;

//     for (const char of s) {
//         if (char === "(") {
//             if (depth > 0) result += char;
//             depth++;
//         } else {2
//             depth--;
//             if (depth > 0) result += char;
//         }
//     }

//     return result;
// };
