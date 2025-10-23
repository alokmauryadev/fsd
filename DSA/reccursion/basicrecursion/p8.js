let arr = [1,2, 4 ,4, 5]

function reverseArray(arr){
    // let newArr = []

    function helper(i,a){
          if(i<0){
            arr
        return 
    }
   a.push(arr[i])
    return helper(i-1,a)
    }

    return helper(arr.length-1,[])
 
}
let newRev = reverseArray(arr)
console.log(newRev)

// I have to return a new array, not to use a global array newArr = 