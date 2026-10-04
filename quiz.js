// Array of questions with answers and options
const questions = [
    {
        question: "What is the capital of France?",
        correctAnswer: "Paris",
        options: ["Paris", "London", "Berlin", "Madrid"]
    },
    {
        question: "Which planet is known as the Red Planet?",
        correctAnswer: "Mars",
        options: ["Mercury", "Venus", "Mars", "Jupiter"]
    },
    {
        question: "What is the largest country in Africa by area?",
        correctAnswer: "Sudan",
        options: ["Sudan", "Nigeria", "Algeria", "Egypt"]
    },
    {
        question: "Which of these is not a type of renewable energy?",
        correctAnswer: "Coal",
        options: ["Solar", "Wind", "Hydroelectric", "Geothermal"]
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Function to display the next question
function showNextQuestion() {
    const questionContainer = document.getElementById('question-container');
    const progressBar = document.querySelector('.progress-bar span');

    if (currentQuestionIndex < questions.length) {
        // Clear previous question and options
        questionContainer.innerHTML = '';

        // Display current question
        const questionText = document.createElement('p');
        questionText.textContent = questions[currentQuestionIndex].question;
        questionContainer.appendChild(questionText);

        // Create buttons for each option
        questions[currentQuestionIndex].options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('btn', 'btn-secondary');
            button.onclick = function() {
                checkAnswer(option);
            };
            questionContainer.appendChild(button);
        });

        // Update progress bar
        progressBar.textContent = `${currentQuestionIndex + 1}/${questions.length}`;
    } else {
        // Show score card after all questions are answered
        const scoreCard = document.getElementById('score-card');
        scoreCard.innerHTML = `
            <p>Final Score: ${score}/4</p>
            <button onclick="restartQuiz()" class="btn btn-primary mt-4">Restart Quiz</button>
        `;
    }
}

// Function to check the answer and update progress
function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (selectedOption === correctAnswer) {
        // Show green feedback for correct answer
        document.querySelector(`button:contains("${selectedOption}")`).classList.add('bg-green-500');
        score++;
    } else {
        // Show red feedback for incorrect answer
        document.querySelector(`button:contains("${selectedOption}")`).classList.add('bg-red-500');
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showNextQuestion();
    } else {
        // Show score card after all questions are answered
        const scoreCard = document.getElementById('score-card');
        scoreCard.innerHTML = `
            <p>Final Score: ${score}/4</p>
            <button onclick="restartQuiz()" class="btn btn-primary mt-4">Restart Quiz</button>
        `;
    }
}

// Function to restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showNextQuestion();
}

// Start the quiz by showing the first question
showNextQuestion();