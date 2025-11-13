// Input Format: n = 4, m = 2, arr[] = {12, 34, 67, 90}

let pages = [1,2,3,4,5]
let m=3

let low = Math.max(...pages)
let high = pages.reduce((a,v)=>a+v,0)
let ans = -1


function allocateBooks(mid){
    // let mid = Math.floor(low+(high-low)/2);
    let count = 1;
    let noPages = 0;

    for (let i = 0; i < pages.length; i++) {
            if(pages[i]>mid){
                return false
            }
    if(noPages + pages[i]>mid){
        count++
        noPages = pages[i]
    }
    else{
        noPages += pages[i]
    }
    }
    return (count<=m)
}

while(low<=high){
    let mid = Math.floor(low+(high-low)/2)
    if(allocateBooks(mid)){
        ans = mid
        high = mid-1
    }
    else{
        low = mid+1
    }
}
console.log(ans)