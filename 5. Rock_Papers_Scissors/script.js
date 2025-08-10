let userScore = 0;
let computerScore = 0;

const compscore = document.querySelector('#Comp_Score');
const userscore = document.querySelector('#Your_Score');

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
//get the user choice
choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id;
        playGame(userChoice);
    })
})

// Generate computer choice
const computerChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndx = Math.floor(Math.random() * options.length);
    return options[randomIndx];
}

// game logic
const playGame = (userChoice) => {
    const computerSelection = computerChoice();

    if (userChoice === computerSelection){
        // its a draw
        msg.innerText = `It's a draw! Both chose ${userChoice}`;
    } else if (
        userChoice === 'rock' && computerSelection === 'scissors'
        || userChoice === 'paper' && computerSelection === 'rock'
        || userChoice === 'scissors' && computerSelection === 'paper'
    ){
        userScore++;
        userscore.innerText = userScore;
        msg.innerText = `You won \n Computer choice was ${computerSelection}`;
    } else {
        computerScore++;
        compscore.innerText = computerScore;
        msg.innerText = `You lost \n Computer choice was ${computerSelection}`;
    }
}
