const question = document.getElementById('question')
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull")
const timeDisplay = document.getElementById('timeLeft')

let time = 10
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];



// timer
function countDown(){
    
    setInterval(function() {
        if(time <= 0) {
            clearInterval(time = 0);
            return window.location.assign("./end.html")
        }
        timeDisplay.innerHTML = time
        time -= 1
        
    }, 1000)
}
 

// object with the questions to be asked and their answers
let questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript??',
        choice1: '<script>',
        choice2: '<javascript>',
        choice3: '<js>',
        choice4: '<scripting>',
        answer: 1,
    },
    {
        question:
            "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "<script href='xxx.js'>",
        choice2: "<script name='xxx.js'>",
        choice3: "<script src='xxx.js'>",
        choice4: "<script file='xxx.js'>",
        answer: 3,
    },
    {
        question: " How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4,
    },
    {
        question: " How to write an IF statement in Javascript?",
        choice1: "if(i == 5)",
        choice2: "if i = 5 then",
        choice3: "if i = 5",
        choice4: "if i == 5 then",
        answer: 1,
    },
    {
        question: " How do you add comments in Javascript?",
        choice1: "//This is a comment//",
        choice2: "-This is a comment-",
        choice3: "*This is a comment*",
        choice4: "<!==This is a comment-->",
        answer: 4,
    },
    {
        question: " Where is the best place to insert a JavaScript?",
        choice1: "Both the <head> and the <body> section are the best places",
        choice2: "The <head> section",
        choice3: "The <body> section;",
        choice4: "In the Stylesheet;",
        answer: 3,
    },
];

// constant
const correctBouns = 10;
const maxQuestions = 5;

// function that starts the game
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions =[...questions]
    getNewQuestion()
};

// function that get a new question after one is answered
getNewQuestion = () => {

    if(availableQuestions.length == 0 || questionCounter >= maxQuestions) {
        localStorage.setItem('mostRecentScore', score);
        // got to end page
        return window.location.assign("./end.html");
    }

    questionCounter++;
    progressText.innerText = `${questionCounter}/${maxQuestions}`
    // update progress bar and timer
    progressBarFull.style.width = `${(questionCounter / maxQuestions ) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionIndex, 1)
    acceptingAnswers = true;
};

// adding functonality to the choices when clicked.
choices.forEach( choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

       let classToApply = 'incorrect';
        if(selectedAnswer == currentQuestion.answer) {
            classToApply = 'correct';
            time += 5
        }
        // keeping track of score
        if(classToApply == "correct") {
            incrementScore(correctBouns)
            
        }
        // below is another way to do the if statement above
        // const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion();
        }, 1000)

        
    });
});
incrementScore = num => {
    score +=num;
    scoreText.innerText = score
}

startGame()
countDown()