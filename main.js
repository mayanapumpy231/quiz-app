const quizContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const feedbackElement = document.getElementById('feedback');

let currentQuestionIndex = 0;
let score = 0;

// quiz questions and answers
const quizData = [
    {
        question: 'What is the capital of Nigeria?',
        options: ['Abuja', 'Madrid', 'Paris', 'Rome'],
        correctAnswer: 'Abuja'
    },
    {
        question: 'Who is the CBN governor of Nigeria?',
        options: ['Sheyi Love', 'Bolu Bill', 'Olayemi Cardoso', 'Jay Jay'],
        correctAnswer: 'Olayemi Cardoso'
    },
    {
        question: 'What is the largest mammal in the world?',
        options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
        correctAnswer: 'Blue Whale'
    }
];
//show question by default
showQuestion();


// Function to initialize the quiz
function startQuiz() {
}

// Function to display a question and its options
function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];

    quizContainer.innerHTML = `<p>${currentQuestion.question}</p>`;

    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

// Function to check the selected answer
function checkAnswer(userAnswer) {
    const currentQuestion = quizData[currentQuestionIndex];

    if (userAnswer === currentQuestion.correctAnswer) {
        score++;
        feedbackElement.textContent = 'Correct!';
    } else {
        feedbackElement.textContent = `Wrong! The correct answer is ${currentQuestion.correctAnswer}.`;
    }

    // Disable buttons after an answer is selected
    optionsContainer.querySelectorAll('button').forEach(button => {
        button.disabled = true;
    });
}

// Function to move to the next question
function nextQuestion() {
    // Enable buttons for the next question
    optionsContainer.querySelectorAll('button').forEach(button => {
        button.disabled = false;
    });

    feedbackElement.textContent = '';

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        // Display the final score when all questions are answered
        quizContainer.innerHTML = `<p>Your final score is ${score} out of ${quizData.length} questions!</p>`;
        optionsContainer.innerHTML = '';
    }
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    startQuiz();
}
