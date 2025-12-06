let arr1 = [1,2,3,4,5]
let arr2 = [2,3,4,4,5]
let result = []
let i=0;
let j=0;


while(i<arr1.length && j<arr2.length){
    if(arr1[i]<=arr2[j]){
        if(result.length ===0 || result[result.length-1]!=arr1[i]){
        result.push(arr1[i])}
        i++
    }
    else{
        if(result.length ===0 || result[result.length-1]!=arr2[j]){
        result.push(arr2[j])}
        j++
    }
    }

while(i<arr1.length){
    if(arr1[i]<=arr2[j]){
        if(result.length ===0 || result[result.length-1]!=arr1[i]){
        result.push(arr1[i])}
        i++
    }
}

while(j<arr2.length){
 if(result.length ===0 || result[result.length-1]!=arr2[j]){
        result.push(arr2[j])}
        j++
}

console.log(result)