// Variables

var mainElement = document.querySelector("#main");
var timerElement = document.querySelector("#timer");
var timeLeft = 75;
var totalPoints = 0;
var end = false;

// Functions
var points = function() {
    totalPoints = totalPoints + 10;
    console.log("You have " + totalPoints + "points!");
}
var timer = function() {
    var timeInterval = setInterval(() => {
        if (end === false) {
            timerElement.textContent = timeLeft;
            timeLeft --;
            return timeLeft;
        } else {
            timerElement.textContent = "";
            clearInterval(timeInterval);
        }
    }, 1000);

    console.log("TIMER STARTED")
    if (end === true) {
        timerElement.textContent = timeLeft;
    }
}