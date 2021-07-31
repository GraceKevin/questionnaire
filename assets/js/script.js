// Youtube links = the following were viewed in order to grasp further understanding in js for this project
//  https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=262s
//  https://www.youtube.com/watch?v=LQGTb112N_c
//  https://www.youtube.com/watch?v=riDzcEQbX6k
//  https://www.youtube.com/watch?v=y17RuWkWdn8
//
// Create initial variables

// Elements
var startElement;
var timerElement;
var scoresElement;

// Button
var startButton;
var endButton;
var backButton;

// Timers
var timer;
var timeInterval;
var questionCounter;
var correctCounter;

// Questions
var questionContainer = [
    // Questions and Answers go here
]

var timer = function() {
    timerInterval = setInterval(() => {
        if (timer <= 0) {
            // Push End Scene
        } // Or else reduce timer
        else {
            timer--;
        }
    }, 1000);
}

// Move from initial start page into questions
var startCodeQuiz = function() {
    // Pull from question container
    var questionElement = document.createElement ("section");
    questionElement.setAttribute("id", "question-section");
    questionElement.className = "questions-group";
    // Continue questions
    questionElement.innerHTML = questionContainer[questionCounter];
    // Begin Timer
    timerElement.textContent = timer;
}

// Move from question to question
var cycleQuestion = function() {

}

// Move from questions to End Scene
//Display End Score and Time
var endScene = function() {
    clearInterval(timerInterval);
}

// Move from prior screens into Leaderboard
var leaderBoard = function() {
    
}