
const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  // Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    // Computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        // Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
        if (pScore < 3) {
          {// Here is where we call compare hands
          compareHands(this.textContent, computerChoice);
          // Update Images
          playerHand.src = `${this.textContent}.png`;
          computerHand.src = `${computerChoice}.png`;}
        }
        else 
        if (pScore > 2) {
          switch (this.textContent) {
            case 'rock':
              compareHands(this.textContent, 'paper')
              playerHand.src = `${this.textContent}.png`;
              computerHand.src = 'paper.png';
              break;

              case 'paper':
              compareHands(this.textContent, 'scissors')
              playerHand.src = `${this.textContent}.png`;
              computerHand.src = 'scissors.png';
              break;

              case 'scissors':
              compareHands(this.textContent, 'rock')
              playerHand.src = `${this.textContent}.png`;
              computerHand.src = 'rock.png';
              break;
          }
        }}
        , 2000);
        // Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
    
    // Check if a player has won
    if (pScore === 5) {
      endGame("Player");
    } else if (cScore === 5) {
      endGame("Computer");
    }
  };

  const compareHands = (playerChoice, computerChoice) => {
    // Update Text
    const winner = document.querySelector(".winner");

    // Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "Serii!!!";
      return;
    }

    // Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Kamu Menang";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Komputer Menang";
        cScore++;
        updateScore();
        return;
      }
    }

    // Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Komputer Menang";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Kamu Menang";
        pScore++;
        updateScore();
        return;
      }
    }

    // Check for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Komputer Menang";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Kamu Menang";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  const endGame = (winner) => {

if (pScore == 5) {
  window.location.href = "winnerscreen.html"
}

if (cScore == 5) {
  window.location.href = "losecreen.html"
}
};

  // Is call all the inner functions
  startGame();
  playMatch();
};

// Start the game function
game();

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

$(document).ready(function() {
  $(".title").lettering();
  $(".button").lettering();
});

$(document).ready(function() {
  animation();
}, 1000);

$('.button').click(function() {
  animation();
});


function animation() {
  var title1 = new TimelineMax();
  title1.to(".button", 0, {visibility: 'hidden', opacity: 0})
  title1.staggerFromTo(".title span", 0.5, 
  {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
  {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
  title1.to(".button", 0.2, {visibility: 'visible' ,opacity: 1})
}
