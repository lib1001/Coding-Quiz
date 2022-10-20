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
        question: "How many elements can you apply an 'ID' attribute to?",
        answers: [
            {text:"As many as you want", correct: false },
            {text: "3", correct: false}, 
            {text: "1", correct: true},
            {text: "128", correct: false}
            ],
    },
    {  
        question: "What does DOM stand for?",
        answers: [
            {text: "Document Object Model", correct: true },
            {text: "Display Object Management", correct: false}, 
            {text: "Digital Ordinance Model", correct: false},
            {text: "Desktop Oriented Mode", correct: false}
            ],
        },
     {  
        question: "What is used primarily to add styling to a web page?",
        answers: [
            {text:"HTML", correct: false },
            {text: "CSS", correct: true}, 
            {text: "Python", correct: false},
            {text: "React.js", correct: false}
            ],
         },
    {  
        question: "What HTML tags are JavaScript code wrapped in?",
        answers: [
            {text:"div", correct: false },
            {text: "link", correct: false}, 
            {text: "head", correct: false},
            {text: "script", correct: true}
                ],
        },
        {  
            question: "When is localStorage data cleared?",
            answers: [
                {text:"No expiration time", correct: true },
                {text: "On page reload", correct: false}, 
                {text: "On browser close", correct: false},
                {text: "On computer restart", correct: false}
                    ],
            },
];



