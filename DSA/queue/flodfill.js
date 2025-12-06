//  my broken code
// let arr = [[2,1,1,0,1],[1,1,0,1,1],[1,0,0,0,1],[1,1,1,1,1],[0,1,0,1,1]]

// let queue =[[0,0]]

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         console.log(`${i}-${j}=${arr[i][j]}`)
//     }
// }

// while(queue.length>0){
//     let rc = queue.shift();
//     let r = rc[0]
//     let c = rc[1]
//     while(arr[r][c]==2){
//         // up, down, right, left
//         let directions = [[r-1,c],[r+1,c],[r,c+1],[r,c-1]]

//         directions.forEach((e)=>{
//             if(e[0]>=0 && e[0]<arr.length && e[1]>=0 && e[1]<arr.length){
//                         if(arr[e[0]][e[1]]!=0){
//             arr[e[0]][e[1]] = 2
//             queue.push(e)
//         }
//             }
//         })
//     }
// }

let arr = [
    [2, 1, 1, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
    [0, 1, 0, 1, 1]
];

// FIX 1: Initialization
// In a real problem, you can't assume [0,0] is the only zombie.
// You must scan the grid to find ALL initial zombies.
let queue = [];
for(let i=0; i<arr.length; i++) {
    for(let j=0; j<arr[0].length; j++) {
        if(arr[i][j] === 2) {
            queue.push([i, j]);
        }
    }
}

// Directions array (Moved outside loop for performance)
// Up, Down, Left, Right
const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

console.log("Starting Infection...");

while (queue.length > 0) {
    // FIX 2: Use shift() for BFS (Queue), not pop() (Stack)
    let [r, c] = queue.shift();

    // FIX 3: Removed the 'while(arr[r][c] == 2)' loop. 
    // We just process this zombie once.

    directions.forEach((dir) => {
        let nr = r + dir[0];
        let nc = c + dir[1];

        // Check Bounds
        if (nr >= 0 && nr < arr.length && nc >= 0 && nc < arr[0].length) {
            
            // FIX 4: The Cannibal Check
            // ONLY infect if it is a HUMAN (1).
            // Do not touch Water (0) or existing Zombies (2).
            if (arr[nr][nc] === 1) {
                console.log(`Zombie at [${r},${c}] infected Human at [${nr},${nc}]`);
                
                // 1. Mutate state immediately (Prevent adding duplicates)
                arr[nr][nc] = 2;
                
                // 2. Add to Queue
                queue.push([nr, nc]);
            }
        }
    });
}

console.log("\nFinal Grid State:");
console.log(arr);