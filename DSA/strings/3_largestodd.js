let str = "000246070"

function returnLargestOdd(str){
let j = str.length-1
while(str.charAt(j)%2==0 && j>=0){
    j--
}
if(j<0){
    return ""
}
else{
    let oddStr = str.substring(0,j+1)
    console.log(oddStr)
    return oddStr.replace(/^0+/, "")

}
}
console.log(returnLargestOdd(str))

