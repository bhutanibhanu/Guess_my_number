'use strict'

let secretNumber = Math.trunc(Math.random()*20)+1;


let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

const checkButton = document.querySelector('.check');


checkButton.addEventListener('click', function() {
    const guess = Number((document.querySelector('.guess').value));
    if(!guess){
        displayMessage('❓ No Number!');
    }
    else if(guess === secretNumber){
        displayMessage('✅ Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        checkButton.disabled = true;
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }else if(guess !== secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? '📈 Too High': '📉 Too Low') 
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage('❌ You Lost The Game');
            checkButton.disabled = true;
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = '#FF0000';
        }
    }   
    }
)

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    checkButton.disabled = false;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.guess').value= '';
    document.querySelector('body').style.backgroundColor = '#222';


})