function startGame() {

    let playAgain = "yes";

    while (playAgain === "yes") {
        let number = Math.floor(Math.random() * 100) + 1;

        let guess;
        while (guess != number) {

            guess = Number(prompt("Guess a number between 1 and 100:"));

            if (guess > number) {
                alert("Too high!");
            }
            else if (guess < number) {
                alert("Too low!");
            }
            else {
                alert("Correct!");
            }
        }
        playAgain = prompt("Do you want to play again? (yes/no)");
    }

    alert("Thanks for playing");
}