for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var play=this.innerHTML;
        sound(play);
        buttonanimation(play);
    })
}


document.addEventListener("keydown",function(event)
{
    sound(event.key);
    buttonanimation(event.key); 
})
function sound(play)
{
    switch (play) {
        case "w":
            var tom1=new Audio("sounds\\tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom1=new Audio("sounds\\tom-2.mp3");
            tom1.play();
            break;
        case "s":
            var tom1=new Audio("sounds\\tom-3.mp3");
            tom1.play();
            break;
        case "d":
            var tom1=new Audio("sounds\\tom-4.mp3");
            tom1.play();
            break;
        case "j":
             var tom1=new Audio("sounds\\crash.mp3");
             tom1.play();
             break;
        case "k":
            var tom1=new Audio("sounds\\kick-bass.mp3");
            tom1.play();
            break;
        case "l":
            var tom1=new Audio("sounds\\snare.mp3");
            tom1.play();
            break;
        default:
            console.log(this.innerHTML);
    }
}
function buttonanimation(play)
{
  document.querySelector("."+play).classList.add("pressed");
  setTimeout(function(){
      document.querySelector("."+play).classList.remove("pressed");
  },200)
}