const score = JSON.parse(localStorage.getItem('score'));
const games = JSON.parse(localStorage.getItem('gameInfo'));

let game = JSON.parse(localStorage.getItem('gameInfo')) || {
    resetAmount: 0,
    gamesPlayed: 0
};

let gettingScore = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0,
    resetAmount: 0
};
undateScore();
updateGameInfo();

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
    return computerMove;
}

document.querySelector('.rock-button')
    .addEventListener('click', () => {
        playGame('rock')
    })

document.querySelector('.paper-button')
    .addEventListener('click', () => {
        playGame('paper')
    })

document.querySelector('.scissors-button')
    .addEventListener('click', () => {
        playGame('scissors')
    })

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playGame('rock');
    } else if (event.key === 'p') {
        playGame('paper');
    } else if (event.key === 's') {
        playGame('scissors');
    } else if (event.key === 'a') {
        autoPlay();
    }
});

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
    if (!isAutoPlaying) {
        intervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1 * 1000);
        isAutoPlaying = true;
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}

function playGame(playerMove) {
    game.gamesPlayed += 1;
    let result = '';
    const computerMove = pickComputerMove();

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose 😢, try again';
        } else if (computerMove === 'paper') {
            result = 'You win! 🎊';
        } else if (computerMove === 'scissors') {
            result = 'Tie.';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win! 🎊';
        } else if (computerMove === 'paper') {
            result = 'Tie.';
        } else if (computerMove === 'scissors') {
            result = 'You lose 😢, try again';
        }
    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';

        } else if (computerMove === 'paper') {
            result = 'You lose 😢, try again';
        } else if (computerMove === 'scissors') {
            result = 'You win! 🎊'
        }
    }
    if (result === 'You win! 🎊') {
        score.wins += 1;
    } else if (result === 'You lose 😢, try again') {
        score.losses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));
    localStorage.setItem('gameInfo', JSON.stringify(game));
    undateScore();
    updateGameInfo();
    document.querySelector('.result-info').
        innerHTML = result;
    
    document.querySelector('.picked-info').
        innerHTML = `You
<img src="images/${playerMove}-emoji.png"
class="move-icon">
<img src="images/${computerMove}-emoji.png"
class="move-icon">
Computer`;
}
function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    game.resetAmount += 1;
    console.log('Score Reset');
    undateScore();
    updateGameInfo();
    return score;
}

function undateScore() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
function updateGameInfo() {
    document.querySelector('.js-games-info')
        .innerHTML = `Amount Of Resets: ${game.resetAmount}, Games Played: ${game.gamesPlayed}`;
}