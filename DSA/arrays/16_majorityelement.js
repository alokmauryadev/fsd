let arr = [3,9,7,9,9,9,7,9,8,9]
let candidate = arr[0]
let count = 1
for (let i = 1; i < arr.length; i++) {
    if(arr[i]!=candidate){
        count--
    }
    else{
        count++
    }
    if(count===0){
        candidate=arr[i]
        count=0;
    }

}
console.log(candidate)