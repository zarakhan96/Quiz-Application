// Array of quiz questions, each with options and the correct answer
const questions = [
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "What galaxy is Earth located in?",
        options: ["Andromeda Galaxy", "Whirlpool Galaxy", "Triangulum Galaxy", "Milky Way Galaxy"],
        answer: "Milky Way Galaxy"
    },
    {
        question: "What is the hottest planet in our solar system?",
        options: ["Mercury", "Venus", "Mars", "Jupiter"],
        answer: "Venus"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "What is the name of the first man-made satellite launched by the Soviet Union in 1957?",
        options: ["Sputnik 1", "Explorer 1", "Apollo 11", "Hubble"],
        answer: "Sputnik 1"
    },
    {
        question: "How long does it take for light from the Sun to reach Earth?",
        options: ["8 seconds", "8 minutes", "8 hours", "8 days"],
        answer: "8 minutes"
    },
    {
        question: "Which planet has the most moons?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "What is the name of the largest moon of Saturn?",
        options: ["Europa", "Ganymede", "Titan", "Io"],
        answer: "Titan"
    },
    {
        question: "Which space telescope was launched into orbit in 1990?",
        options: ["Kepler", "Hubble", "James Webb", "Spitzer"],
        answer: "Hubble"
    },
    {
        question: "What is the term for a star that suddenly increases greatly in brightness because of a catastrophic explosion?",
        options: ["Comet", "Meteor", "Nova", "Asteroid"],
        answer: "Nova"
    }
];

// Initialize current question index and score
let currentQuestionIndex = 0;
let score = 0;

// Get HTML elements
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const scoreElement = document.getElementById('score');
const finalScoreElement = document.getElementById('final-score');

const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startQuizButton = document.getElementById('start-quiz');
const retryQuizButton = document.getElementById('retry-quiz');

// Add event listeners to start and retry buttons
startQuizButton.addEventListener('click', startQuiz);
retryQuizButton.addEventListener('click', retryQuiz);

// Function to start the quiz
function startQuiz() {
    welcomeScreen.style.display = 'none'; // Hide welcome screen
    quizScreen.style.display = 'block'; // Show quiz screen
    displayQuestion(); // Display the first question
}

// Function to display the current question
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question; // Set question text
    optionsElement.innerHTML = ''; // Clear previous options

    // Create and display options as buttons
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option, button));
        optionsElement.appendChild(button);
    });
}

// Function to check the selected answer
function checkAnswer(selectedOption, button) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++; // Increase score if correct
        button.classList.add('correct'); // Highlight correct answer
    } else {
        button.classList.add('wrong'); // Highlight wrong answer
    }

    currentQuestionIndex++; // Move to the next question

    // Display the next question or show the result after a short delay
    setTimeout(() => {
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            showResult();
        }
    }, 1000);
}

// Function to show the final result
function showResult() {
    quizScreen.style.display = 'none'; // Hide quiz screen
    resultScreen.style.display = 'block'; // Show result screen
    finalScoreElement.textContent = `Your Score: ${score} / ${questions.length}`; // Display final score
}

// Function to retry the quiz
function retryQuiz() {
    currentQuestionIndex = 0; // Reset question index
    score = 0; // Reset score
    resultScreen.style.display = 'none'; // Hide result screen
    quizScreen.style.display = 'block'; // Show quiz screen
    displayQuestion(); // Display the first question
}
