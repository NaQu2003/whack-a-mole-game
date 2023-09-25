const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const score = document.querySelector('.score')
const timer = document.querySelector('.timer')
const buttons = document.querySelectorAll('.btn')
const info = document.querySelector('.info')
let timerId = null;
let scoreNumber = 0;
let maxScore;
let speed;
let hitPosition;
let currentTime;
let counterDownTime;
function changeLevel(level){
    speed = level;
    currentTime = 30;
    if(speed===750){
        maxScore = 40;
    }
    else if(speed===500){
        maxScore= 25;
    }else if (speed===400){
        maxScore = 20;
    }else{
        maxScore = 10;
    }
    info.textContent = 'Maksymalny wynik do uzyskania: '+ maxScore;
    moveMole();
    buttons.forEach(button =>{
        button.disabled = true;
    }) 
    }



function randomSquare(){
    squares.forEach(square =>{
        square.classList.remove('mole')
      
    })
    randomSquare = squares[Math.floor(Math.random()*15)]
    randomSquare.classList.add('mole')
    hitPosition = randomSquare.id
    
}
squares.forEach(square=>{
    square.addEventListener('mousedown',()=>{
        if(square.id ===hitPosition){
            scoreNumber++;
            score.textContent = `Score: ${scoreNumber}`
            checkScore();
        }
    })
})

function moveMole(){
    
   timerId =  setInterval(randomSquare,speed);
 
}

function countDownTime(){
    currentTime--;
    timer.textContent = `Time Left: ${currentTime}`
   
    if(currentTime===0){
        clearInterval(timerId);
        clearInterval(countTimer);
        randomSquare.classList.remove('mole')
        alert(`Twój ostateczny wynik: ${scoreNumber}`)
        hitPosition = null;
    }
    
}
let countTimer = setInterval(countDownTime,1000)
function checkScore(){
    if(scoreNumber===maxScore){
        clearInterval(timerId);
        clearInterval(countTimer);
        alert(`Pokonałeś kreta!`)
        info.textContent = 'Odśwież strone'
        hitPosition = null;
    }
}
