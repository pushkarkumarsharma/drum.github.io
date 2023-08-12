var number_of_button = document.querySelectorAll(".drum").length
for (var i = 0; i < number_of_button; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", clickme);
    function clickme() {
        // console.log(this);
        // this.style.color="white";
        // var audio1 = new Audio("sounds/tom-1.mp3");
        // audio1.play();
        var buttton_value = this.innerHTML
        makesound(buttton_value);
        buttonanimation(buttton_value);

        // alert("i got clicked");

    }
}
document.addEventListener("keydown", function (event) {
    makesound(event.key);
    buttonanimation(event.key);
})
function makesound(key) {

    switch (key) {
        case "d":
            var audio1 = new Audio("sounds/crash.mp3");
            audio1.play();
            break;
        case "a":
            var audio2 = new Audio("sounds/kick-bass.mp3");
            audio2.play();
            break;
        case "s":
            var audio3 = new Audio("sounds/snare.mp3");
            audio3.play();
            break;
        case "f":
            var audio4 = new Audio("sounds/tom-1.mp3");
            audio4.play();
            break;
        case "j":
            var audio5 = new Audio("sounds/tom-2.mp3");
            audio5.play();
            break;
        case "k":
            var audio6 = new Audio("sounds/tom-3.mp3");
            audio6.play();
            break;
        case "l":
            var audio6 = new Audio("sounds/tom-3.mp3");
            audio6.play();
            break;
        default:
    }

} function buttonanimation(keys) {
    var activebutton = document.querySelector("." + keys);
    activebutton.classList.add("pressed");
    setTimeout(function () {
        activebutton.classList.remove("pressed");
    }, 100);


}

