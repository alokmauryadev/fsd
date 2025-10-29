//using functional recursion
let str = "ABCDCBA"
function checkStr(i,str,a){
    if(i<0){
        return str===a;
    }
    a += str.slice(i-1,i)
    return checkStr(i-1,str,a)

}
console.log(checkStr(str.length,str,""))
// console.log(str.slice(3,4))

//using js method

function checkStrPalindrome(str){
   return str === str.split("").reverse().join("")
}
console.log(checkStrPalindrome(str))

function checkStrPalindromeTwo(str){
    
}