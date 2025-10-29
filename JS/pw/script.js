let arr = [1,2,3,4]
let newArr = arr.filter(e=>e%2==0)
console.log(newArr)
// let sum = arr.reduce((s,e)=>e+s)
// console.log(sum)
// // arr1.map(x=>{
    // //     console.log(x*2);
    // // })
    // // const arr = [1, 2, 3, 4];
    // // const arr = [1, 2, 3, 4];
    // arr.reduce((curr, acc,i) => {
        //   console.log('curr:', curr, ', acc:', acc);
        //   return curr + i;
        // }, 0);
        
        // const fibonacci = (n) => {
            //   return [...Array(n)].reduce((acc, v, i) => {
                //     if (i < 2) acc.push(i);
                //     else acc.push(acc[i - 1] + acc[i - 2]);
                //     return acc;
                //   }, []);
                // };
                
                // console.log(fibonacci(10));
                // // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
                
    let arr1 = [2,4,6,8]
    console.log(arr1.join(" "))

    console.log(arr1.includes(2,3))