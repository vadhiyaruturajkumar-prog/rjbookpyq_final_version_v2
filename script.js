const questions = [
  {
    question: "Which of the following is the capital of Gujarat?",
    options: ["Surat", "Ahmedabad", "Vadodara", "Gandhinagar"],
    answer: "Gandhinagar"
  },
  {
    question: "Which river flows through the Gir Forest?",
    options: ["Tapi", "Sabarmati", "Hiran", "Mahi"],
    answer: "Hiran"
  }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const q = questions[currentQuestion];
  const container = document.getElementById('quiz-container');
  container.innerHTML = \`
    <div class="question">\${q.question}</div>
    <div class="options">
      \${q.options.map(opt => \`
        <label>
          <input type="radio" name="option" value="\${opt}" />
          \${opt}
        </label>\`).join('')}
    </div>
  \`;
}

function nextQuestion() {
  checkAnswer();
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
}

function checkAnswer() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) return;
  const answer = selected.value;
  if (answer === questions[currentQuestion].answer) {
    score++;
  }
}

function submitQuiz() {
  checkAnswer();
  document.getElementById('quiz-container').innerHTML = "";
  document.getElementById('result').innerText = \`You scored \${score} out of \${questions.length}\`;
}

window.onload = showQuestion;
