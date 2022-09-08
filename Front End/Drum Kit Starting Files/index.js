//Detecting Button Press
var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInner = this.innerHTML;
        makeSound(buttonInner);
        buttonAnimation(buttonInner);
    });
}

//Detecting keyboard press
document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

//The function
function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "W":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "A":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "S":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "D":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "J":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "K":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "L":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(buttonInner);
            break;
    }
}

//Animations
function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();

// var bellBoy1 = {
//     name: "Timmy",
//     age: 19,
//     work: true,
//     lang: ["Arabic", "English"],
// };

// function BellBoy (name, age, work, lang) {
//     this.name = name;
//     this.age = age;
//     this.work = work;
//     this.lang = lang;
// }

// da el hary el ana ktbto w tle3 sa7 bas mesh 100% (before starting Video 9 folder 12)
// window.addEventListener ('keydown', (event) => {
//     if(KeyboardEvent.key = "w") {
//         alert("w is pressed");
//     }
//     console(event);
// });