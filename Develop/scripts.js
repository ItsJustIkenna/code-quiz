// Dom Variables
// variables for buttons
var quiz = document.getElementById("start-btn");
// variable for questions
var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: {
      a: "1. strings",
      b: "2. booleans",
      c: "3. alerts",
      d: "4. numbers",
    },
    correctAnswer: "c",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within _____.",
    answers: {
      a: "1. quotes",
      b: "2. curly brackets",
      c: "3. parenthesis",
      d: "4. square brackets",
    },
    correctAnswer: "c",
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    answers: {
      a: "1. numbers and strings",
      b: "2. other arrays",
      c: "3. booleans",
      d: "4. all of the above",
    },
    correctAnswer: "d",
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    answers: {
      a: "1. commas",
      b: "2. curly brackets",
      c: "3. quotes",
      d: "4. parenthesis",
    },
    correctAnswer: "c",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is",
    answers: {
      a: "1. JavaScript",
      b: "2. terminal/bash",
      c: "3. for loops",
      d: " console.log",
    },
    correctAnswer: "d",
  },
];
// JavaScript Variables
// variables to keep track of correct and incorrect answers
// Function Definitions
// deduct time function - takes 10 seconds off time
// correct function - lets user know if answer is correct or incorrect
// start time function - starts timer
// next question function - shows the next question
// Function Calls
// Event Listeners
// listen for if a button is clicked
// listen for when the start button is clicked

// listen for when an incorrect answer is clicked
