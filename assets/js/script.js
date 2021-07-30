// Youtube links = the following were viewed in order to grasp further understanding in js for this project
//  https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=262s
//  https://www.youtube.com/watch?v=LQGTb112N_c
//  https://www.youtube.com/watch?v=riDzcEQbX6k
// 
//
// Create initial variables

// Elements
var startElement;
var timerElement;
var scoresElement;

// Button
const startButton = document.getElementById("startBtn")

// Timers
var timer;
var timeInterval;
var questionCounter;

startButton.addEventListener('click', startGame)

function startGame() {
    //console.log('started');
    startButton.classList.add("hide")
}


var timerStart = function() {
    timeInterval = setInterval(function() {
        if (timer <= 0) {
            //endScene()
        }
    })
}

var endScene = function() {
    // Clear time interval
    clearInterval(timeInterval);
    
    // pull questions and answers
    var questionElement = document.querySelector(".question-flex");
    var answerElement = document.querySelector(".answer");

    // show end scene
    var endSceneElement = document.createElement("section");
    endSceneElement.setAttribute("id", "end-scene");
    endSceneElement.className = "end-scene";
    endSceneElement.innerHTML = '<h2>Congratulations</h2>'
    questionElement.replaceWith(endSceneElement);
    answerElement.remove();

    // buttons and event listeners
    var endButtonElement = document.querySelector(".save-button button");
    endButtonElement.addEventListener ("click", function() {
        endButtonElement.className = "end-button-click";
        //console.log("end button was clicked")
    })
    endButtonElement.addEventListener("click", function(event) {
        event.preventDefault();

        // Check for player to enter their information 
        usersName = document.querySelector("input").value;
        if (!usersName) {
            alert("Please enter your initials");
            return;
        }
        saveScore (usersName, correctElement, timer);
        loadHighScores();
    });
}