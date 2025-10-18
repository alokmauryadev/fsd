let arr = [1,13,4,7,11];
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }

let newArr = arr.map((index)=>{
    return index**2
})
console.log(newArr)
const greaterthanSeven = (e)=>{
    if(e>7){
        return true
    }
    else(false)
}
console.log(arr.filter(greaterthanSeven))

let arr2 = [1,2,3,4,5,6]

const red = (a,b)=>{
    return a+b;
}
console.log(arr2.reduce(red))