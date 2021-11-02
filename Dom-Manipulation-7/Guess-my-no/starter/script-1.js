'use strict';


// console.log(document.querySelector('.message').textContent)


// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;



// // console.log(document.querySelector('.guess').value)
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random()*20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;



document.querySelector('.check').addEventListener('click', function(){
    const guess =Number(document.querySelector('.guess').value);
    
    console.log(typeof guess);
    //// When there is no input
    if(!guess){
        document.querySelector('.message').textContent = '🚫 No Number!';


    } 
    //// when player wins
    else if(guess === secretNumber){
        
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem'
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        } 
        // else if(highScore < score){
        //     document.querySelector('.highscore').textContent = score;
        // }
    } 
    ///// when player input is more than secret number
    else if(guess > secretNumber){
        
       
        if(score > 1){
            
            document.querySelector('.message').textContent = '📈 Too High!';
            score --;
            document.querySelector('.score').textContent = score;
            
        } else {
            document.querySelector('.message').textContent = '💣  You Lost the game!'; 
            document.querySelector('.score').textContent = 0;
        }
       
    } 
    ///// when player input is less than secret number
    else if(guess < secretNumber){
        if(score > 1){
            
            document.querySelector('.message').textContent = '📉 Too low!';
            score --;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = '💣 You Lost the game!'; 
            document.querySelector('.score').textContent = 0;
        }
       
        
        
    }
    
})

///// Implementing reset  functionality
document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    console.log(secretNumber)
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start Guessing......!';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';


})