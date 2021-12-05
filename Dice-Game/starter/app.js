/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

- 6 coding challenge included
*/

'use strict';
//// Selecting Elements
const score0El = document.querySelector('#score-0');
const score1El = document.querySelector("#score-1");
const current0El = document.getElementById("current-0")
const current1El = document.getElementById("current-1")
const dice0El = document.getElementById("dice-1");
const dice1El = document.getElementById("dice-2");
const btnNew = document.querySelector('.btn-new')
const btnRoll = document.querySelector('.btn-roll')
const btnHold = document.querySelector('.btn-hold')
const overlay = document.querySelector('.overlay');

//// for changing background color of selected player we are selecting that class
const bgPlayer0El = document.querySelector(".player-0-panel");
const bgPlayer1El = document.querySelector(".player-1-panel");

const winMsg0El = document.querySelector(`.add-winning-message-0`)
const winMsg1El = document.querySelector(`.add-winning-message-1`)

const modelClose = document.querySelector(".close-modal");
const btnSubmit = document.querySelector(".btn-submit");

// const score1 = document.getElementById("score--1");
let scores, currentScore, activePlayer, playing


setTimeout(() => {
  document.querySelector(".modal").classList.remove('hidden');
  document.querySelector(".overlay").classList.remove('hidden');
  dislayPlayerNamesModal();
}, 10*60000);

const dislayPlayerNamesModal = () => {
  // debugger;
  document.querySelector(".modal-1").classList.add('hidden');
  document.querySelector(".overlay-1").classList.add('hidden');
}

btnSubmit.addEventListener("click", ()=> {
  const name_1 = document.querySelector(".player_val_1").value;
  const name_2 = document.querySelector(".player_val_2").value;
  if(name_1 == "" && name_2 == ""){
    document.querySelector(".player_val_1").style.border = '1px solid red'
    document.querySelector(".player_val_2").style.border = '1px solid red'
  } else {
    document.querySelector("#name-0").textContent = name_1;
    document.querySelector("#name-1").textContent = name_2;
    document.querySelector(".modal-1").classList.add('hidden');
    document.querySelector(".overlay-1").classList.add('hidden');
  }
})

document.querySelector(".close-modal-1").addEventListener("click", ()=> {
  document.querySelector(".modal-1").classList.add('hidden');
    document.querySelector(".overlay-1").classList.add('hidden');
})






const init = () => {
  //// Starting conditions
  // score0El.textContent = 0;
  // score1El.textContent = 0;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  dice0El.classList.add('hidden');
  dice1El.classList.add('hidden');
  bgPlayer0El.classList.remove('winner');
  bgPlayer1El.classList.remove('winner');
  bgPlayer0El.classList.add('active');
  bgPlayer1El.classList.remove('active');
  winMsg0El.classList.add('hidden');
  winMsg1El.classList.add('hidden');
  btnRoll.classList.remove('hidden');
  btnHold.classList.remove('hidden');
}

init();

const SwitchPlayer = () => {
  document.getElementById(`current-${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  bgPlayer0El.classList.toggle('active');
  bgPlayer1El.classList.toggle('active');
}

/// Rolling dice functionality
btnRoll.addEventListener('click', () => {
  if (playing) {
    //// 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //// 2. Display dice
    dice0El.classList.remove('hidden');
    dice0El.src = `dice-${dice}.png`
    // console.log(dice)

    //// 3. Check for rolled 1
    if (dice !== 1) {
      //// Add dice to current score

      currentScore += dice;
      document.getElementById(`current-${activePlayer}`).textContent = currentScore;

    } else {
      /// if true, switch to next player

      /// here we are changing active player if its 0 then change to 1 and vice versa
      SwitchPlayer();


      // currentScore += dice;
      // current1El.textContent = currentScore;
    }
  }

});


//// Holding functionality 
btnHold.addEventListener("click", () => {
  if (playing) {
    ///// 1. Add current score to active player's score 
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore;   
    document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];
    //// 2. Check if player's score is >=100

    if (scores[activePlayer] >= 100) {
      ///// Finish the game ;
      playing = false;
      winMsg0El.classList.remove('hidden');
      winMsg1El.classList.remove('hidden');
      dice0El.classList.add('hidden');
      document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
      document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
      document.querySelector(`.add-winning-message-${activePlayer}`).textContent = "Hey You Won this Game 🎉🎉🎉🎉"
      btnRoll.classList.add('hidden');
      btnHold.classList.add('hidden')
    } else {
      //// 3. Switch to the next player
      SwitchPlayer();
    }
  }
})


//// Resetting Game
btnNew.addEventListener("click", () => {
  init();
});

modelClose.addEventListener("click", ()=> {
  document.querySelector(".modal").classList.add('hidden');
  document.querySelector(".overlay").classList.add('hidden');
});

const closedModalByEscapeKey = (e) => {
  if(e.key === "Escape" && !modal.classList.contains('hidden')){
    document.querySelector(".modal").classList.add('hidden');
    document.querySelector(".overlay").classList.add('hidden');
  }
}

document.addEventListener('keydown', closedModalByEscapeKey);
overlay.addEventListener('click' , ()=> {
  document.querySelector(".modal").classList.add('hidden');
    document.querySelector(".overlay").classList.add('hidden');
});









// let scores;
// let currentScore;
// let activePlayer;
// let gameActive;
// let randomNum1;
// let randomNum2;
// let targetScore = 100;

// let dice1 = document.getElementById('dice-1');
// let dice2 = document.getElementById('dice-2');

// const controller = {
//   init() {
//     // Define initial variables
//     scores = [0, 0];
//     currentScore = 0;
//     activePlayer = 0;
//     gameActive = true;
//     // Set all values to zero on the webpage
//     dice1.style.display = 'none';
//     dice2.style.display = 'none';
//     document.getElementById('current-0').textContent = '0';
//     document.getElementById('current-1').textContent = '0';
//     document.getElementById('score-0').textContent = '0';
//     document.getElementById('score-1').textContent = '0';
//     document.getElementById('name-0').textContent = 'Player 1';
//     document.getElementById('name-1').textContent = 'Player 2';
//     document.querySelector('.player-0-panel').classList.remove('winner');
//     document.querySelector('.player-1-panel').classList.remove('winner');
//     document.querySelector('.player-0-panel').classList.remove('active');
//     document.querySelector('.player-1-panel').classList.remove('active');
//     document.querySelector('.player-0-panel').classList.add('active');
//   },
//   rollDice() {
//     if (gameActive) {
//       // Get random number between 1 and 6
//       randomNum1 = Math.floor(Math.random() * 6 + 1);
//       randomNum2 = Math.floor(Math.random() * 6 + 1);
//       // console.log(randomNum1, randomNum2);
//       dice1.style.display = 'block';
//       dice2.style.display = 'block';
//       dice1.src = `dice-${randomNum1}.png`;
//       dice2.src = `dice-${randomNum2}.png`;
//       // Update/add new number to current score if not 1 and if not two 6s in a row
//       if (randomNum1 > 1 && randomNum2 > 1) {
//         if (randomNum1 + randomNum2 !== 12) {
//           currentScore += randomNum1 + randomNum2;
//           document.getElementById(`current-${activePlayer}`).textContent = currentScore;
//         } else {
//           scores[activePlayer] = 0;
//           document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];
//           this.nextPlayer(); 
//         }
//       } else {
//       // if any num is 1, the set current to zero and change activePlayer
//         this.nextPlayer();
//       }
//     }
//   },
//   holdBtn() {
//     if (gameActive) {
//       // add current score to global score
//       scores[activePlayer] += currentScore;
//       document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];
//       // check if player won
//       if (scores[activePlayer] >= targetScore) {
//         gameActive = false;
//         dice1.style.display = 'none';
//         dice2.style.display = 'none';
//         document.getElementById(`name-${activePlayer}`).textContent = 'Winner!';
//         document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
//         document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
//       } else {
//         this.nextPlayer();
//       }
//     }
//   },
//   nextPlayer() {
//     document.getElementById(`current-${activePlayer}`).textContent = '0';
//     document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
//     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//     document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
//     currentScore = 0;
//     previousNum = 0;
//     dice1.style.display = 'none'; 
//     dice2.style.display = 'none'; 
//   },
//   setTargetScore() {
//     if (event.keyCode === 13) {
//       console.log(event.target);
//       let input = event.target.value;
//       if (input) {
//         targetScore = input;
//         document.getElementById('target-score-header').textContent = `Target score: ${targetScore}`;
//         event.target.value = "";
//       }
//     }
//   },
// }

// controller.init();
// document.querySelector('.btn-roll').addEventListener('click', controller.rollDice.bind(controller));
// document.querySelector('.btn-hold').addEventListener('click', controller.holdBtn.bind(controller));
// document.querySelector('.btn-new').addEventListener('click', controller.init);
// document.getElementById('target-score-input').addEventListener('keypress', controller.setTargetScore.bind(controller));