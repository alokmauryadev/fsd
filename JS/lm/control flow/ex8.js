function findWinner(board) {
    for(let i=0; i<3; i++){
        if(board[i][0] !== null && board[i][0] === board[i][1] && board[i][1] === board[i][2]){
            return `${board[i][0]}`
        }
    }
    
    for (let j = 0; j < board.length; j++) {
        const element = board[j];
        if(board[0][j] !== null && board[0][j] === board[1][j] && board[1][j]=== board[2][j]){
            return `${board[0][j]}`
        }
    }
     if(board[0][0] !== null && board[0][0] === board[1][1] && board[1][1] === board[2][2]){
            return `${board[0][0]}`
        }  
    if(board[0][2] !== null && board[0][2] === board[1][1] && board[1][1] === board[2][0]){
            return `${board[0][2]}`
        }
    let isDraw = true;
    for (let i = 0; i < 3; i++) { // FIX: Corrected loop bounds
        for (let j = 0; j < 3; j++) { // FIX: Corrected loop bounds
            if (board[i][j] === null) {
                // If we find any empty spot, it's not a draw. The game is in progress.
                isDraw = false;
                break; // Exit the inner loop, no need to check further
            }
        }
        if (!isDraw) {
            break; // Exit the outer loop as well
        }
    }

    if (isDraw) {
        return 'draw'; // The board is full and no winner was found
    }

    // If no winner and it's not a draw, the game is still in progress.
    return null;
}

const boardXWins = [
  ['X', 'null', 'O'],
  ['null', 'X', 'null'],
  ['O', 'null', 'X']
];



const boardOWins = [
  ['X', 'O', 'O'],
  ['X', 'O', null],
  ['O', 'O', 'X']
];

const boardDraw = [
  ['X', 'O', 'X'],
  ['X', 'O', 'O'],
  ['O', 'X', 'X']
];

const boardInProgress = [
  ['X', 'O', null],
  ['X', null, 'O'],
  ['O', null, 'X']
];

console.log(`Board 1 Winner: ${findWinner(boardXWins)}`);       // Expected: X
console.log(`Board 2 Winner: ${findWinner(boardOWins)}`);       // Expected: O
console.log(`Board 3 Winner: ${findWinner(boardDraw)}`);       // Expected: draw
console.log(`Board 4 Winner: ${findWinner(boardInProgress)}`); // Expected: null