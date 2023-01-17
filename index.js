var numberOfDrumButtons = document.querySelectorAll(".drum").length;


//Detecting click press
for(var i=0; i<numberOfDrumButtons;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     makeSound(this.innerHTML);
     keyAnimation(this.innerHTML);
  });
}

//Detecting key press
document.addEventListener("keypress", function(event) {
      // console.log(event);            ------>>>> To see which event triggered the EventListener
      var k = event.key;
      makeSound(k);
      keyAnimation(k);
});



function makeSound(k)
{
  switch (k){
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
  }
}

function keyAnimation(char){
  document.querySelector("."+ char).classList.add("pressed");

  setTimeout(function(){
    document.querySelector("."+ char).classList.remove("pressed");
  } , 100)
}
