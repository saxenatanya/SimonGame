var  buttonColours  =["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];


var started = false;

//2. Create a new variable called level and start at level 0.
var level = 0;

//1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keypress(function() {
  if (!started) {

    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function(){
let choosenColor = $(this).attr("id");
userClickedPattern.push(choosenColor);
playSound(choosenColor);
animatePress(choosenColor);
checkAnswer(userClickedPattern.length-1);
});


function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");
if (userClickedPattern.length === gamePattern.length){
     setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {
        var music = new Audio("sounds/wrong.mp3");
        music.play();
      console.log("wrong");
      $("body").addClass("game-over");
      setTimeout(function(){
          $("body").removeClass("game-over");
          //....and whatever else you need to do
  }, 200);
  $("h1#level-title")[0].innerHTML="Game Over, Press Any Key to Restart";
  startOver(level, gamePattern ,started);
    }

}

function playSound(name){
    var music = new Audio("sounds/"+name+".mp3");
    music.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
        //....and whatever else you need to do
}, 100);
}



function nextSequence(){
    userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
    var  randomNumber =Math.floor( Math.random()*4);
    var  randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    // console.log(gamePattern.push(randomChosenColour));

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);
    // console.log(music);

}
function startOver(){
    let level=0;
    let gamePattern=[];
    let started= false;
}



