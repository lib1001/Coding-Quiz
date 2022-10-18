var questionEl = document.querySelector("#question");
var viewScoreEl = document.querySelector(".view");
var timerEl = document.querySelector("#timer");
var optionsEl = document.querySelector("#answer-options");
var startBtn = document.querySelector("#start-button");
var nextBtn = document.querySelector("#next-button");
var answerBtn = document.querySelector(".answer-options")
var submitBtn = document.querySelector("#submitButton");
document.getElementById;
let submitField = document.querySelector("#submit-field");
let submitButton = document.getElementById("submitButton");

var questions = [
    {   
        question: 
        selection: 
        answer: 
    },
    {   
        question: 
        selection: 
        answer: 
    },
    {   
        question: 
        selection: 
        answer: 
    },
    {   
        question: 
        selection: 
        answer: 
    },
    {   
        question: 
        selection: 
        answer: 
    },
    {   
        question: 
        selection: 
        answer: 
    },
    {   
        question: 
        selection: 
        answer: 
    },
    {   
        question: 
        selection: 
        answer: 
    },
    {   
        question: 
        selection: 
        answer: 
    },
    {   
        question: 
        selection: 
        answer: 
    },
    {   
        question: 
        selection: 
        answer: 
    },

];

  var currentQuestion;
  var time = questions.length * 15;
  var timerStart;
  var highScores = [];
  var timeInterval;

  function startTimer() {
    timeInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = time;

        if (time === 0 || currentQuestion === questions.length) {
            clearInterval(timeInterval);
        }
    }, 1000);
  }