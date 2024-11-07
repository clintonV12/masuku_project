const questions = [
  {
    level: "Certificate",
    text: "What English city are you visiting if you're traveling on 'the tube'?",
    options: ["Birmingham", "York", "Devonshire", "London"],
    answer: "D",
    reward: 5
  },
  {
    level: "Certificate",
    text: "What is the capital of France?",
    options: ["Paris", "Berlin", "Madrid", "Rome"],
    answer: "A",
    reward: 5
  },
  {
    level: "Certificate",
    text: "What is the largest planet in our Solar System?",
    options: ["Mars", "Earth", "Jupiter", "Venus"],
    answer: "C",
    reward: 5
  }
];

let currentQuestionIndex = 0;
let totalScore = 0;

function resetOptionStyles() {
  document.querySelectorAll('.option').forEach(option => {
    option.style.backgroundColor = "#4c566a";
    option.style.color = "#eceff4";
    option.classList.remove("selected");
  });
}

function loadQuestion() {
  resetOptionStyles();
  const question = questions[currentQuestionIndex];
  document.getElementById('question-text').textContent = question.text;
  document.getElementById('optionA').textContent = 'A: ' + question.options[0];
  document.getElementById('optionB').textContent = 'B: ' + question.options[1];
  document.getElementById('optionC').textContent = 'C: ' + question.options[2];
  document.getElementById('optionD').textContent = 'D: ' + question.options[3];
  document.getElementById('score').firstElementChild.textContent = totalScore + ' Points';
  document.getElementById('question-number').textContent = (currentQuestionIndex + 1) + ' / ' + questions.length;
}

function selectOption(selectedOption) {
  const question = questions[currentQuestionIndex];
  if (selectedOption === question.answer) {
    totalScore += question.reward;
    //alert("Correct! You've earned " + question.reward + " points");
    showMsgToast("Correct! You've earned " + question.reward + " points");
  } else {
    showMsgToast("Incorrect! The correct answer was " + question.answer + ".");
  }
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showMsgToast("Quiz completed! Your total score is" + totalScore);
    currentQuestionIndex = 0;
    totalScore = 0;
    loadQuestion();
  }
}

loadQuestion();

function goBack() {
  showMsgToast("Going back to the previous screen.");
}