// check if array is sorted

let numbers = [1,2,2,8,4,8,10]

let isSorted = true;

for (let i = 0; i < numbers.length-1; i++) {
    if(numbers[i]>numbers[i+1]){
        isSorted = false;
        break
    }

}

console.log(isSorted)