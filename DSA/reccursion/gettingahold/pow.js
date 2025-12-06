// function pow(x,n){
//     if(n<0){
//         return 1/x*pow(x,n+1)
//     }
//     else if(n===0){
//         return 1
//     }
//     else{
//         return x*pow(x,n-1)
//     }
// }

// console.log(pow(2,-2))

// let's optimize this  function using binary exponentiation

function pow(x,n){
    if(n===0) return 1;
    if(n<0) return 1/pow(x,-n)

    if(n%2===0){
        let half = pow(x,n/2)
        return half*half
    }
    else{
        return x*pow(x,n-1)
    }
}

// console.log(pow(2,-10))

// so it works, and how let's understand it

// if I have to find 2**10, I don't have to multiple 2, 10 times, it same as multiplying 2, 5 times and then square it
// we'll use this concept recursively to get power of any number in O(logn) steps,

// first we'll check if the value is 0, if yes, then return 1
// then check if value is negative, because if negative, then we can just say that result is 1/pow(x,-n)
// as we know result is always 1/number to it power in positive
// now if value is positive, we have to check if it's value is even or odd
// if even, it means we have to calculate it's exponent of half part and multiply it by itself
// and if odd, just subtract the n by 1-and multiple, get's it's power and multiply it by itself, as generally that is the answer
// this was the explanation for the above problem

/**
 * As we have seen the how recursive works, let's create a more better approach which is a iterative logic
 * 
 */

// function pow(x,n){
//     if (n===0) return 1;
//     if(n<0){
//         x=1/x
//         n=-n
//     }
//     let ans =1;
//     while(n>0){
//         if((n%2)===1){
//             ans=ans*x;
//         }
//         x = x*x

//         n = Math.floor(n/2)
//     }
//     return ans
// }

// console.log(pow(2,-10))
