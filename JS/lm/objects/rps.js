const score ={
    wins: 0,
    losses: 0,
    ties: 0
};
function playGame(playerMove){
    const computerMove = pickComputerMove();
    let result = '';
    if(playerMove==="Paper"){
        if(computerMove ==="Paper"){
            result = "Draw"
        }
        else if(computerMove ==="Rock"){
            result = "Win"
        }
        else{
            result = "Lose"
        }
    } else if(playerMove==="Rock"){
        if(computerMove ==="Paper"){
            result = "Lose"
        }
        else if(computerMove ==="Rock"){
            result = "Draw"
        }
        else{
            result = "Win"
        }
    }
    
    else if(playerMove==="Scissors"){
        if(computerMove ==="Paper"){
            result = "Win"
        }
        else if(computerMove ==="Rock"){
            result = "Lose"
        }
        else{
            result = "Draw"
        }
    }
    if(result==="Win"){
        score.wins += 1;
    } else if(result ==="Lose"){
        score.losses +=1;

    } else if(result==="Draw"){
        score.ties += 1;
    }
    console.log(`You chose ${playerMove} and Computer chose ${computerMove}, Game ${result}
Wins: ${score.wins},Loses: ${score.losses},Ties: ${score.ties}`)
}
function pickComputerMove(){
    let moves = ["Rock","Paper","Scissors"]
    let random = Math.floor(Math.random() * 3);
    return moves[random]
} 

function resetScore(){
    score.losses = 0;
     score.wins = 0;
      score.ties = 0;
    console.log("Score Resetted")
}