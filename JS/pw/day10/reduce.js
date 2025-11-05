let str = ["a","b","c","d"]
const result = str.reduceRight((acc,curr)=>acc+curr,"")
// console.log(result)
// const resultstr = str.reverse().join("")
// console.log(resultstr)

// let rs = [];
// nestedArr.forEach(e => {
    //     rs.push(...e)
    // });
    // console.log(rs)

    let nestedArr = [[1,2],[3,4],[5,6],[7,8]]
    let resultarr = nestedArr.reduce((a,v)=>{
        console.log(a)
        console.log(v)
        return a.concat(v)
    },[])
    console.log(resultarr)
// function flatArr(nestedArr) {
//     let result = [];
//     for (const item of nestedArr) {
//         if(Array.isArray(item)){
//             result = result.concat(flatArr(item))
//         }
//         else{
//             result.push(item)
//         }
//     }
//     return result
// }
// let nestedArr = [[1,[2,3,4]],[[3,4,5],4],[5,6],[7,8]];
// console.log(flatArr(nestedArr)); // Output: [1, 2, 3, 4, 3, 4, 5, 4, 5, 6, 7, 8]

// let nestedArr = [[1,[2,3,4]],[[3,4,5],4],[5,6],[7,8]];

// The 'Infinity' argument tells .flat() to flatten all levels,
// no matter how deep they are.
// let flattened = nestedArr.flat(Infinity);

// console.log(flattened);
// Output: [1, 2, 3, 4, 3, 4, 5, 4, 5, 6, 7, 8]

// Example usage:
