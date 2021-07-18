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

var highScores = function () {
    var highScoreContainer = document.createElement("div");
    highScoreContainer.className = "highScoreContainer";
    mainElement.appendChild(highScoreContainer);

    // High Score Section
    var title = document.createElement("h1");
    title.className = "high-score-title";
    title.textContent = "High Scores";
    highScoreContainer.appendChild(title);

    // Display Scores
    var initials = localStorage.getItem("initials");
    var score = localStorage.getitem("score");
    var leaderboardScore = document.createElement("p");
    leaderboardScore.className = "leaderboardScore";
    leaderboardScore.textContent = "1." + initials + "-" + score;
    highScoreContainer.appendChild(leaderboardScore);

    var leaderboard = document.createElement("div");
    leaderboard.className = "leaderboard";
    highScoreContainer.appendChild(leaderboard);

    //create go back button
    var backButton = document.createElement("button");
    backButton.className = "back-button";
    backButton.textContent = "Back";
    backButton.addEventListener("click", event => {
        totalPoints = 0;
        end = false;
        timeLeft = 100;
        highScoreContainer.remove();
        start ();
    })
    leaderboard.appendChild(backButton);

    var clearHighScore = document.createElement ("button");
    clearHighScore.className = "clear-scores";
    clearHighScore.textContent = "Reset High Scores";
    clearHighScore.addEventListener("click", event => {
        // Remove items from localStorage
        localStorage.removeItem("initials")
        localStorage.removeItem("score")
        leaderboardScore.remove();
    })
    leaderboard.appendChild(clearHighScore);
}

var enterScore = function() {
    var finishContainer = document.createElement("div");
    finishContainer.className = "finished-container";
    mainElement.appendChild(finishContainer);

    var finish = document.createElement("h1");
    finish.textContent = "Complete";
    finish.className = "finish-title";
    finishContainer.appendChild(done);

    var score = document.createElement("h3");
    score.className = "score";
    score.textContent = "Final Score = " + totalPoints;
    finishContainer.appendChild(score);

    var inputContainer = document.createElement("div");
    inputContainer.className = "input-container";
    finishContainer.appendChild(inputContainer);

    var label = document.createElement("label");
    label.className = "label";
    label.textContent = "Enter Initials:";
    label.setAttribute("for", "input");
    inputContainer.appendChild(label);

    var initialInput = document.createElement("Input");
    initialInput.className = "score-input";
    initialInput.setAttribute("id", "input")
    initialInput.setAttribute("name", "input");
    initialInput.setAttribute("type", "text");
    inputContainer.appendChild(initialInput);

    var submit = document.createElement("button");
    submit.className = "submit-btn";
    submit.textContent = "Submit";
    submit.addEventListener("click", event => {
        var initials = document.getElementById("input").nodeValue;
        localStorage.setItem("initials", intitials);
        localStorage.setItem("score", totalPoints);
        finishContainer.remove();
        highScores();
    })
    inputContainer.appendChild(submit);
}

