var timer = 60;
var score = 0;
var hitValue;

function newHitValue(){
  hitValue = Math.floor(Math.random()*10);
  document.querySelector("#hitVal").textContent = hitValue;
}

function makeBubbles(){
  var bubbles = " ";

  for (var i = 0; i < 140; i++){
    var randomNum = Math.floor(Math.random() * 10);
    bubbles += `<div class="bubble">
                      ${randomNum}
                  </div>`;
  }

  document.querySelector("#pbtm").innerHTML = bubbles;
}
 
function runTimer(){
  var timerInterval = setInterval(function(){
    if (timer > 0){
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    }
    else{
      clearInterval(timerInterval);
      document.querySelector("#pbtm").innerHTML=`<div>
      <h6>Time's up! Buddy</h6>
      <h1>Game Over</h1>
      <br>
      <h4>Your score is : ${score}</h4>
      </div>`;
    }
  }, 1000);
}

function addScore(){
  score += 10;
  // score += parseInt(document.querySelector("#hitVal").textContent);
  document.querySelector("#scoreVal").textContent = score;
}


document.querySelector("#pbtm").addEventListener("click", function(dets){
   var clickedBubble = Number(dets.target.textContent);
   if(clickedBubble === hitValue){
    addScore();
    makeBubbles();
    newHitValue();
  }
});

runTimer();
makeBubbles();
newHitValue();