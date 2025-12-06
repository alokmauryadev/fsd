let iS = "This is decent"
let str = "This is decent particle"
// let result = ""

// let oS = iS.split(" ").reverse().join(" ")

// function reverse(is){
//     let splitStr = is.split(' ')
//     let result = ""
//     let n = splitStr.length-1
//     for (let i = n; i>=0 ; i--) {
//         result += splitStr[i]
//         if(i!=0){
//             result += " "
//         }
//     }
//     return result
// }

// console.log(reverse(iS))

function reverseSwap(str){
    let words = str.split(" ");
    let left = 0
    let right = words.length-1
    while(left<right){
        [words[left],words[right]] = [words[right],words[left]]
        left++
        right--
    }

    return words.join(" ")
}

console.log(reverseSwap(str))
