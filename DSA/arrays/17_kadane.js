let arr = [-2,1,-3,4,-1,2,1,-5,4] 

let currentSum = arr[0]
let maxSum = arr[0]

let currInd = [0]
let maxInd = [0]

for (let i = 1; i < arr.length; i++){
    currentSum = Math.max(arr[i],currentSum + arr[i])
    if(currentSum==arr[i]){
        currInd = [i]
    }
    else{
        currInd[1] = i
    }

    
    if(currentSum>maxSum){
        maxSum = Math.max(currentSum,maxSum)
        console.log(currInd)
        maxInd = [...currInd]
        console.log(maxInd)
    }
}
console.log(maxSum)
console.log(maxInd)