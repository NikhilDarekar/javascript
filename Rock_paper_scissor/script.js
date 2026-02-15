const buttons = document.querySelectorAll('button')

const playerScore = document.getElementById('user-score')

const compScore = document.getElementById('computer-score')

const resultE1 = document.getElementById('result')

let computerScore = 0 
let playerScores= 0

buttons.forEach( (button) => {
    button.addEventListener('click', () => {
        const result = playRound(button.id, computerPlay())
        resultE1.textContent = result
    });
});

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerChoise, computerChoise){
    if(playerChoise == computerChoise){
        return ("its a tie")
    }
    else if(
        (playerChoise == 'rock' && computerChoise == 'paper') ||
        (playerChoise == 'scissor' && computerChoise == 'rock') || 
        (playerChoise == 'paper' && computerChoise == 'scissor')){
            return ("computer won! " + computerChoise + " beats " + playerChoise)
            computerScore++
            compScore.textContent = computerScore
        }
    else{
        return ('You won! '+ playerChoise + ' beats ' + computerChoise)
        playerScores++
        playerScore.textContent = playerScores
    }
    
}