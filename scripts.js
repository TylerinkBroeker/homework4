
var startButton = document.getElementById("start-quiz");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtons = document.getElementById("btn-div");
var score = 0;
var timer = document.querySelector("#header");
var time = 60;
var currentQuestion;

startButton.addEventListener("click", startGame);


var questions = [
    {
        question: "What is the language commonly used for styling HTML documents?",
        options: [
            {text: "French"},
            {text: "CSS"},
            {text: "JQuery"},
            {text: "Python"},
        ],
        answer: "CSS"
    },
    {
        question: "What is not an example of an HTML element tag?",
        options: [
            {text: "img"},
            {text: "p"},
            {text: "roz"},
            {text: "h2"},
        ],
        answer: "roz"
    },
    {
        question: "What is not one of the three languages commonly used for building websites?",
        options: [
            {text: "HTML"},
            {text: "CSS"},
            {text: "Javascript"},
            {text: "Oragami"},
        ],
        answer: "Oragami"
    },
    {
        question: "What javascript data type that is used for storing multiple items?",
        options: [
            {text: "number"},
            {text: "array"},
            {text: "boolean"},
            {text: "string"},
        ],
        answer: "array"
    },
    ];

function startGame(){
    setInterval(function(){
        time --;
        if(time >= 0) {
            timer.innerHTML = time;
        }
    }, 1000);
    
    currentQuestion = 0;
    setNextQuestion();
}

function setNextQuestion(){
    reset();
    if(time === 0){
        gameOver();
    } else if(currentQuestion >= questions.length) {
        gameOver();
    } else {
        showQuestion(questions[currentQuestion]);
    }
    
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.options.forEach(option => {
        var button = document.createElement("button");
        button.innerText = option.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        button.addEventListener("click", selectAnswer);
    })
}

function selectAnswer(e) {
    var selectedButton = e.target;
    console.log(questions[currentQuestion].answer);
    if(selectedButton.innerText === questions[currentQuestion].answer){
        score++;
    } else{
        time = time - 5;
    }
    currentQuestion ++;
    setNextQuestion();
};

function reset() {
    question.innerHTML = "";
    if(document.getElementById("start-quiz")){
        document.getElementById("start-quiz").remove();
    }
    var btnDiv = document.getElementById("btn-div");
    btnDiv.innerHTML = "";
};

function gameOver(){
    reset();
    questionElement.innerText = "your score was " + score;
}
