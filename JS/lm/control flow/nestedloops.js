const board = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['O', 'O', 'X']
];

// The outer loop iterates through each ROW array
for (let i = 0; i < board.length; i++) {
  const row = board[i];
  console.log(`Processing Row ${i}: [${row}]`);
  
  // The inner loop iterates through each ELEMENT in the current row
  for (let j = 0; j < row.length; j++) {
    const cell = row[j]; // or board[i][j]
    console.log(`  Cell at [${i},${j}] is ${cell}`);
  }
}

for (let i = 0; i%2==0; i++) {
  console.log(i)
  
}