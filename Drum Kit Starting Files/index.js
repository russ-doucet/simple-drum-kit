var numberOfDrumButtons = document.querySelectorAll(".drum").length;
var keyToSound = new Map();

keyToSound.set("w", "./sounds/tom-1.mp3");
keyToSound.set("a", "./sounds/tom-2.mp3");
keyToSound.set("s", "./sounds/tom-3.mp3");
keyToSound.set("d", "./sounds/tom-4.mp3");
keyToSound.set("j", "./sounds/snare.mp3");
keyToSound.set("k", "./sounds/kick-bass.mp3");
keyToSound.set("l", "./sounds/crash.mp3");

// Playing sound based on the where the user clicks
for(var i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(event) {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

// Playing sound based on which key the user presses
document.addEventListener("keypress", function(event){
    makeSound(event.key);
})

function makeSound(key){
    // switch(key){
    //     case "w":
    //         var aud = new Audio("./sounds/tom-1.mp3");
    //         aud.play();
    //         break;
    //     case "a":
    //         var aud = new Audio("./sounds/tom-2.mp3");
    //         aud.play();
    //         break;
    //     case "s":
    //         var aud = new Audio("./sounds/tom-3.mp3");
    //         aud.play();
    //         break;
    //     case "d":
    //         var aud = new Audio("./sounds/tom-4.mp3");
    //         aud.play();
    //         break;
    //     case "j":
    //         var aud = new Audio("./sounds/snare.mp3");
    //         aud.play();
    //         break;
    //     case "k":
    //         var aud = new Audio("./sounds/kick-bass.mp3");
    //         aud.play();
    //         break;
    //     case "l":
    //         var aud = new Audio("./sounds/crash.mp3");
    //         aud.play();
    //         break;
    //     default:
    //         console.log(this.innerHTML);
    //         break;
    // }

    // The course had me use a switch statment but I wanted to learn the syntax for maps
    new Audio(keyToSound.get(key)).play();
    buttonAnimation(key);
    
}

function buttonAnimation(key){
    var buttonPressed = document.querySelector("." + key);
    buttonPressed.addClass("pressed");

    setTimeout(function() {
        buttonPressed.classList.remove("pressed");
    }, 100)
}

// Alternatively you could use an anonymous function as well:
// document.querySelector("button").addEventListener("click", function() {
//     alert("I got clicked!")
// });


