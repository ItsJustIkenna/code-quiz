// Dom Variables
var startBtn = document.querySelector(".start-btn");
var time = document.querySelector("#timer");
var questionContentEl = document.getElementById("question-content");
var startPage = document.querySelector("#start-page");
var endPage = document.querySelector("#end-page");
// JavaScript Variables
var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    correctAnswer: "3. alerts",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within _____.",
    answers: [
      "1. quotes",
      "2. curly brackets",
      "3. parenthesis",
      "4. square brackets",
    ],
    correctAnswer: "3. parenthesis",
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    answers: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    correctAnswer: "4. all of the above",
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    answers: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
    correctAnswer: "3. quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is",
    answers: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    correctAnswer: "4. console.log",
  },
];
var seconds = 75;
var interval;
var questionCounter = 0;
var score = 0;

// start timer function - starts timer
function startTimer() {
  interval = setInterval(function () {
    seconds--;
    time.textContent = seconds;

    if (seconds === 0) {
      endGame();
    }
  }, 1000);
}
// next question function - shows the next question
function nextQuestion(questionCounter) {
  if (questions.length === questionCounter) {
    endGame();
  }

  questionContentEl.innerHTML = "";
  questionContentEl.classList.remove("d-none");
  var ulEl = document.createElement("ul");
  var h1El = document.createElement("h1");
  h1El.textContent = questions[questionCounter].question;
  questionContentEl.appendChild(h1El);
  ulEl.style = "list-style-type: none";
  questionContentEl.appendChild(ulEl);

  for (i = 0; i < questions[questionCounter].answers.length; i++) {
    var liEL = document.createElement("li");
    ulEl.appendChild(liEL);
    var btnEl = document.createElement("button");
    btnEl.textContent = questions[questionCounter].answers[i];
    liEL.appendChild(btnEl);
  }
}
// start quiz function - starts quiz
function startQuiz() {
  startPage.classList.add("d-none");
  nextQuestion(questionCounter);
}
// correct function - lets user know if answer is correct or incorrect
function correctAnswer(answer) {
  if (answer === questions[questionCounter - 1].correctAnswer) {
    
  } else {
    deductTime();
  }
}
// deduct time function - takes 10 seconds off time
function deductTime() {
  seconds -= 10;
}

function selectAnswer(event) {
  if (event.target.matches("button")) {
    var answer = event.target.textContent;
    questionCounter++;
    correctAnswer(answer);
    nextQuestion(questionCounter);
  }
}
// end game function - stops timer and shows score
function endGame() {
  clearInterval(interval);
  endPage.innerHTML = "";
  endPage.classList.remove("d-none");
  score = seconds;
  var ulEl = document.createElement("ul");
  var liEl1 = document.createElement("li");
  var liEl2 = document.createElement("li");
  var liEl3 = document.createElement("li");
  var endPageEl = document.createElement("h4");
  var scoreEl = document.createElement("p");
  var input = document.createElement("input");
  var btnEl = document.createElement("button");
  endPage.appendChild(ulEl);
  ulEl.appendChild(liEl1);
  ulEl.appendChild(liEl2);
  ulEl.appendChild(liEl3);
  endPageEl.textContent = "All Done!";
  scoreEl.textContent = "Your final score is " + score;
  liEl3.textContent = "Enter Initials: ";
  btnEl.textContent = "submit";
  liEl1.appendChild(endPageEl);
  liEl2.appendChild(scoreEl);
  liEl3.appendChild(input).appendChild(btnEl);
  ulEl.style = "list-style-type: none";
}
// listen for when the start button is clicked
startBtn.addEventListener("click", function () {
  startQuiz();
  startTimer();
});
// listen for if a button is clicked
questionContentEl.addEventListener("click", selectAnswer);
