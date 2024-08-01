const questions = [
    {
        question: "If you have a bowl with six apples and you take away four, how many do you have?",
        answers:[
            {text:"Two" , correct:false},
            {text:"Zero" , correct:false},
            {text:"Four" , correct:true},
            {text:"Six" , correct:false}
        ]
    },
    {
        question: "A plane crashes on the border of the United States and Canada. Where do they bury the survivors?",
        answers:[
            {text:"No Where" , correct:true},
            {text:"United States" , correct:false},
            {text:"Canada" , correct:false},
            {text:"Split them between both" , correct:false}
        ]
    },
    {
        question: "Some months have 31 days, some have 30 days, but how many have 28 days?",
        answers:[
            {text:"1(Feb)" , correct:false},
            {text:"6" , correct:false},
            {text:"2" , correct:false},
            {text:"12" , correct:true}
        ]
    },
    {
        question: "A farmer has 17 sheep, and all but 9 die. How many sheep are left?",
        answers:[
            {text:"0" , correct:false},
            {text:"9" , correct:true},
            {text:"8" , correct:false},
            {text:"17" , correct:false}
        ]
    },
    {
        question: "How many times can you subtract 10 from 100?",
        answers:[
            {text:"10" , correct:false},
            {text:"9" , correct:false},
            {text:"undefined" , correct:false},
            {text:"1" , correct:true}
        ]
    },
    {
        question: "Which is heavier: a pound of feathers or a pound of rocks?",
        answers:[
            {text:"Pound of Feathers" , correct:false},
            {text:"Pound of rocks" , correct:false},
            {text:"Both are same" , correct:true},
            {text:"Cann't determine without Instruement" , correct:false}
        ]
    },
    {
        question: "What should you do if you accidentally cut your finger while cooking?",
        answers:[
            {text:"Run it under cold water" , correct:false},
            {text:"Run it under hot water" , correct:false},
            {text:"Apply pressure and clean the wound" , correct:true},
            {text:"Suck on the wound" , correct:false}
        ]
    },
    {
        question: "How many continents are there in the world?",
        answers:[
            {text:"Seven" , correct:true},
            {text:"Two" , correct:false},
            {text:"Five" , correct:false},
            {text:"Ten" , correct:false}
        ]
    },
    {
        question: "What is a common symptom of dehydration?",
        answers:[
            {text:"High fever" , correct:false},
            {text:"Persistent Headache" , correct:true},
            {text:"Excess Sweating" , correct:false},
            {text:"Blurred Vision" , correct:false}
        ]
    },
    {
        question: "What is the smallest country in the world by land area?",
        answers:[
            {text:"Vatican City" , correct:true},
            {text:"Monaco" , correct:false},
            {text:"San Marino" , correct:false},
            {text:"Maldives" , correct:false}
        ]
    }
]

const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')
const nextButton = document.getElementById('next-btn')

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    resetState()
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML = "Next"
    showQuestion()
}
function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question

    currentQuestion.answers.forEach(answer => {
        let button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add('btn')
        answerButtons.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer )
    })
}
function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    } 
}
function selectAnswer(e){
    const selectedBtn = e.target 
    const iscorrect = selectedBtn.dataset.correct === 'true'
    if(iscorrect){
        selectedBtn.classList.add('correct')
        score++
    }else{
        selectedBtn.classList.add('incorrect')
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct === 'true'){
            button.classList.add('correct')
        }
        button.disabled = true
    })
    nextButton.style.display = 'block'
}

function showScore(){
    resetState()
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`
    nextButton.innerHTML = 'Play Again'
    nextButton.style.display = 'block'
}

function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        resetState()
        showQuestion()
    }else{
        showScore()
    }
}

nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    }else{
        startQuiz()
    }
})


startQuiz()
