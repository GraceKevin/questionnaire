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
        if (end === false ) {
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
    let initials = localStorage.getItem("initials");
    let score = localStorage.getItem("score");
    var leaderboardScore = document.createElement("p");
    leaderboardScore.className = "leaderboard-score";
    leaderboardScore.textContent = initials + " - " + score;
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
    finishContainer.appendChild(finish);

    var score = document.createElement("h4");
    score.className = "score";
    score.textContent = "Final Score is: " + totalPoints;
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
        var initials = document.getElementById("input").value;
        localStorage.setItem("initials", JSON.stringify(initials));
        localStorage.setItem("score", JSON.stringify(totalPoints));
        finishContainer.remove();
        highScores();
    })
    inputContainer.appendChild(submit);
}

var questionFive = function() {
    // execute if wrong answer is chosen
    var removeWrong = function() {
        questionContainer.remove();
        enterScore();
        console.log("The answer you picked was wrong");
        end = true;
    }
        //div
    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainElement.appendChild(questionContainer);

        // question Two
    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "Which of the following is not a Javascript data type:";
    questionContainer.appendChild(question);

        // question Two Answers
    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);
            // answer one
    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "Alert";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        points();
        questionContainer.remove();
        enterScore();
        console.log("You picked the right answer");
        end = true;
    })
            //answer Two
    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "Boolean";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        removeWrong();
    })
            // answer Three
    var answerThree = document.createElement("button");
    answerThree.className = "answer-Three";
    answerThree.textContent = "String";
    answerContainer.appendChild(answerThree);
    answerThree.addEventListener("click", event => {
        removeWrong();
    })
            // answer Four
    var answerFour = document.createElement("button");
    answerFour.className = "answer-Four";
    answerFour.textContent = "Number";
    answerContainer.appendChild(answerFour);
    answerFour.addEventListener("click", event => {
        removeWrong();
    })
}

var questionFour = function() {
// execute if wrong answer is chosen
    var removeWrong = function() {
        timeLeft = timeLeft - 10;
        questionContainer.remove();
        questionFive();
        console.log("The answer you picked was wrong");
        return timeLeft;
    }
        //div
    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainElement.appendChild(questionContainer);

        // question Two
    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "Which of the following creates a looping structure?";
    questionContainer.appendChild(question);

        // question Two Answers
    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);
            // answer one
    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "Function";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        removeWrong();
    })
            //answer Two
    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "Var";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        removeWrong();
    })
            // answer Three
    var answerThree = document.createElement("button");
    answerThree.className = "answer-Three";
    answerThree.textContent = "Return";
    answerContainer.appendChild(answerThree);
    answerThree.addEventListener("click", event => {
        removeWrong();
    })
            // answer Four
    var answerFour = document.createElement("button");
    answerFour.className = "answer-Four";
    answerFour.textContent = "While";
    answerContainer.appendChild(answerFour);
    answerFour.addEventListener("click", event => {
        questionContainer.remove();
        questionFive();
        console.log("You picked the right answer");
        points();
    })
}

var questionThree = function() {
// execute if wrong answer is chosen
    var removeWrong = function() {
        timeLeft = timeLeft - 10;
        questionContainer.remove();
        questionFour();
        console.log("The answer you picked was wrong");
    }
        //div
    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainElement.appendChild(questionContainer);

        // question Two
    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "Which of the following will create a pop up box?";
    questionContainer.appendChild(question);

        // question Two Answers
    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);
            // answer one
    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "Alert";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        removeWrong();
    })
            //answer Two
    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "Confirm";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        removeWrong();
    })
            // answer Three
    var answerThree = document.createElement("button");
    answerThree.className = "answer-Three";
    answerThree.textContent = "Prompt";
    answerContainer.appendChild(answerThree);
    answerThree.addEventListener("click", event => {
        removeWrong();
    })
            // answer Four
    var answerFour = document.createElement("button");
    answerFour.className = "answer-Four";
    answerFour.textContent = "All of the Above";
    answerContainer.appendChild(answerFour);
    answerFour.addEventListener("click", event => {
        questionContainer.remove();
        questionFour();
        console.log("You picked the right answer");
        points();
    })
}

var questionTwo = function() {
        // execute if wrong answer is chosen
    var removeWrong = function() {
        questionThree();
        questionContainer.remove();
        timeLeft = timeLeft - 10;
    }
        //div
    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainElement.appendChild(questionContainer);

        // question Two
    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "Which of the following will comment out in Javascript?";
    questionContainer.appendChild(question);

        // question Two Answers
    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);
            // answer one
    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "<!-- -->";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        removeWrong();
    });
            //answer Two
    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "*Comment Out *";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        removeWrong();
    });
            // answer Three
    var answerThree = document.createElement("button");
    answerThree.className = "answer-Three";
    answerThree.textContent = " // ";
    answerContainer.appendChild(answerThree);
    answerThree.addEventListener("click", event => {
        questionContainer.remove();
        questionThree();
        console.log("You picked the right answer");
        points();
    });
            // answer Four
    var answerFour = document.createElement("button");
    answerFour.className = "answer-Four";
    answerFour.textContent = "*/ ... /*";
    answerContainer.appendChild(answerFour);
    answerFour.addEventListener("click", event => {
        removeWrong();
    });
}

var questionOne = function() {
        // execute if wrong answer is chosen
    var removeWrong = function() {
        timeLeft = timeLeft - 10;
        questionContainer.remove();
        questionTwo();
        console.log("The answer you picked was wrong");
    }
        //div
    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainElement.appendChild(questionContainer);

        //question One
    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "What can be used to display additional information in the developer tools?";
    questionContainer.appendChild(question);

        //question One Answers
    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);
            // answer One
    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "Btn";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        removeWrong();
    })
            // answer Two
    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "Array";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        removeWrong();
    })
            // answer Three
    var answerThree = document.createElement("button");
    answerThree.className = "answer-Three";
    answerThree.textContent = "console.log";
    answerContainer.appendChild(answerThree);
    answerThree.addEventListener("click", event => {
        questionContainer.remove();
        questionTwo();
        console.log("You picked the right answer");
        points();
    })
            // answer Four
    var answerFour = document.createElement("button");
    answerFour.className = "answer-Four";
    answerFour.textContent = "Prompt";
    answerContainer.appendChild(answerFour);
    answerFour.addEventListener("click", event => {
        removeWrong();
    })
    console.log("Question One");
}

var start = function() {
    //div
var container = document.createElement("div");
container.className = "home-container"
mainElement.appendChild(container);

    // start page title
var homeHeader = document.createElement("h1");
homeHeader.className = "home-title";
homeHeader.textContent = "Coding Quiz Challenge";
container.appendChild(homeHeader);

    // start page paragraph
var homeParagraph = document.createElement("p");
homeParagraph.className = "home-text-p";
homeParagraph.textContent = "Welcome to your Javascript coding quiz. You will have 75 seconds to answer the questions. Should you get a question wrong, your time will reduce by 10 seconds."
container.appendChild(homeParagraph);

    // start quick button
var startQuizBtn = document.createElement("button");
startQuizBtn.className = "home-btn";
startQuizBtn.textContent = "Start Quiz";
container.appendChild(startQuizBtn);

    // removes home page elements
startQuizBtn.addEventListener("click", event => {
    timer();
    startQuizBtn.remove();
    homeHeader.remove();
    homeParagraph.remove();
    questionOne();
});
}
start();