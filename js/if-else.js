let playerGame = confirm("Shall we play Rock, Paper, Scissors?");
if (playerGame) {
    let playerChoice = prompt("Please enter Rock, Paper, or Scissors:");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer =
                computerChoice === 1 ? "rock" :
                computerChoice === 2 ? "paper" : "scissors";

            // Store the result in a variable
            let result =
                playerOne === computer
                    ? "Tie game!"
                    : playerOne === "rock" && computer === "paper"
                    ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                    : playerOne === "paper" && computer === "scissors"
                    ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                    : playerOne === "scissors" && computer === "rock"
                    ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                    : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;

            alert(result);

            let playAgain = confirm("Play Again?");
            playAgain ? location.reload() : alert("Ok, thanks for playing!");
        } else {
            alert("You didn't enter Rock, Paper, or Scissors.");
        }
    } else {
        alert("I think you changed your mind.");
    }
} else {
    alert("Okay, maybe next time.");
}
