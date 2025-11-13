let a = [4,10,15,18,21,28,30]
let b = [3,4,4,5,10,21]

// this is the brute force method I can think first
let intersection = []
// for(let i = 0;i<a.length;i++){
//    for(let j = 0;j<b.length;j++){
//     if(a[i]==b[j]){
//         if(intersection.length ===0 || intersection[intersection.length-1]!=a[i])
//         intersection.push(a[i])
//     }
//    }
// }
// console.log(intersection)


// now let's optimize the approach
let i = 0;
let j = 0;

while(i<a.length && j<b.length){
    if(a[i]==b[j]){
                if(intersection.length ===0 || intersection[intersection.length-1]!=a[i]){
        intersection.push(a[i])
    }
        i++
        j++
    }
    else if(a[i]<b[j]){
        i++
    }
    else{
        j++
    }
}
console.log(intersection)