//Selectors

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

//Variables
let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer = null;

// Functions

const playAgain = () => {
    qIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    total = 0;
    selectedAnswer = null;
    showQuestion(qIndex);
};
play.addEventListener("click", () => {
    playAgain();
    resultScreen.style.display = "none";
    gameScreen.style.display = "block";
});

const showResult = () => {
    resultScreen.style.display = "block";
    gameScreen.style.display = "none";

    resultScreen.querySelector(".correct").textContent =
        `Correct Answers: ${correctCount}`;
    resultScreen.querySelector(".wrong").textContent =
        `Wrong Answers: ${wrongCount}`;
    resultScreen.querySelector(".score").textContent =
        `Score: ${Math.round((correctCount / data.length) * 100)}/100`

};
const showQuestion = (qNumber) => {
    if (qNumber === data.length) {
        showResult();
        return;
    }
    selectedAnswer = null;
    question.textContent = data[qNumber].question;
    answersContainer.innerHTML = data[qNumber].answers.map((item, index) => {
        return `<div class="answer">
        <input name="answer" type="radio" id=${index} value=${item.isCorrect}>
        <label for=${index}>${item.answer}</label>
        </div>`
    }).join("");

    selectAnswer();

};
const selectAnswer = () => {
    answersContainer.querySelectorAll("input").forEach((el) => {
        el.addEventListener("click", (e) => {
            selectedAnswer = e.target.value;
        });
    });
};

const submitAnswer = () => {
    submit.addEventListener("click", () => {
        if (selectedAnswer !== null) {
            selectedAnswer === "true" ? correctCount++ : wrongCount++;
            qIndex++;
            showQuestion(qIndex);
            console.log(correctCount, wrongCount);
        } else {
            alert("Please select an answer");
        }
    });
};

showQuestion(qIndex);
submitAnswer();
