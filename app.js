/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game Values
let min=1,
    max=10,
    winningNum=getRandomNum(min,max),
    guessesLeft=3;

// UI elements
const UIgame=document.querySelector('#game'),
      UIminNum=document.querySelector('.min-num'),
      UImaxNum=document.querySelector('.max-num'),
      UIguessBtn=document.querySelector('#guess-btn'),
      UIguessInput=document.querySelector('#guess-input'),
      UImessage=document.querySelector('.message');

// Assign UI min and max
UIminNum.textContent=min;
UImaxNum.textContent=max;

// Play Again event listener
game.addEventListener('mousedown',function(e){
  if(e.target.className==='play-again'){
    window.location.reload();
  }
})

// Listen for guess
UIguessBtn.addEventListener('click',function(){
  let guess=parseInt(UIguessInput.value);//converted this into a number
  console.log(guess);

  // Validate our Input
  if(isNaN(guess) || guess<min || guess>max){
    setMessage(`Please enter a number between ${min} and ${max}`,'red');
  }

  // Check if won
  if(guess===winningNum){
    // Game Over-Won

    gameOver(true, `${winningNum} is correct!, YOU WIN`);
  }else{
    // Wrong Number
    guessesLeft-=1;
    // Check to see if any guesses left
    if(guessesLeft===0){
      // Game Over-Lost

      gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
    }else{
      // Game Continues-Answer Wrong
      // Change the border color
      UIguessInput.style.borderColor='red';
      // Clear The input
      UIguessInput.value='';
      // Tell user that its the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,'red')
    }
  }
});

// Game Over Function
function gameOver(won, msg){

  let color;
  won===true ? color='green':color='red';

  // Disable Input
  UIguessInput.disabled=true;
  // Change the border color
  UIguessInput.style.borderColor='color';
  // Change the text color also
  UImessage.style.color=color;
  // Set Message about winning
  setMessage(msg);

  // Play Again
  UIguessBtn.value='Play Again';
  UIguessBtn.className+='play-again';
}
// get Winning Num
function getRandomNum(min, max){
  return (Math.floor(Math.random()*(max-min+1)+min));
};

// Set Message Function
function setMessage(msg, color){
  UImessage.style.color=color;
  UImessage.textContent=msg;
}


