var questions = [
    {
        question: "What does Css stand for?",
        choices: ["casading style sheet",
            "Hypertext Transfer Protocol",
            "cat saw stars ",
            "compiress style sheet"
        ],
        answer: "Hypertext Transfer Protocol"
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        choices: ["link tag",
            "a tag",
            "href tag",
            "link tag"
        ],
        answer: "a tag"
    },
    {
        question: "What is the correct HTML element for creating an unordered list?",
        choices: ["list tag",
            "ol tag",
            "ul tag",
            "ol tag"
        ],
        answer: "ul tag"
    },
    {
        question: "Which HTML tag is used to define the structure of an HTML document?",
        choices: ["structure tag",
            "body tag",
            "a tag",
            "a tag"
        ],

        answer: "body tag"
    },
    {
        question: "In HTML, which tag is used to insert a line break?",
        choices: [
            "break tag",
            "line tag",
            "br tag",
            "a tag"
        ],
        answer: "br tag"
    }
];

var hasAnswered = false;

function quiz() {
    var output = [];

    questions.forEach((currentQuestion, questionNumber) => {
        var choices = [];

        for (letter in currentQuestion.choices) {
            choices.push(
                `<label><input type="radio" id="btn-1" name="question${questionNumber}" value="${letter}">
                    <span class="customRadio"></span>
                        ${letter} :
                        ${currentQuestion.choices[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="slide">
                <div class="question">${currentQuestion.question}</div>
                <div class="choices">${choices.join("")}</div>
            </div>`
        );
    });

    quizContainer.innerHTML = output.join("");

    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((radioButton) => {
        radioButton.addEventListener("change", function () {
            hasAnswered = true;
        });
    });
}



var submitButton = document.getElementById("submit");
var showAnswersButton = document.getElementById("show-answers");

submitButton.addEventListener("click", function () {
    clearInterval(countdown);
    submitButton.style.display = "none";
    showAnswersButton.style.display = "block";
    returnHomeButton.style.display = "block";
    previousButton.style.display = "none";

    var score = calculateScore();
    var resultContainer = document.getElementById("results");


    if (score >= questions.length / 2) {
        resultContainer.innerHTML = '<div class="message pass"><p>Pass<p></div>';
    } else {
        resultContainer.innerHTML = '<div class="message fail"><p>Fail<p></div>';
    }

    var lastContainer = document.querySelector(".slide:last-child");
    lastContainer.remove();
});

function calculateScore() {
    var score = 0;
    var userAnswers = getUserAnswers();

    for (var i = 0; i < questions.length; i++) {
        if (userAnswers[i] === questions[i].answer) {
            score++;
        }
    }

    return score;
}

function calculateScore() {
    var score = 0;
    var userAnswers = getUserAnswers();

    for (var i = 0; i < questions.length; i++) {
        if (userAnswers[i] === questions[i].answer) {
            score++;
        }
    }

    return score;
}

function getUserAnswers() {
    var userAnswers = [];

    for (var i = 0; i < questions.length; i++) {
        var radioButtonName = "question" + i;
        var selectedRadioButton = document.querySelector('input[name="' + radioButtonName + '"]:checked');

        if (selectedRadioButton) {
            userAnswers.push(selectedRadioButton.value);
        } else {
            userAnswers.push(null);
        }
    }

    return userAnswers;
}

function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
        previousButton.style.display = "none";

    } else {
        previousButton.style.display = "inline-block";
    }

    if (currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
    } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
    }
}
buttonsContainer
function nextSlide() {
    if (hasAnswered) {
        showSlide(currentSlide + 1);
        progressPercent += 25;
        progressBar.style.width = progressPercent + "%";
        hasAnswered = false;
    } else {
        alert("Please select an answer before moving to the next question.");
    }
}


function previousSlide() {
    if (currentSlide != slides.length - 1) {
        showSlide(currentSlide - 1);
        progressPercent -= 25;
        progressBar.style.width = progressPercent + "%";
    } else {
        display: none
    }
}

var progressBar = document.getElementById("progress-bar");
var progressWrap = document.getElementById('progress-wrap')
var progressPercent = 0;

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

quiz();

var previousButton = document.getElementById("previous");
var nextButton = document.getElementById("next");
var slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(0);

submitButton.addEventListener("click", results);

previousButton.addEventListener("click", previousSlide);
nextButton.addEventListener("click", nextSlide);




var countdown;
var timeInMinutes = 5;
var timerDisplay = document.getElementById("timer");

function startTimer() {
    var timeInSeconds = timeInMinutes * 60;


    countdown = setInterval(function () {
        var minutes = Math.floor(timeInSeconds / 60);
        var seconds = timeInSeconds % 60;

        var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
        var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

        timerDisplay.textContent = formattedMinutes + ":" + formattedSeconds;

        if (timeInSeconds <= 0) {
            clearInterval(countdown);
        } else {
            timeInSeconds--;
        }
    }, 1000);
}

startTimer();


function showAnswers() {
    document.getElementById('contans').style.display = 'none';


    // Display the "Show Answers" button and hide other UI elements
    var answersContainer = document.getElementById('contans');
    if (answersContainer.style.display === 'none') {
        answersContainer.style.display = 'block';
    } else {
        answersContainer.style.display = 'none';
    }
    showAnswersButton.style.display = 'none';

    var progressWrap = document.getElementById("progress-wrap");
    var progressBar = document.getElementById("progress-bar");
    progressWrap.style.display = 'none';
    progressBar.style.display = 'none';

    var timerDisplay = document.getElementById("timer");
    timerDisplay.style.display = 'none';

    var nexPreButtons = document.getElementById("nex-pre");
    nexPreButtons.style.display = 'none';

    var returnHomeButton = document.getElementById("return-home");
    returnHomeButton.style.display = 'block'; // Display the "Return to Home" button

}






showAnswersButton.addEventListener("click", function () {
    clearInterval(countdown);
    showAnswers();
});

var returnHomeButton = document.getElementById("return-home");

returnHomeButton.addEventListener("click", function () {
    window.location.href = "index.html";
});
var buttonsContainer = document.createElement("div");
buttonsContainer.id = "button-container";


var showAnswersButton = document.getElementById("show-answers");
showAnswersButton.addEventListener("click", function () {
    buttonsContainer.style.display = "flex";
    showAnswers();
});

// buttonsContainer.appendChild(showAnswersButton);
// buttonsContainer.appendChild(returnHomeButton);

// document.body.appendChild(buttonsContainer);


let labels = document.querySelectorAll('label');

function changeButtonColor(label) {
    labels.forEach((otherLabel) => {
        if (otherLabel === label) {
            label.style.background = "#474100";
            label.style.color = "#fff";
            //   label.style.boxShadow = "0px 6px 0px #474100"
        } else {
            otherLabel.style.background = "#252525";
            otherLabel.style.color = "#fff";
            //   label.style.boxShadow = "0px 6px 0px #252525"
        }
    });
}

labels.forEach((label) => {
    label.addEventListener('click', () => {
        changeButtonColor(label);
    });
});