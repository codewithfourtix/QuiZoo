import { questions } from './data.js';  // Ensure this import is correct

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const downloadButton = document.getElementById('download-btn');  // Add this line

let shuffledQuestions, currentQuestionIndex, score;

function startQuiz() {
    shuffledQuestions = shuffleArray([...questions]).slice(0, 10);  // Shuffle and select 10 questions
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    downloadButton.style.display = 'none';  // Hide download button at the start
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = shuffledQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectedBtn.classList.add('correct');
        score++;
    } else {
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${shuffledQuestions.length}`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block';
    downloadButton.style.display = 'block';  // Show download button
    questionElement.innerHTML += "<br><br>Thanks for participating! You can play again to get even more unique questions to encounter with.<br> Ali Zulfiqar";

}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        resetState();
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < shuffledQuestions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

// Function to download the result as an image
function downloadResult() {
    html2canvas(document.querySelector('.app')).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'quiz-result.png';
        link.click();
    });
}

downloadButton.addEventListener('click', downloadResult);  // Add event listener for download button

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

startQuiz();
