let arr = [7,1,5,3,6,4]

let profit = 0;
let buyat = arr[0]

for (let i = 1; i < arr.length; i++) {
    if(arr[i]<buyat){
        buyat = arr[i]
    }
    if((arr[i]-buyat)>profit){
        profit = arr[i]-buyat
    }
}

console.log(profit)