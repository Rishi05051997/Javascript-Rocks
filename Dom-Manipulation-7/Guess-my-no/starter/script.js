'use strict';


// console.log(document.querySelector('.message').textContent)


// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;



// // console.log(document.querySelector('.guess').value)
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random()*20) + 1;
// console.log(secretNumber);
let score = 20;



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