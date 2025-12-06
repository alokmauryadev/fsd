let celeb =  [ [0, 1, 1, 0], [0, 0, 0, 0], [1, 1, 0, 0], [0, 1, 1, 0] ]

let i=0;
let j=celeb.length-1

while(i<j){
    if(celeb[i][j]===1){
        i++
    }
    else{
        j--
    }
}

const candiate = i;

for (let i=0;i<n;i++){
    if(i===candiate) continue;

    if(celeb[candiate][i]===1){
        return -1
    }

    if(celeb[i][candiate] === 0){
        return -1
    }

    return candiate
}

// function isCeleb(i,j){
//     if(arr[i][j]===1){
//         return false
//     }


// }