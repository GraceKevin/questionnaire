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

// Move from question to question

// Move from questions to End Scene
//Display End Score and Time

// Move from prior screens into Leaderboard