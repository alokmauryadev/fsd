let scores = [11, 12, 12-15];
let TopScores = [...scores].sort((a,b)=> b-a)
console.log(TopScores)
TopScores.pop()
console.log(TopScores)