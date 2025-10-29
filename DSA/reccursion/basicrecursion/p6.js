// Problem statement: Given a number ‘N’, find out the sum of the first N natural numbers.

let n = 10;
// using for loop
let sum2 = 0;
for(let i=1;i<=n;i++){
    sum2 += i
}

console.log(sum2)

//using sum of n numbers formula

let sum3 = (n*(n+1))/2
console.log(sum3)

//using a recursive function using a global variable
let sum = 0;
function SumN(i,n){
    if(i>n){
        return
    }
    sum += i;
    SumN(i+1,n)
}
SumN(1,n)
console.log(sum)

//paramatarised way

function sumTwo(i,sum){
    if(i<1){
     console.log(sum);
        return
    }
    sumTwo(i-1,sum+i)
}
sumTwo(n,0)

// functional way

function sumThree(n){
    if(n===0){
        return 0;
    }
    return n + sumThree(n-1)
}

let d= sumThree(n)
console.log(d)
